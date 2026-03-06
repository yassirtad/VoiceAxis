import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  // BreadcrumbList schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-2">
        <ol
          className="flex items-center gap-1.5 text-xs text-slate-500"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, i) => (
            <li
              key={item.href}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i === 0 && <Home className="w-3 h-3" aria-hidden="true" />}
              {i > 0 && <ChevronRight className="w-3 h-3 opacity-40" aria-hidden="true" />}
              {i === allItems.length - 1 ? (
                <span
                  className="text-slate-300 font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
