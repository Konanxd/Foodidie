const Footer = () => {
    return (
      <footer className="bg-[#E5FFE8] py-10 font-poppins">
        <div className="max-w-6xl mx-28 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
          <h1 className="text-3xl font-bold">
                    <span className="text-[#6AA78D]">Food</span>
                    <span className="text-[#1D1D35]">idie</span>
                </h1>
            <p className="text-sm text-[#6D777D] mt-4">
              Foodidie is your go-to platform for discovering delicious recipes
              from around the world. Whether you’re a beginner or a seasoned chef,
              we make it easy to find recipes tailored to your taste, ingredients,
              and dietary needs.
            </p>
          </div>
  
          <div className="ml-52">
            <h3 className="text-lg font-semibold text-[#6D777D] mb-4">Links</h3>
            <ul className="text-sm text-[#6D777D] space-y-6">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          <div className="mr-10">
            <h3 className="text-lg font-semibold text-[#6D777D] mb-4">
              Social Media
            </h3>
            <ul className="text-sm text-[#6D777D] space-y-6">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-300 mt-8" />
        <h3 className="ml-28 my-4 text-sm text-[#6D777D]">&copy; 2025 Recipe Finder. All Rights Reserved</h3>
      </footer>
    );
  };
  
  export default Footer;
  