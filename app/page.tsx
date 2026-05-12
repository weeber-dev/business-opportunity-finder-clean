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
{/* Business Cards Section */}
<section className="px-8 py-20">

  <h2 className="text-4xl font-bold mb-12 text-center">
    Business Opportunities
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {businesses.map((business, index) => (

      <div
        key={index}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-500 transition"
      >

        <h3 className="text-2xl font-semibold mb-4">
          {business.name}
        </h3>

        <p className="mb-2">
          Website:
          <span className="ml-2 text-green-400">
            {business.website ? "Available" : "Missing"}
          </span>
        </p>

        <p className="mb-2">
          Instagram:
          <span className="ml-2 text-green-400">
            {business.instagram ? "Available" : "Missing"}
          </span>
        </p>

        <p className="mb-2">
          Facebook:
          <span className="ml-2 text-green-400">
            {business.facebook ? "Available" : "Missing"}
          </span>
        </p>

        <div className="mt-6">
          <span className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold">
            Opportunity Score: {business.score}
          </span>
        </div>

      </div>

    ))}

  </div>

</section>
{/* Features Section */}
<section className="px-8 py-24 bg-gray-950">

  <h2 className="text-4xl font-bold text-center mb-16">
    Powerful Features
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Feature 1 */}
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition">

      <div className="text-5xl mb-6">
        ⚡
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Fast Business Search
      </h3>

      <p className="text-gray-400">
        Instantly search local businesses and discover hidden digital opportunities.
      </p>

    </div>

    {/* Feature 2 */}
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition">

      <div className="text-5xl mb-6">
        📱
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Social Media Detection
      </h3>

      <p className="text-gray-400">
        Detect missing Instagram, Facebook, and online presence automatically.
      </p>

    </div>

    {/* Feature 3 */}
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition">

      <div className="text-5xl mb-6">
        📈
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Opportunity Scoring
      </h3>

      <p className="text-gray-400">
        Analyze business potential using smart opportunity scoring logic.
      </p>

    </div>

  </div>

</section>
    </main>
  );
}