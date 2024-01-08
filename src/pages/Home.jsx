import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return (
    <>
        <Header />
        <div className="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
            <a href="/overlays" className="mb-6 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-40 sm:w-2/5 bg-neutral-50 rounded-lg ring-2 ring-purple-300 shadow-xl shadow-purple-300 flex flex-row items-center justify-evenly gap-4 px-4">
                <div>
                    <span className="font-bold text-purple-300">Overlay</span>
                    <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </a>
            <a href="/overlays" className="mb-6 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-40 sm:w-2/5 bg-neutral-50 rounded-lg ring-2 ring-purple-300 shadow-xl shadow-purple-300 flex flex-row items-center justify-evenly gap-4 px-4">
                <div>
                    <span className="font-bold text-purple-300">Overlay</span>
                    <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </a>
            <a href="/overlays" className="mb-6 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-40 sm:w-2/5 bg-neutral-50 rounded-lg ring-2 ring-purple-300 shadow-xl shadow-purple-300 flex flex-row items-center justify-evenly gap-4 px-4">
                <div>
                    <span className="font-bold text-purple-300">Overlay</span>
                    <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </a>
            <a href="/overlays" className="mb-6 cursor-pointer transition-all duration-500 hover:translate-y-2 w-full h-40 sm:w-2/5 bg-neutral-50 rounded-lg ring-2 ring-purple-300 shadow-xl shadow-purple-300 flex flex-row items-center justify-evenly gap-4 px-4">
                <div>
                    <span className="font-bold text-purple-300">Overlay</span>
                    <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </a>
        </div>

        <Footer />
    </>
    );
}