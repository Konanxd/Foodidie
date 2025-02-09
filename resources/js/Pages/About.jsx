import GuestLayout from '@/Layouts/GuestLayout';
import Footer from '../Components/Footer';

export default function Test() {
    return (
        <GuestLayout>
        <div className="max-w-5xl mx-28 my-10">
          <section className="mb-20 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold text-gray-900">
                About <span className="text-[#6AA78D]">Foodidie</span>
              </h2>
              <p className="text-gray-600 mt-4">
              Welcome to Foodidie, your ultimate destination for discovering delicious recipes that match every mood, occasion, and taste preference. We believe that cooking is more than just a daily routine—it’s an opportunity to create, explore, and share moments of joy with your loved ones.
              </p>
              <p className="text-gray-600 mt-2">
              At Foodidie, we aim to make cooking enjoyable, simple, and accessible for everyone. Whether you’re a seasoned chef or just starting out in the kitchen, our platform offers something special for everyone. From quick, easy-to-make snacks to gourmet recipes from around the world, we provide step-by-step guidance to help you whip up something extraordinary every time.
              </p>
            </div>
            <div className="md:w-2/5 flex justify-end">
                <img
                    src={'../assets/hero3.png'}
                    alt="Foodidie"
                    className="object-cover"
                    width={300}
                    height={300}
                />
            </div>
          </section>
    
          <section className="mb-20 flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl">
            <img
              src={'../assets/spongebob.png'}
              alt="SpongeBob"
              className="w-96 h-32 rounded-lg object-cover"
            />
            <blockquote className="text-2xl text-center md:text-left">
              <p className="text-gray-900 font-bold">"Kalau kau ingin menjadi bintang, kau harus bersinar sendiri!"</p>
              <span className="block text-[#6AA78D] font-semibold text-sm mt-2">- SpongeBob SquarePants</span>
            </blockquote>
          </section>
    
          <section className="mb-20 flex flex-col md:flex-row items-center gap-30">
            <div className="md:w-2/3 mr-12">
              <h2 className="text-3xl font-bold text-gray-900">The Team</h2>
              <p className="text-gray-600 mt-6">
                Behind every innovation and success is a team driven by passion and dedication. We are a group of professionals with diverse backgrounds, expertise, and a shared vision—to create the best solutions and make a positive impact.
              </p>
              <p className="text-gray-600 mt-6">
                From strategy to execution, each team member brings unique skills that complement one another. We believe that collaboration, creativity, and commitment are the keys to achieving our shared goals.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col md:flex-row gap-2">
            <div className="flex flex-col gap-2">
                <img src={'../assets/aggni.png'} alt="Team Member 1" className="w-28 h-29 rounded-xl shadow-md object-cover" />
                <img src={'../assets/saby.png'} alt="Team Member 2" className="w-28 h-29 rounded-xl shadow-md object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <img src={'../assets/ija.png'} alt="Team Member 3" className="w-28 h-28 rounded-xl shadow-md object-cover" />
                <img src={'../assets/dida.png'} alt="Team Member 4" className="w-29 h-28 rounded-xl shadow-md object-cover" />
              </div>
            </div>
          </section>

        </div>
        <section>
            <Footer />
        </section>
        </GuestLayout>
      );
    };
