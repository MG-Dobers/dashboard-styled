// app/auth/callback/page.js
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthCallback() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const code = searchParams.get('code');
        if (code) {
            // Exchange the code for a JWT token
            fetch('https://babypoint.pl/wp-json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.token) {
                        // Store the token securely
                        localStorage.setItem('token', data.token);
                        router.push('/dashboard');
                    } else {
                        // Handle error
                        console.error('Authentication failed:', data);
                    }
                })
                .catch((error) => {
                    console.error('Error during authentication:', error);
                });
        }
    }, [router, searchParams]);

    return <div>Authenticating...</div>;
}
