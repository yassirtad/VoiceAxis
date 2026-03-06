import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // ⚠️ Placeholder: Replace with real DB lookup before production.
        // For now, any non-empty email + password is accepted.
        if (!credentials?.email || !credentials?.password) return null;

        // TODO: Validate against your database
        // const user = await db.user.findUnique({ where: { email: credentials.email } });
        // if (!user || !bcrypt.compareSync(credentials.password, user.passwordHash)) return null;

        return {
          id: credentials.email as string,
          email: credentials.email as string,
          name: (credentials.email as string).split("@")[0],
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
