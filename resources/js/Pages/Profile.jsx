import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '../Components/Footer';
export default function Profile() {
    
    return (
        <GuestLayout>
            <section>
                <div className="mx-28 my-10 min-h-screen">
                {/* Profile Section */}
                <div className="flex items-center bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex-1">
                    <h2 className="text-xl font-bold">Ahmad Kasim</h2>
                    <p className="text-gray-600">Ahmadkasim@gmail.com</p>
                    </div>
                    <button className="bg-[#679B85] text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Edit profile
                    </button>
                </div>

      {/* Bookmarks Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Your bookmark</h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white h-36 rounded-lg shadow-sm overflow-hidden flex"
            >
              <img
                src="https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/09/Resep-Nasi-Goreng-Ikan-Teri.jpg?fit=1920%2C1440&ssl=1"
                alt="Recipe"
                className="p-2 rounded-2xl object-cover"
                width={150}
                height={150}
              />
              <div className="flex flex-col justify-between p-4 w-2/3">
                <h4 className="text-l font-semibold">Nasi goreng katsu pedas</h4>
                <a
                  href="#"
                  className="text-[#679B85] hover:underline text-sm flex items-center"
                >
                  See recipe &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="text-[#679B85] mt-4 p-4 hover:underline block mx-auto">
          Load more..
        </button>
      </div>

      {/* Last Liked Recipes Section */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">The last recipe you liked</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="block bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://asset.kompas.com/crops/_z4ztQmYz0uunr3tPX1o_dlQGmI=/6x17:974x663/1200x800/data/photo/2023/08/18/64dec7f2c27da.jpg"
                  alt="Recipe"
                  className="w-full h-32 object-cover"
                />
              <div className="p-4">
               <h4 className="text-lg font-semibold text-gray-800">Telur dadar</h4>
                <p className="text-[#679B85] hover:underline mt-2">See recipe ›</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
        <button className="text-[#679B85] mt-4 p-4 hover:underline block mx-auto">
          Load more..
        </button>
      </div>
    </div>
    </section>
            <section>
            <Footer />
            </section>
        </GuestLayout>
    );
}