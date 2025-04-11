// auth.ts
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials) {
                const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/jwt-auth/v1/token`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: credentials.username,
                        password: credentials.password,
                    }),
                });

                const user = await res.json();
                console.log(user.data)

                if (res.ok && user.token) {
                    return {
                        id: user.user_email || credentials.username,
                        name: user.user_display_name,
                        email: user.user_email,
                        token: user.token,
                    };
                }

                return null;
            },
        }),
    ],
    session: { strategy: 'jwt' },
    callbacks: {
        jwt({ token, user }) {
            if (user?.token) {
                token.accessToken = user.token;
            }
            return token;
        },
        session({ session, token }) {
            session.accessToken = token.accessToken;
            return session;
        },
    },
});
