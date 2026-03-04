import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@interiorpro.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock authorization for setup purposes
        if (credentials?.email === "admin@interiorpro.com" && credentials?.password === "admin123") {
          return { id: "1", name: "Admin", email: "admin@interiorpro.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    }
  }
});

export { handler as GET, handler as POST };
