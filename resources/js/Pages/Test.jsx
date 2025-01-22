import SecondaryButton from '@/Components/SecondaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '../Components/Footer';
export default function Test() {
    return (
        <GuestLayout>
            <section>
                <div className="mx-32 my-10 flex">
                    <div className="flex-row items-center justify-center border-black">
                        <div className="max-w-3xl flex-col space-y-6 border-black px-4 py-20">
                            <h1 className="poppins-bold text-5xl">
                                Discover Delicious
                            </h1>
                            <h1 className="poppins-bold text-5xl">
                                Recipes for Every Mood!
                            </h1>
                            <p className="py-4 text-xl tracking-tighter text-gray-500">
                                Find the perfect recipe for any occasion, from
                                quick snacks to gourmet meals, tailored just for
                                you.
                            </p>
                            <SecondaryButton className="bg-[#6AA78D] px-8 py-3 text-lg text-white">
                                Discover recipes
                            </SecondaryButton>
                        </div>
                    </div>
                    <div className="flex-row">
                        <img
                            src={'../assets/hero.png'}
                            alt="Foodidie"
                            width={450}
                            height={450}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[#E5FFE8] py-16">
                    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 text-center md:grid-cols-3">
                        <div className="flex flex-col items-center">
                            <div className="mb-4 text-4xl">
                                <img
                                    src={'../assets/search-icon.png'}
                                    alt="Search"
                                    className="object-contain"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Search
                            </h3>
                            <p className="text-sm text-gray-600">
                                Enter ingredients or cuisine in the search bar.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 text-4xl">
                                <img
                                    src={'../assets/browse-icon.png'}
                                    alt="Browse"
                                    className="object-contain"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Browse
                            </h3>
                            <p className="text-sm text-gray-600">
                                Explore recipes tailored to your needs.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="mb-4 text-4xl">
                                <img
                                    src={'../assets/food-icon.png'}
                                    alt="Food"
                                    className="object-contain"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">
                                Cook & Enjoy
                            </h3>
                            <p className="text-sm text-gray-600">
                                Follow easy, step-by-step instructions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="my-20 flex justify-center">
                    <img
                        src={'../assets/hero2.png'}
                        alt="Foodidie"
                        width={350}
                        height={350}
                    />
                    <div className="flex flex-row items-center justify-center border-black pl-24">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="poppins-semibold mb-5 text-4xl">
                                Why choose&nbsp;
                                <span className="text-[#6AA78D]">Food</span>
                                <span className="text-[#1D1D35]">idie</span>?
                            </div>
                            <div className="flex flex-col justify-center gap-8">
                                <div className="flex flex-row gap-6">
                                    <img
                                        src={'../assets/burger-icon.png'}
                                        alt="Foodidie"
                                        className="object-contain"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="flex max-w-lg flex-col gap-3">
                                        <span className="poppins-semibold text-xl">
                                            Personalized Recipes
                                        </span>
                                        <p className="poppins-regular text-l text-[#1D1D35]">
                                            Discover dishes based on your taste
                                            and preference
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <img
                                        src={'../assets/taco-icon.png'}
                                        alt="Foodidie"
                                        className="object-contain"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="flex max-w-lg flex-col gap-3">
                                        <span className="poppins-semibold text-xl">
                                            Global Cuisine
                                        </span>
                                        <p className="poppins-regular text-l text-[#1D1D35]">
                                            Access a wide variety of recipes
                                            from around the world
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <img
                                        src={'../assets/cheese-icon.png'}
                                        alt="Foodidie"
                                        className="object-contain"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="flex max-w-lg flex-col gap-3">
                                        <span className="poppins-semibold text-xl">
                                            Quick and Easy
                                        </span>
                                        <p className="poppins-regular text-l text-[#1D1D35]">
                                            Save time with our efficient search
                                            and filers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mx-20 my-36 justify-center">
                    <h1 className="mb-8 text-center text-3xl font-bold">
                        Popular <span className="text-[#6AA78D]">recipes</span>{' '}
                        of all time{' '}
                        <span role="img" aria-label="fire">
                            🔥🔥
                        </span>
                    </h1>
                    <div className="mx-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className="rounded-lg p-12 text-center shadow-lg">
                            <div className="mx-auto mb-4 h-40 w-40">
                                <img
                                    src="../assets/card-img.png"
                                    alt="Placeholder"
                                />
                            </div>
                            <h2 className="mb-2 text-xl font-semibold">
                                Creamy Garlic Pasta
                            </h2>
                            <p className="mb-4 text-gray-600">
                                Rich and velvety pasta tossed in a creamy garlic
                                sauce, perfect for a cozy dinner night.
                            </p>
                            <a
                                href="#"
                                className="font-semibold text-[#6AA78D] hover:underline"
                            >
                                Read more..
                            </a>
                        </div>
                        <div className="rounded-lg p-12 text-center shadow-lg">
                            <div className="mx-auto mb-4 h-40 w-40">
                                <img
                                    src="../assets/card-img.png"
                                    alt="Placeholder"
                                />
                            </div>
                            <h2 className="mb-2 text-xl font-semibold">
                                Creamy Garlic Pasta
                            </h2>
                            <p className="mb-4 text-gray-600">
                                Rich and velvety pasta tossed in a creamy garlic
                                sauce, perfect for a cozy dinner night.
                            </p>
                            <a
                                href="#"
                                className="font-semibold text-[#6AA78D] hover:underline"
                            >
                                Read more..
                            </a>
                        </div>
                        <div className="rounded-lg p-12 text-center shadow-lg">
                            <div className="mx-auto mb-4 h-40 w-40">
                                <img
                                    src="../assets/card-img.png"
                                    alt="Placeholder"
                                />
                            </div>
                            <h2 className="mb-2 text-xl font-semibold">
                                Creamy Garlic Pasta
                            </h2>
                            <p className="mb-4 text-gray-600">
                                Rich and velvety pasta tossed in a creamy garlic
                                sauce, perfect for a cozy dinner night.
                            </p>
                            <a
                                href="#"
                                className="font-semibold text-[#6AA78D] hover:underline"
                            >
                                Read more..
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </GuestLayout>
    );
}
