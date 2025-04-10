import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-12 border-t">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2">
<p className="text-2xl">BabyPoint</p>
                    </div>
                    <p className="mt-4 text-sm">Kreatywne pomoce edukacyjne dla nauczycieli przedszkola, terapeutów oraz rodziców.</p>
                    <div className="flex space-x-4 mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>

                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-lg">Materiały</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Zestawy edukacyjne</li>
                        <li>Karty trójdzielne</li>
                        <li>Plakaty edukacyjne</li>
                        <li>Karty pracy</li>
                        <li>Gry edukacyjne</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg">Konto</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Panel użytkownika</li>
                        <li>Zapisane materiały</li>
                        <li>Pobrane pliki</li>
                        <li>Plany</li>
                        <li>Faktury</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg">Informacje</h4>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>Regulamin</li>
                        <li>Polityka prywatności</li>
                        <li>Centrum Pomocy</li>
                    </ul>
                </div>
            </div>
            <div className="border-t mt-10 pt-6 text-center text-sm">
                &copy; {new Date().getFullYear()} BabyPoint Sp. z o.o, 
            </div>
        </footer>
    );
};

export default Footer;
