import { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '../Components/Footer';

function Breadcrumb({ items }) {
    return (
        <nav className="text-sm text-gray-500 mb-6">
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
                className="w-full text-left font-semibold flex justify-between items-center border-b border-gray-200 py-2"
            >
                <span>{title}</span>
                <span>{isOpen ? '▾' : '▸'}</span>
            </button>
            {isOpen && <div className="py-2 px-4">{children}</div>}
        </div>
    );
}

export default function DetailRecipes() {
    const breadcrumbs = [
        { label: 'Recipes', link: '/recipes' },
        { label: 'Telur Dadar' },
    ];

    return (
        <GuestLayout>
            <section className="px-28 pt-6">
                <Breadcrumb items={breadcrumbs} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Left Section */}
                    <div className="md:col-span-1 space-y-6">
                        <img
                            src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/995/2023/09/07/Screenshot_2023-09-07-17-27-38-86_f9ee0578fe1cc94de7482bd41accb329-79599861.jpg"
                            alt="Delicious Telur Dadar dish"
                            className="rounded-xl w-full"
                        />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Cooking <span className='text-[#679B85]'>Instructions</span> &#127859;
                        </h3>
                        <div className="p-6 bg-white border border-gray-200 rounded-lg">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">Prepare the chicken:</span>
                                    <br />
                                    Season the chicken pieces with salt and ground pepper. Let it marinate for 15-20 minutes.
                                </li>
                                <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">Coat the chicken:</span>
                                    <br />
                                    Add flour and cornstarch to the chicken and mix well.
                                </li>
                                <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">Fry the chicken:</span>
                                    <br />
                                    Heat oil in a frying pan and fry the chicken until golden brown.
                                </li>
                                <li className="[&::marker]:font-bold [&::marker]:text-[#679B85]">
                                    <span className="font-bold">Serve:</span>
                                    <br />
                                    Serve the fried chicken with optional toppings.
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-4xl font-bold text-gray-800">Telur Dadar</h2>

                        <div className="flex space-x-4 items-center text-gray-500 text-sm">
                            <span className="p-2 text-[#679B85] border border-[#679B85] rounded-md flex items-center">
                                <img
                                    src={'../assets/world-icon.png'}
                                    alt="World"
                                    className="mr-2 object-contain"
                                    width={18}
                                    height={18}
                                />
                                Asian food
                            </span>
                            <span>Cook time: 10 Minutes</span>
                        </div>

                        <div className="gap-x-12">
                            <p>
                                <span className="font-semibold">Credits:</span> Full belly sisters
                            </p>
                            <p>
                                <span className="font-semibold">Type of meals:</span> Lunch, Main course, Dinner
                            </p>
                        </div>

                        {/* Ingredients Section */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients:</h3>
                            <div className="grid grid-cols-2 gap-4 text-gray-700">
                                <ul className="space-y-1">
                                    <li>500g chicken (cut into pieces)</li>
                                    <li>100g all-purpose flour</li>
                                    <li>50g cornstarch</li>
                                    <li>1 egg</li>
                                    <li>1/2 tsp salt</li>
                                    <li>1/2 tsp ground pepper</li>
                                </ul>
                                <ul className="space-y-1">
                                    <li>1/2 tsp sugar</li>
                                    <li>2 tbsp hot frying oil</li>
                                    <li>Cooking oil for frying</li>
                                    <li>10-15 red chili peppers</li>
                                    <li>3 garlic cloves</li>
                                    <li>
                                        <span className="font-semibold">Optional toppings:</span> Steamed rice, cucumber, fried tofu
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Vitamin Section */}
                        <div className="flex space-x-4">
                            <div className="bg-[#679B85] text-white w-10 h-10 flex items-center justify-center rounded-lg">
                                C
                            </div>

                            <div className="bg-[#788ED3] text-white w-10 h-10 flex items-center justify-center rounded-lg">
                                B6
                            </div>

                            <div className="bg-[#C67F66] text-white w-10 h-10 flex items-center justify-center rounded-lg">
                                B1
                            </div>

                            <div className="bg-[#6995B7] text-white w-10 h-10 flex items-center justify-center rounded-lg">
                                A
                            </div>
                        </div>


                        {/* Dropdown Nutritions */}
                        <CollapsibleSection title="Nutrition facts">
                            <div className="space-y-2 text-base text-gray-600">
                                <div className="flex justify-between">
                                    <span>Calories</span>
                                    <span>550</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Fat</span>
                                    <span>25g</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Protein</span>
                                    <span>20g</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Carbs</span>
                                    <span>50g</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Natrium</span>
                                    <span>800mg</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Fiber</span>
                                    <span>2g</span>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <span>Cholesterol</span>
                                    <span>70g</span>
                                </div>
                                <hr />
                            </div>
                        </CollapsibleSection>

                        {/* Minerals Section */}
                        <CollapsibleSection title="Minerals">
                            <p className="text-gray-600">Details about minerals will go here.</p>
                        </CollapsibleSection>

                        {/* Vitamins Section */}
                        <CollapsibleSection title="Vitamins">
                            <p className="text-gray-600">Details about vitamins will go here.</p>
                        </CollapsibleSection>
                    </div>
                </div>

                {/* Related Recipes */}
                <div className="my-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Related Recipes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Rendang', img: 'https://asset.kompas.com/crops/QsUYn6p5xK4DsivCrxa0_TXdjuk=/10x36:890x623/1200x800/data/photo/2023/03/25/641e5ef63dea4.jpg', link: '#' },
                        ].map((recipe, index) => (
                            <a
                                href={recipe.link}
                                key={index}
                                className="block bg-white rounded-lg overflow-hidden hover:shadow-xl transition"
                            >
                                <img
                                    src={recipe.img}
                                    alt={recipe.title}
                                    className="w-full h-32 object-cover"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-semibold text-gray-800">{recipe.title}</h4>
                                    <p className="text-green-600 mt-2">See recipe ›</p>
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
