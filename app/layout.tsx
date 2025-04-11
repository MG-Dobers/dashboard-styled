import '@/app/ui/global.css';
import { quicksand } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: '%s - BabyPoint',
        default: 'Moje Konto - BabyPoint',
    },
    description: 'Panel do zarządzania kontem na BabyPoint',
    metadataBase: new URL('localhost:3000'),
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${quicksand.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}