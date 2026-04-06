import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const adminUser = process.env.ADMIN_USERNAME;
        const adminHash = process.env.ADMIN_PASSWORD_HASH;
        if (!adminUser || !adminHash) return null;
        if (credentials?.username !== adminUser) return null;
        const { default: bcrypt } = await import('bcryptjs');
        const valid = await bcrypt.compare(
          credentials.password as string,
          adminHash
        );
        if (!valid) return null;
        return { id: '1', name: 'Admin', email: 'admin@hiredevelopershop.com' };
      }
    })
  ],
  pages: { signIn: '/admin/login' },
  session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 7 }
});
