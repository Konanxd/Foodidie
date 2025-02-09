import { router } from '@inertiajs/react';
import { useState } from 'react';

const BookmarkButton = ({ recipe, isBookmarkedInitially }) => {
    const [isBookmarked, setIsBookmarked] = useState(isBookmarkedInitially);

    const handleBookmark = (e) => {
        e.preventDefault();

        if (isBookmarked) {
            router.delete(route('bookmark.destroy', recipe.id_recipe), {
                preserveState: true,
                onSuccess: () => setIsBookmarked(false),
                onError: (errors) => console.log(errors),
            });
        } else {
            router.post(
                route('bookmark.store'),
                {
                    id_recipe: parseInt(recipe.id_recipe),
                    title: `${recipe.title}`,
                    image: `${recipe.image}`,
                },
                {
                    preserveState: true,
                    onSuccess: () => setIsBookmarked(true),
                    onError: (errors) => console.log(errors),
                },
            );
        }
    };

    return (
        <button
            className="absolute right-3 top-3 rounded-full p-2 shadow-md backdrop-blur-lg"
            onClick={(e) => handleBookmark(e)}
            type="button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${isBookmarked ? 'text-red-500' : 'text-gray-400'} ${isBookmarked ? 'hover:text-gray-400' : 'hover:text-red-500'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </button>
    );
};

export default BookmarkButton;
