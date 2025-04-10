import { fetchProductBySlug } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FolderPlusIcon, ArrowPathIcon, StarIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import ProductTabs from "@/app/ui/components/product-tabs";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const slug = params.slug;
    const product = await fetchProductBySlug(slug);

    console.log(product);

    if (!product) {
        return <div>Product not found</div>;
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toISOString().split("T")[0]; // Extract YYYY-MM-DD
    };

    const tabData = [
        {
            id: "description",
            label: "Opis produktu",
            content: (
                <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className="text-sm text-gray-600"
                />
            ),
        },
        {
            id: "faq",
            label: "FAQ",
            content: (
                <div>
                    <p className="font-bold text-gray-600 text-sm pb-2">Czy muszę coś dodatkowo kupić lub mieć w domu?</p>
                    <p className="text-gray-500 text-sm font-medium mb-3">
                        Potrzebujesz jedynie drukarki (najlepiej kolorowej), papieru w odpowiednim formacie (A4/A3) oraz podstawowych przyborów plastycznych, takich jak nożyczki, klej, kredki/ołówki. Opcjonalnie możesz użyć plasteliny, farb lub materiałów kreatywnych.
                    </p>
                    <p className="font-bold text-gray-600 text-sm pb-2">Dla jakiej grupy wiekowej przeznaczony jest materiał?</p>
                    <p className="text-gray-500 text-sm font-medium mb-3">
                        Nasze materiały są dedykowane dzieciom w wieku wczesnoszkolnym (6–9 lat) i przedszkolnym (3-6 lat), ale wiele zadań mogą wykonywać także młodsze dzieci z pomocą dorosłego lub starsze dzieci, które interesują się przyrodą i plastyką.
                    </p>
                    <p className="font-bold text-gray-600 text-sm pb-2">Czy dziecko może korzystać z materiałów samodzielnie?</p>
                    <p className="text-gray-500 text-sm font-medium">
                        Tak – większość zadań została opracowana tak, by dziecko mogło je realizować samodzielnie lub z minimalną pomocą. To wspiera rozwój koncentracji, motoryki małej i logicznego myślenia, co jest zgodne z metodą Montessori.
                    </p>
                </div>
            ),
        },
        {
            id: "reviews",
            label: "Opinie (3)",
            content: (
                <>
                    <div className="text-sm text-gray-500">
                        <div className="flex mb-2">
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-gray-300 fill-gray-300" />
                        </div>
                        <p className="font-bold pb-2">Anna Kowalska</p>
                        <span className="text-sm text-gray-500">12.04.2025</span>
                        <p className="pt-3">Bardzo ułatwia życie tacie. Dziecko po przeorganizowaniu szuflad bez problemu znajduje swoje ubranka. Jedynie co to szkoda że spodnie długie są 3 albo 4 razy ale już krótkich spodenek nie ma. Taka sama sytuacja z body na krótki rękaw są ale na długi nie ma</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        <div className="flex mb-2">
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                        </div>
                        <p className="font-bold pb-2">Katarzyna Zombik</p>
                        <span className="text-sm text-gray-500">03.04.2025</span>
                        <p className="pt-3">Bardzo ułatwia życie tacie. Dziecko po przeorganizowaniu szuflad bez problemu znajduje swoje ubranka. Jedynie co to szkoda że spodnie długie są 3 albo 4 razy ale już krótkich spodenek nie ma. Taka sama sytuacja z body na krótki rękaw są ale na długi nie ma</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        <div className="flex mb-2">
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-yellow-400 fill-yellow-400" />
                            <StarIcon width={20} height={20} className="stroke-gray-300 fill-gray-300" />
                        </div>
                        <p className="font-bold pb-2">Katarzyna Zombik</p>
                        <span className="text-sm text-gray-500">03.04.2025</span>
                        <p className="pt-3">Bardzo ułatwia życie tacie. Dziecko po przeorganizowaniu szuflad bez problemu znajduje swoje ubranka. Jedynie co to szkoda że spodnie długie są 3 albo 4 razy ale już krótkich spodenek nie ma. Taka sama sytuacja z body na krótki rękaw są ale na długi nie ma</p>
                    </div>
                </>
            ),
        },
    ];

    return (
        <div className="mx-auto container w-sm xl:w-3/5 lg:flex gap-20">
            <div className="lg:w-3/5 w-full product-images">
                <div className="product-image w-full h-auto mb-6">
                    <Image
                        src={product.images[0]?.src || '/placeholder.png'}
                        alt={product.name || 'Product image'}
                        width={640}
                        height={640}
                        className="object-cover rounded"
                        priority={true}
                    />
                </div>

                <ProductTabs tabs={tabData} />
            </div>



            <div className="lg:w-2/5 product-details">
                <h1 className="text-3xl font-bold mb-4">{product.name} - Zestaw edukacyjny</h1>
                <div className="flex mb-4 gap-3">
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"><FolderPlusIcon width={16} height={16} className="mr-2" /> Dodane: {formatDate(product.date_created)}</span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"><ArrowPathIcon width={16} height={16} className="mr-2" />Aktualizacja: {formatDate(product.date_modified)}</span>
                </div>
                <div className="w-full product-description mb-6">
                    <div
                        dangerouslySetInnerHTML={{ __html: product.short_description }}
                        className="font-medium text-gray-700"
                    />
                </div>

                <div className="flex gap-5">
                    <button className="flex-auto py-3 bg-indigo-600 font-bold text-white rounded-md">Pobierz</button>
                    <button className="flex-auto py-3 bg-indigo-50 font-bold text-indigo-600 rounded-md">Podejrzyj</button>
                </div>

                <div className="mt-10 py-8 border-t border-b">
                    <p className="font-bold text-sm">Zawartość</p>
                    <ul className="list-disc text-gray-600 pl-5">
                        <li className="text-sm font-medium pb-2">180+ stron z 12 zadaniami do wykonania</li>
                        <li className="text-sm font-medium pb-2">Dostępne formaty: PDF, ZIP</li>
                        <li className="text-sm font-medium">Pliki do druku w formacie A4</li>
                    </ul>
                </div>

                <div className="py-8 border-b">
                    <p className="font-bold text-sm">Licencja</p>
                    <p className="text-gray-500 text-sm font-medium">
                        Do użytku osobistego i profesjonalnego. Nie możesz odsprzedawać ani rozpowszechniać tych materiałów edukacyjnych w ich oryginalnej lub zmodyfikowanej formie. <Link href="#" className="font-semibold text-indigo-600">Pełna treść licencji</Link>
                    </p>
                </div>

                <div className="pt-8">
                    <p className="font-bold text-sm">Nawigacja</p>
                    <p className="text-gray-500 text-sm font-medium pb-2">Kategoria: <Link href="#" className="font-semibold text-indigo-600">Zestawy edukacyjne</Link></p>
                    <p className="text-gray-500 text-sm font-medium">Tagi: <Link href="#" className="font-semibold text-indigo-600">Pszczoły</Link></p>
                    <button className="inline-flex items-center rounded-md bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset"><BookmarkIcon width={20} height={20} className="mr-2" />Dodaj do ulubionych</button>
                </div>

            </div>
        </div>
    );
}
