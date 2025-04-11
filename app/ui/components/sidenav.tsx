import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './nav-links';


export default function SideNav() {
    return (
        <div className="flex h-full flex-col py-4">
            <Link className="flex justify-center h-30" href="/">
                <div className="w-32 mb-6">
                    <Image src="/babypoint-logo.png" alt="Logo BabyPoint" width={120} height={60} />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between flex-col mx-4">
                <NavLinks />
                <div className="hidden h-auto w-full grow md:block"></div>
            </div>
        </div>
    );
}