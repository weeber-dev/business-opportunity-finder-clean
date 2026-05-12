const businesses = [
  {
    name: "Sharma Gym",
    website: false,
    instagram: false,
    facebook: true,
    score: 91,
  },

  {
    name: "Royal Cafe",
    website: true,
    instagram: false,
    facebook: false,
    score: 78,
  },

  {
    name: "Modern Salon",
    website: false,
    instagram: true,
    facebook: false,
    score: 85,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">
          BizFinder
        </h1>

        {/* Menu */}
        <div className="flex gap-6 text-gray-300">

          <a href="#" className="hover:text-white">
            Home
          </a>

          <a href="#" className="hover:text-white">
            Features
          </a>

          <a href="#" className="hover:text-white">
            About
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>

        </div>

      </nav>
    
      {/* Hero Section */}
<section className="flex flex-col items-center justify-center text-center py-32 px-6">

  <h1 className="text-6xl font-bold max-w-4xl leading-tight">
    Find Local Businesses
    <span className="text-green-400"> Missing Online Opportunities</span>
  </h1>

  <p className="text-gray-400 mt-6 max-w-2xl text-lg">
    Discover businesses without websites, weak social media presence,
    and untapped digital potential.
  </p>

  {/* Search Bar */}
  <div className="flex items-center bg-gray-900 border border-gray-700 rounded-xl mt-10 overflow-hidden w-full max-w-2xl">

    <input
      type="text"
      placeholder="Search gyms, salons, cafes..."
      className="bg-transparent px-6 py-4 w-full outline-none text-white"
    />

    <button className="bg-green-500 hover:bg-green-600 px-8 py-4 font-semibold text-black">
      Search
    </button>

  </div>

</section>

    </main>
  );
}