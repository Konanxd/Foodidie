import { useState } from 'react';

const Tag = ({ tags, maxDisplayedTags = 3, maxTagLength = 6, excludeTags }) => {
    const [showAll, setShowAll] = useState(false);

    const shortTags = tags
        .filter((tag) => tag.length <= maxTagLength)
        .filter((tag) => !excludeTags.includes(tag));

    const displayedTags = showAll
        ? shortTags
        : shortTags.slice(0, maxDisplayedTags);
    const hiddenTagsCount = tags.length - maxDisplayedTags;

    return (
        <div>
            <div className="flex flex-row items-center">
                {displayedTags.map((tag, i) => (
                    <span
                        key={i}
                        className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600"
                    >
                        {tag}
                    </span>
                ))}

                {!showAll && hiddenTagsCount > 0 && (
                    <span className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
                        +{hiddenTagsCount}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Tag;
