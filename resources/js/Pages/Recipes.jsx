import BookmarkButton from '@/Components/BookmarkButton';
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
        bookmarks = [],
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
                                    selectedItems={selectedIngredients}
                                    inputType="ingredients"
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
                                key={recipe.id_recipe}
                                className="overflow-hidden rounded-xl bg-white shadow-sm"
                            >
                                <div className="relative">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="h-48 w-full object-cover"
                                    />
                                    <BookmarkButton
                                        recipe={recipe}
                                        isBookmarkedInitially={bookmarks.includes(
                                            recipe.id_recipe,
                                        )}
                                    />
                                </div>
                                <div className="p-6">
                                    <a
                                        onClick={(e) => {
                                            e.preventDefault();
                                            router.visit(
                                                `details/${recipe.id_recipe}`,
                                                recipe,
                                            );
                                        }}
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {recipe.title}
                                        </h3>
                                    </a>
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
