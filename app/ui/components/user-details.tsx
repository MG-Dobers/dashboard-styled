'use client';

import { useSession } from 'next-auth/react';

export default function UserDetails() {
    const { data: session, status } = useSession();

    if (status === 'loading') return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                Welcome, {session?.user?.name || 'User'}!
            </h1>
            <p>This is your dashboard.</p>
        </div>
    );
}
