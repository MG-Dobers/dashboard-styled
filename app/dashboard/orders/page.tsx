import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Zamówienia',
};

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="mx-auto container">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Twoje zamówienia</h1>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>

            </Suspense>
        </div>
    );
}