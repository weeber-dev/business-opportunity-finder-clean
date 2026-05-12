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

    </main>
  );
}