// app/components/LoginButton.js
'use client';

import { useRouter } from 'next/navigation';

export default function LoginButton() {
    const router = useRouter();

    const handleLogin = () => {
        const wordpressLoginUrl = `https://babypoint.pl/wp-login.php?redirect_to=${encodeURIComponent('http://localhost:3000/auth/callback')}`;
        router.push(wordpressLoginUrl);
    };

    return <button onClick={handleLogin}>Login with WordPress</button>;
}
