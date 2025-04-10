import { quicksand } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from '../ui/components/sidenav';

export const metadata: Metadata = {
  title: {
    template: '%s - BabyPoint',
    default: 'Moje Konto - BabyPoint',
  },
  description: 'Panel do zarządzania kontem użytkownika na Babypoint.pl',
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
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="border-r w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}