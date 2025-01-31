import Footer from '@/Components/Footer';
import IngredientAutocomplete from '@/Components/IngredientAutocomplete';
import Tag from '@/Components/Tag';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
};

export default function Recipes() {
    const {
        recipes = [],
        searchQuery,
        selectedIngredients = [],
    } = usePage().props;
    const [query, setQuery] = useState(searchQuery || '');
    const [ingredients, setIngredients] = useState([]);

    const handleSearch = (title, ingredients) => {
        router.get('/recipes', { title, ingredients });
    };

    const handleTagsChange = (selectedTags) => {
        setIngredients(selectedTags);
        console.log('Selected Tags:', selectedTags);
        console.log('Ingredients (Before State Update):', ingredients);
    };

    useEffect(() => {
        console.log('Ingredients (Updated State):', ingredients);
    }, [ingredients]);

    return (
        <GuestLayout>
            <section>
                <div className="bg-[#E5FFE8] pb-4 pt-16">
                    <h1 className="poppins-bold mx-28 mb-4 text-2xl text-gray-800">
                        Explore Recipes
                    </h1>
                    <div className="mx-28 max-w-7xl rounded-xl bg-white">
                        <div className="relative">
                            <TextInput
                                type="text"
                                placeholder="Search Recipe Here"
                                className="h-14 w-full rounded-xl border border-gray-50 py-2 pl-4 pr-14 focus:outline-none focus:ring-2 focus:ring-[#6AA78D]"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />

                            <button
                                onClick={() =>
                                    handleSearch(query, selectedIngredients)
                                }
                                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center"
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
                    <div className="mx-28 my-4 max-w-7xl rounded-xl">
                        <div className="flex w-full flex-row justify-between gap-2">
                            <div className="flex w-full items-center space-x-4">
                                <IngredientAutocomplete
                                    onTagsChange={handleTagsChange}
                                    selectedIngredients={selectedIngredients}
                                />
                            </div>
                            <button
                                onClick={() => handleSearch(query, ingredients)}
                                className="text-l flex h-14 w-28 items-center justify-center rounded-2xl bg-[#6AA78D] text-white"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    {/* <div className="mx-28 flex max-w-7xl flex-wrap gap-4">
                        {[
                            'Apple',
                            'Sugar',
                            'Flour',
                            'Salt',
                            'Trimmed rhubarb',
                            'Noodles',
                            'Onion',
                            'Unsalted butter',
                            'Butter',
                            'Blueberry',
                            'Lemon',
                            'Nutmeg',
                            'Egg',
                            'Beef',
                        ].map((category, index) => (
                            <button
                                key={index}
                                className="rounded-full border-2 border-[#6AA78D] bg-white px-4 py-2 text-[#6AA78D] hover:bg-[#6AA78D] hover:text-white"
                            >
                                {category}
                            </button>
                        ))}
                    </div> */}
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
                                className="overflow-hidden rounded-xl bg-white shadow-sm"
                            >
                                <div className="relative">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="h-48 w-full object-cover"
                                    />
                                    <button className="absolute right-3 top-3 rounded-full p-2 shadow-md backdrop-blur-lg">
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
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {recipe.title}
                                    </h3>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <div className="flex items-center">
                                            <img
                                                src={'../assets/time-icon.png'}
                                                alt="Time"
                                                className="mr-1 object-contain"
                                                width={18}
                                                height={18}
                                            />
                                            {recipe.readyInMinutes} Minutes
                                        </div>
                                        <div className="ml-4 flex items-center">
                                            <img
                                                src={
                                                    '../assets/calories-icon.png'
                                                }
                                                alt="Calories"
                                                className="mr-1 object-contain"
                                                width={18}
                                                height={18}
                                            />
                                            {recipe.nutritions[0].amount} Kcal
                                        </div>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <Tag
                                            excludeTags={'water'}
                                            tags={recipe.ingredients.map(
                                                (ingredient) =>
                                                    toTitleCase(
                                                        ingredient.name,
                                                    ),
                                            )}
                                        />
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
