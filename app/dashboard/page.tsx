import Pagination from '../ui/components/pagination';
import Search from '../ui/components/search';
import ProductGrid from '../ui/components/product-grid';
import { fetchFilteredProducts } from '../lib/data';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { CardsSkeleton } from '../ui/skeletons';
import UserDetails from '../ui/components/user-details';

export const metadata: Metadata = {
  title: 'Kokpit',
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
  const { products, total } = await fetchFilteredProducts(query, currentPage);
  const totalPages = Math.ceil(total / 24);

  return (
    <div className="mx-auto container">
      <div className="flex w-full items-center justify-between">
        <UserDetails />
        <h1 className="text-2xl">Twoje materiały</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Szukaj produktów..." />
      </div>
      <Suspense key={query + currentPage} fallback={<CardsSkeleton />}>
        <ProductGrid products={products} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}