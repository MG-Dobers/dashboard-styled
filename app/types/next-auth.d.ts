import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
        user?: {
            name?: string;
            email?: string;
        };
    }

    interface User {
        token?: string;
        name?: string;
        email?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
    }
}
