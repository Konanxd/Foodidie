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
            <section className="relative">
                <div className="h-48 bg-[#E5FFE8]">
                    <h1 className="poppins-bold mx-28 pt-20 text-2xl text-gray-800">
                        Explore Recipes
                    </h1>
                </div>
                <div className="absolute top-32 w-full">
                    <div className="mx-28 max-w-7xl rounded-xl bg-white p-5 shadow-lg">
                        <TextInput
                            type="text"
                            placeholder="Search Here"
                            className="h-12 w-full rounded-xl border border-gray-50 bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6AA78D]"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <button
                            onClick={handleSearch}
                            className="mt-4 rounded-full bg-[#6AA78D] px-4 py-2 text-white"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-6 mt-12">
                    <h2 className="poppins-bold mx-28 mb-4 text-xl text-gray-800">
                        Categories
                    </h2>
                    <div className="mx-28 flex max-w-7xl flex-wrap gap-6 rounded-xl bg-white p-5 shadow-lg">
                        {[
                            'All',
                            'Appetizer',
                            'Main Courses',
                            'Side Dishes',
                            'Sweets and Desserts',
                            'Snacks',
                            'Beverages',
                        ].map((category, index) => (
                            <button
                                key={index}
                                className="rounded-full border-2 border-[#6AA78D] px-4 py-2 text-[#6AA78D] hover:bg-[#6AA78D] hover:text-white"
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
            <section>
                <Footer />
            </section>
        </GuestLayout>
    );
}
