import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedLink = {
  label: string;
  href: string;
  desc: string;
};

interface InternalLinksProps {
  heading?: string;
  links: RelatedLink[];
}

export function InternalLinks({
  heading = "Explore related solutions",
  links,
}: InternalLinksProps) {
  return (
    <aside
      aria-label="Related pages"
      className="py-12 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-5">
          {heading}
        </h2>
        <nav aria-label={heading}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-start justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/[0.04] transition-all"
                >
                  <div>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors block mb-0.5">
                      {link.label}
                    </span>
                    <span className="text-xs text-slate-500">{link.desc}</span>
                  </div>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
