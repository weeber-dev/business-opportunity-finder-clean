const businesses = [
  {
    name: "Sharma Gym",
    website: false,
    instagram: false,
    facebook: true,
    score: 91
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Business Opportunity Finder 🚀
      </h1>

      <div className="border border-gray-700 p-6 rounded-xl max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          {businesses[0].name}
        </h2>

        <p>Website: {businesses[0].website ? "Yes" : "No"}</p>

        <p>Instagram: {businesses[0].instagram ? "Yes" : "No"}</p>

        <p>Facebook: {businesses[0].facebook ? "Yes" : "No"}</p>

        <p className="mt-4 text-green-400">
          Opportunity Score: {businesses[0].score}
        </p>
      </div>
    </main>
  );
}