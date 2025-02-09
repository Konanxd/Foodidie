import GuestLayout from '@/Layouts/GuestLayout';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import Footer from '../Components/Footer';

function Breadcrumb({ items }) {
    return (
        <nav className="mb-6 text-sm text-gray-500">
            {items.map((item, index) => (
                <span key={index}>
                    {index > 0 && <span className="mx-2">/</span>}
                    {item.link ? (
                        <a href={item.link} className="hover:text-gray-700">
                            {item.label}
                        </a>
                    ) : (
                        <span>{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}

function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between border-b border-gray-200 py-2 text-left font-semibold"
            >
                <span>{title}</span>
                <span>{isOpen ? '▾' : '▸'}</span>
            </button>
            {isOpen && <div className="px-4 py-2">{children}</div>}
        </div>
    );
}

export default function DetailRecipes() {
    const { recipe, comments } = usePage().props;

    const breadcrumbs = [
        { label: 'Recipes', link: '/recipes' },
        { label: recipe.title },
    ];

    return (
        <GuestLayout>
            <section className="px-28 pt-6">
                <Breadcrumb items={breadcrumbs} />

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Left Section */}
                    <div className="space-y-6 md:col-span-1">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full rounded-xl"
                        />
                        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                            Cooking{' '}
                            <span className="text-[#679B85]">Instructions</span>{' '}
                            &#127859;
                        </h3>
                        <div className="rounded-lg border border-gray-200 bg-white p-6">
                            <ol className="list-inside list-decimal space-y-2 text-gray-700">
                                {recipe.instructions.map((instruction) => (
                                    <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                        <span className="font-bold">
                                            Step {instruction.number}
                                        </span>
                                        <br />
                                        {instruction.step}
                                    </li>
                                ))}

                                {/* <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">
                                        Coat the chicken:
                                    </span>
                                    <br />
                                    Add flour and cornstarch to the chicken and
                                    mix well.
                                </li>
                                <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">
                                        Fry the chicken:
                                    </span>
                                    <br />
                                    Heat oil in a frying pan and fry the chicken
                                    until golden brown.
                                </li>
                                <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">Serve:</span>
                                    <br />
                                    Serve the fried chicken with optional
                                    toppings.
                                </li> */}
                            </ol>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="ml-32 space-y-6 md:col-span-2">
                        <div className="flex items-center space-x-2">
                            <h2 className="mr-52 text-4xl font-bold text-gray-800">
                                {recipe.title}
                            </h2>
                            <div className="group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-red-500 hover:text-red-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        className="group-hover:fill-current group-hover:opacity-80"
                                        fill="none"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                                    />
                                </svg>
                            </div>
                            <div className="group">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-[#679B85] group-hover:text-[#679B85]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        className="group-hover:fill-current group-hover:opacity-80"
                                        fill="none"
                                        d="M6 4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v16l-6-4-6 4V4z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Ready In: {recipe.readyInMinutes}</span>
                        </div>

                        <div className="gap-x-12">
                            <p>
                                <span className="font-semibold">Credits:</span>
                                {recipe.credits}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Type of meals:
                                </span>
                                {recipe.types ?? 'unknown'}
                            </p>
                        </div>

                        {/* Ingredients Section */}
                        <div>
                            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                                Ingredients:
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-gray-700">
                                <ul className="space-y-1">
                                    {recipe.ingredients.map((ingredient) => (
                                        <li>{`${ingredient.name} ${ingredient.amount}${ingredient.unit}`}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Vitamin Section */}
                        <div className="flex space-x-4">
                            {recipe.nutritions
                                .filter((vitamin) =>
                                    vitamin.includes('Vitamin'),
                                )
                                .map((vitamin) => (
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#679B85] text-white">
                                        {vitamin.charAt(8)}
                                    </div>
                                ))}
                        </div>

                        {/* Dropdown Nutritions */}
                        <CollapsibleSection title="Nutrition facts">
                            <div className="space-y-2 text-base text-gray-600">
                                {recipe.nutritions
                                    .filter(
                                        (nutrition) =>
                                            !nutrition.includes('Vitamin'),
                                    )
                                    .map((nutrition, index) => (
                                        <>
                                            <div
                                                key={index}
                                                className="flex justify-between"
                                            >
                                                <span>{nutrition.name}</span>
                                                <span>{`${nutrition.amount} ${nutrition.unit}`}</span>
                                            </div>
                                            <hr />
                                        </>
                                    ))}
                            </div>
                        </CollapsibleSection>

                        {/* Minerals Section */}
                        <CollapsibleSection title="Minerals">
                            <p className="text-gray-600">
                                Details about minerals will go here.
                            </p>
                        </CollapsibleSection>

                        {/* Vitamins Section */}
                        <CollapsibleSection title="Vitamins">
                            <p className="text-gray-600">
                                Details about vitamins will go here.
                            </p>
                        </CollapsibleSection>
                    </div>
                </div>

                {/* Comments */}
                <div className="my-6 py-8">
                    <h2 className="mb-6 text-2xl font-bold">Comments</h2>
                    <div className="relative mb-6">
                        <textarea
                            className="h-40 w-full rounded-lg border border-gray-300 bg-transparent p-4 pr-16 focus:outline-none focus:ring focus:ring-[#679B85]"
                            rows="3"
                            placeholder="Write your comment here.."
                        ></textarea>
                        <button className="absolute bottom-4 right-4 rounded-lg bg-[#679B85] px-4 py-2 font-semibold text-white hover:bg-green-700">
                            Submit
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {comments.length === 0 ? (
                            <h1>No comments yet.</h1>
                        ) : (
                            comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="relative rounded-lg border bg-white p-8 shadow-sm"
                                >
                                    <img
                                        src={'../assets/quote-icon.png'}
                                        alt="World"
                                        className="absolute right-4 top-4 h-8 w-8"
                                        width={18}
                                        height={18}
                                    />
                                    <h3 className="text-lg font-semibold">
                                        {comment.user.name}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {comment.content}
                                    </p>
                                    <p className="mt-4 text-sm text-gray-500">
                                        {comment.created_at}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="font-semibold text-[#679B85] hover:underline">
                            Load more..
                        </button>
                    </div>
                </div>

                {/* Related Recipes */}
                <div className="my-12">
                    <h3 className="mb-6 text-2xl font-bold text-gray-800">
                        Related Recipes
                    </h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                title: 'Rendang',
                                img: 'https://asset.kompas.com/crops/QsUYn6p5xK4DsivCrxa0_TXdjuk=/10x36:890x623/1200x800/data/photo/2023/03/25/641e5ef63dea4.jpg',
                                link: '#',
                            },
                        ].map((recipe, index) => (
                            <a
                                href={recipe.link}
                                key={index}
                                className="block overflow-hidden rounded-lg bg-white transition hover:shadow-xl"
                            >
                                <img
                                    src={recipe.img}
                                    alt={recipe.title}
                                    className="h-32 w-full object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-gray-800">
                                        {recipe.title}
                                    </h4>
                                    <p className="mt-2 text-[#679B85]">
                                        See recipe ›
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </GuestLayout>
    );
}
