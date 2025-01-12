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
                    </div>
                </div>
                <div className="flex-row">
                    <img
                        src={'../assets/hero.png'}
                        alt=""
                        width={450}
                        height={450}
                    />
                </div>
            </div>
        </div>
    );
}
