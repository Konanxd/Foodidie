import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import TextInput from "@/Components/TextInput";

export default function Recipes() {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/recipes', label: 'Recipes' },
        { path: '/about', label: 'About' },
    ];
    return (
        <div className="bg-[#F7FEF8] font-poppins">
            <div>
                <NavBar navItems={navItems} />
            </div>

            <section className="relative">
                <div className="bg-[#E5FFE8] h-48">
                    <h1 className="text-2xl mx-28 poppins-bold text-gray-800 pt-20">Explore Recipes</h1>
                </div>
                <div className="absolute top-32 w-full">
                    <div className="bg-white mx-28 rounded-xl shadow-lg p-5 max-w-7xl">
                    <TextInput
                        type="text"
                        placeholder="Search Here"
                        className="w-full h-12 px-4 py-2 border bg-gray-100 border-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6AA78D]"
                    />
                    </div>
                </div>
                </section>

            <section>
            <div className="mb-6 mt-12">
                <h2 className="text-xl mx-28 poppins-bold text-gray-800 mb-4">Categories</h2>
                <div className="bg-white mx-28 rounded-xl shadow-lg p-5 max-w-7xl flex gap-6 flex-wrap">
                    {["All", "Appetizer", "Main Courses", "Side Dishes", "Sweets and Desserts", "Snacks", "Beverages"].map(
                    (category, index) => (
                        <button
                        key={index}
                        className="px-4 py-2 border-2 border-[#6AA78D] text-[#6AA78D] rounded-full hover:bg-[#6AA78D] hover:text-white"
                        >
                        {category}
                        </button>
                    )
                    )}
                </div>
            </div>
            </section>
            <section>
            <div className="mx-28 my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src="https://www.masakapahariini.com/wp-content/uploads/2023/03/shutterstock_1949306203-500x300.jpg"
                alt="Recipe"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="flex items-center mr-4">
                        <img
                            src={'../assets/time-icon.png'}
                            alt="Time"
                            className="mr-1 object-contain"
                            width={24}
                            height={24}
                            />
                    10 Minutes
                  </span>
                  <span className="flex items-center">
                  <img
                            src={'../assets/calories-icon.png'}
                            alt="Clories"
                            className="mr-1 object-contain"
                            width={24}
                            height={24}
                            />
                    450 Kcal
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Ayam Geprek</h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="text-[#6AA78D] hover:underline text-sm mt-2 inline-block"
                >
                  See Recipes...
                </a>
              </div>
            </div>
          ))}
      </div>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
        );
    }