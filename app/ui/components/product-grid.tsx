import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/app/lib/definitions';

export default function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="mt-6 grid grid-cols-1 gap-10 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <div key={product.id} className="group relative">
                    <Image
                        alt={product.images[0]?.alt || 'Product Image'}
                        src={product.images[0]?.src || '/placeholder.png'}
                        width={300}
                        height={300}
                        className="aspect-square w-full rounded-md bg-gray-200 object-fill group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <Link href={`/product/${product.slug}`}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {product.categories[0]?.name || 'No Category'}
                            </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                            {product.price} {product.currency || 'PLN'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
