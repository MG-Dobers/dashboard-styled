'use client';

import {
    UserGroupIcon,
    HomeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Kokpit', href: '/dashboard', icon: HomeIcon },
    { name: 'Zamówienia', href: '/dashboard/orders', icon: UserGroupIcon },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[40px] gap-3 my-1 py-2 px-3 font-semibold hover:bg-indigo-100 rounded-md',
                            {
                                'bg-indigo-50 text-indigo-700': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}