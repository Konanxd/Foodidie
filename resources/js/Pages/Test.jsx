import SecondaryButton from '@/Components/SecondaryButton';
import NavBar from '.././Components/NavBar';
export default function Test() {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/recipes', label: 'Recipes' },
        { path: '/about', label: 'About' },
    ];
    return (
        <div>
            <div>
                <NavBar navItems={navItems} />
            </div>
            <div className="mx-32 my-20 flex">
                <div className="flex-row items-center justify-center border-black">
                    <div className="max-w-3xl flex-col space-y-6 border-black px-4 py-20">
                        <h1 className="poppins-bold text-5xl">
                            Discover Delicious
                        </h1>
                        <h1 className="poppins-bold text-5xl">
                            Recipes for Every Mood!
                        </h1>
                        <p className="py-4 text-2xl tracking-tighter text-gray-500">
                            Find the perfect recipe for any occasion, from quick
                            snacks to gourmet meals, tailored just for you.
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
            <div className="my-20 flex justify-center">
                <img
                    src={'../assets/hero2.png'}
                    alt="Foodidie"
                    width={400}
                    height={400}
                />
                <div className="flex-row items-center justify-center border-black">
                    <div className="flex flex-col space-y-4">
                        <div className="poppins-semibold text-4xl">
                            Why choose &nbsp;
                            <span className="text-[#6AA78D]">Food</span>
                            <span className="text-[#1D1D35]">idie</span>?
                        </div>
                        <div className="flex flex-col justify-center gap-8">
                            <div className="flex flex-row gap-6">
                                <img
                                    src={'../assets/burger-icon.png'}
                                    alt="Foodidie"
                                    width={60}
                                    height={60}
                                />
                                <div className="flex flex-col">
                                    <span className="poppins-semibold text-xl">
                                        Personalized Recipes
                                    </span>
                                    <span className="poppins-regular text-lg text-[#1D1D35]">
                                        Discover dishes based on your taste and
                                        preference
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-6">
                                <img
                                    src={'../assets/taco-icon.png'}
                                    alt="Foodidie"
                                    width={60}
                                    height={60}
                                />
                                <div className="flex flex-col">
                                    <span className="poppins-semibold text-xl">
                                        Global Cuisine
                                    </span>
                                    <span className="poppins-regular text-lg text-[#1D1D35]">
                                        Access a wide variety of recipes from
                                        around the world
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-6">
                                <img
                                    src={'../assets/cheese-icon.png'}
                                    alt="Foodidie"
                                    width={60}
                                    height={60}
                                />
                                <div className="flex flex-col">
                                    <span className="poppins-semibold text-xl">
                                        Quick and Easy
                                    </span>
                                    <span className="poppins-regular text-lg text-[#1D1D35]">
                                        Save time with our efficient search and
                                        filers
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
