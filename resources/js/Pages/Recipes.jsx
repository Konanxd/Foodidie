import Footer from '@/Components/Footer';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Recipes() {
    const { recipes = [], searchQuery } = usePage().props;
    const [title, setTitle] = useState(searchQuery || '');

    const handleSearch = () => {
        router.get('/recipes', { title });
    };

    return (
        <GuestLayout>
            <section>
            <div className="bg-[#E5FFE8] pt-16 pb-4">
                <h1 className="text-2xl mx-28 poppins-bold text-gray-800 mb-4">Explore Recipes</h1>
                <div className="bg-white mx-28 rounded-xl max-w-7xl">
                    <div className="relative">
                        <TextInput
                        type="text"
                        placeholder="Search Recipe Here"
                        className="h-14 w-full rounded-xl border border-gray-50 pl-4 pr-14 py-2 focus:outline-none focus:ring-2 focus:ring-[#6AA78D]"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />

                        <button
                        onClick={handleSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 flex items-center justify-center"
                        >
                        <img
                            src={'../assets/search-button.png'}
                            alt="Search Button"
                            className="object-contain"
                            width={24}
                            height={24}
                        />
                        </button>
                    </div>
                </div>
                </div>
            </section>

            <section>
                <div className="my-6">
                    <h2 className="poppins-bold mx-28 mb-4 text-xl text-gray-800">
                        Search By Ingredients
                    </h2>
                    <div className="mx-28 my-4 rounded-xl max-w-7xl">
                        <div className="flex items-center space-x-4">

                            <TextInput
                            type="text"
                            placeholder='Example: “Apple, Flour, Sugar”'
                            className="bg-white h-14 flex-1 rounded-xl border border-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6AA78D]"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            />
                            <button
                            onClick={handleSearch}
                            className="h-14 w-28 rounded-2xl bg-[#6AA78D] flex items-center justify-center text-l text-white"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="mx-28 flex max-w-7xl flex-wrap gap-4">
                        {[
                            'Apple', 'Sugar', 'Flour', 'Salt', 'Trimmed rhubarb',
                            'Noodles', 'Onion', 'Unsalted butter', 'Butter',
                            'Blueberry', 'Lemon', 'Nutmeg', 'Egg', 'Beef',
                        ].map((category, index) => (
                            <button
                                key={index}
                                className="bg-white rounded-full border-2 border-[#6AA78D] px-4 py-2 text-[#6AA78D] hover:bg-[#6AA78D] hover:text-white"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                {recipes.length === 0 ? (
                    <div className="my-12 flex w-full items-center justify-center">
                        <span className="poppins-bold text-lg">
                            No recipes found.
                        </span>
                    </div>
                ) : (
                    <div className="mx-28 my-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {recipes.map((recipe) => (
                            <div
                                key={recipe.id}
                                className="overflow-hidden rounded-lg bg-white shadow-md"
                            >
                                <img
                                    src={
                                        'https://img.spoonacular.com/recipes/' +
                                        recipe.id +
                                        '-556x370.jpg'
                                    }
                                    alt="Recipe"
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6">
                                    <div className="mb-2 flex items-center text-sm text-gray-500">
                                        <span className="mr-4 flex items-center">
                                            <img
                                                src={'../assets/time-icon.png'}
                                                alt="Time"
                                                className="mr-1 object-contain"
                                                width={24}
                                                height={24}
                                            />
                                            {recipe.readyInMinutes} Minutes
                                        </span>
                                        <span className="flex items-center">
                                            <img
                                                src={
                                                    '../assets/calories-icon.png'
                                                }
                                                alt="Clories"
                                                className="mr-1 object-contain"
                                                width={24}
                                                height={24}
                                            />
                                            {recipe.calories} Kcal
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {recipe.title}
                                        </h3>
                                        <p
                                            className="line-clamp-3 h-16 text-sm text-gray-600"
                                            dangerouslySetInnerHTML={{
                                                __html: recipe.summary,
                                            }}
                                        />
                                        <a
                                            href="#"
                                            className="mt-2 inline-block text-sm text-[#6AA78D] hover:underline"
                                        >
                                            See Recipes...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Updated Card! */}
            <section>
            <div className="grid grid-cols-3 gap-6 mx-28 my-10">
                {[1, 2, 3].map((item, index) => (
                    <div
                    key={index}
                    className="rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                    <div className="relative">
                        <img
                        src="https://cookingwithdog.com/wp-content/uploads/2017/03/tamagoyaki-00.jpg"
                        alt="Telur Dadar"
                        className="w-full h-48 object-cover"
                        />
                        <button className="absolute top-3 right-3 backdrop-blur-lg p-2 rounded-full shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white hover:text-red-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        </button>
                    </div>

                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800">Tamagoyaki</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                        <div className="flex items-center">
                        <img
                            src={'../assets/time-icon.png'}
                            alt="Time"
                            className="mr-1 object-contain"
                            width={18}
                            height={18}
                            />
                            10 Minutes
                        </div>
                        <div className="ml-4 flex items-center">
                        <img
                            src={'../assets/calories-icon.png'}
                            alt="Calories"
                            className="mr-1 object-contain"
                            width={18}
                            height={18}
                            />
                            450 Kcal
                        </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                        {['Egg', 'Salt', 'Scallion'].map((tag, i) => (
                            <span
                            key={i}
                            className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
                </div>

            </section>

            <section>
                <Footer />
            </section>
        </GuestLayout>
    );
}
