import Image from "next/image";

export default function HomePage() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  console.log(apiKey); // Check if it logs correctly

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative w-fill h-[330px] overflow-hidden opacity-10">
        <Image src="/welcome.jpg" alt="logo" layout="fill" objectFit="cover" />
      </div>
      <div className="flex-wrap absolute top-0 right-10 flex justify-between gap-x-10 pt-5 px-1">
        <div className="font-bold text-xl">Watch List</div>
        <div className="font-bold text-xl">Setting</div>
        <div className="font-bold text-xl">Logout</div>
        <Image
          className="rounded-lg"
          src="/logo.png"
          alt="logo"
          width={110}
          height={100}
        />
      </div>
      <div className="absolute top-35 w-100 left-10 text-5xl font-bold ">
        <div>Welcome to</div>
        <div className="absolute left-40 w-100 pt-5">Letter boxd</div>
      </div>
      <div className="absolute top-52.5 right-10 w-full max-w-[485] mx-auto">
        <input
          type="text"
          placeholder="Hinted search text"
          className="w-full h-10 py-3 pl-4 pr-10 bg-gray-100 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          🔍 {/* Replace with an actual icon */}
        </div>
      </div>

      <div className="container mx-auto mt-20 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Movies</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#191919] rounded-lg p-10 shadow-lg"
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-2 text-white text-center">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 mx-10 flex flex-col">
        <div className="text-3xl pb-3">Trending</div>
        <div className=" max-w-full h-70 rounded-2xl bg-[#191919] ">
          <div className="m-8 max-w-full h-70 rounded-2xl"></div>
        </div>
      </div>

      <div className="mt-20  flex flex-col">
        <div className=" mx-10 text-3xl pb-3">Latest Trailers</div>
        <div
          className=" max-w-full h-90 bg-[#191919] "
          style={{ boxShadow: "inset 0 4px 10px rgba(0, 0, 0, 0.4)" }}
        >
          <div className="m-10 max-w-full h-70 rounded-2xl  "></div>
        </div>
      </div>

      <div className="mt-20 mx-10 flex flex-col">
        <div className="text-3xl pb-3">English</div>
        <div className=" max-w-full h-70 rounded-2xl bg-[#191919] ">
          <div className="m-8 max-w-full h-70 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

const movies = [
  {
    id: 1,
    title: "Spiderman",
    year: 2002,
    director: "Sam Raimi",
    description: "A story of Peter Parker becoming Spiderman.",
    poster: "/movies/spiderman.jpg",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    description: "A skilled thief enters dreams to steal secrets.",
    poster: "/movies/inception.jpg",
  },
  {
    id: 3,
    title: "Joker",
    year: 2019,
    director: "Todd Phillips",
    description: "Arthur Fleck transforms into the Joker.",
    poster: "/movies/joker.jpg",
  },
];
