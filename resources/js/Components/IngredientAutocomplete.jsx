import { useEffect, useState } from 'react';
import TextInput from './TextInput';

const fetchIngredients = async (query) => {
    try {
        const response = await fetch(`/api/ingredients?query=${query}`);

        if (!response.ok) {
            throw new Error('Failed to fetch ingredients');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        return [];
    }
};

const IngredientAutocomplete = ({ onTagsChange }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchIngredients('');
            setIngredients(data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (inputValue.length >= 2) {
            const filtered = ingredients.filter((ingredient) =>
                ingredient.toLowerCase().includes(inputValue.toLowerCase()),
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    }, [inputValue, ingredients]);

    const handleSelectTag = (tag) => {
        if (!selectedTags.includes(tag)) {
            const newTags = [...selectedTags, tag];
            setSelectedTags(newTags);
            onTagsChange(newTags);
        }
        setInputValue('');
        setIngredients([]);
    };

    const handleRemoveTag = (tag) => {
        const newTags = selectedTags.filter((t) => t !== tag);
        setSelectedTags(newTags);
        onTagsChange(newTags);
    };

    return (
        <div className="w-full">
            <TextInput
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Example: “Apple, Flour, Sugar”"
                className="h-14 w-full rounded-xl border border-gray-50 py-2 pl-4 pr-14 focus:outline-none focus:ring-2 focus:ring-[#6AA78D]"
            />

            {inputValue && suggestions.length > 0 && (
                <div className="absolute z-10 mt-2 rounded-lg border border-gray-300 bg-white shadow-lg">
                    {suggestions.map((ingredient, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelectTag(ingredient)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            {ingredient}
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-2 flex flex-wrap gap-2">
                {selectedTags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm"
                    >
                        {tag}
                        <button
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-2 rounded-full bg-gray-300 p-1 hover:bg-gray-400"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IngredientAutocomplete;
