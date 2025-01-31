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

const IngredientAutocomplete = ({ onTagsChange, selectedIngredients }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedTags, setSelectedTags] = useState(selectedIngredients || []);
    const [ingredients, setIngredients] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    console.log(selectedTags);

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
        setSuggestions([]);
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

            <div className="my-4 flex max-w-7xl flex-wrap gap-4">
                {selectedTags.map((tag, index) => (
                    <button
                        key={index}
                        onClick={() => handleRemoveTag(tag)}
                        className="rounded-full border-2 border-[#6AA78D] bg-white px-4 py-2 text-[#6AA78D] hover:bg-[#6AA78D] hover:text-white"
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default IngredientAutocomplete;
