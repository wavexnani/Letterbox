import Image from "next/image";

export  default function HomePage() {
  return (
    <div>
        <div className="relative w-360 h-84 overflow-hidden opacity-25">
            <Image src="/avengers.jpg" alt="logo"  layout="fill" objectFit="cover" />
        </div>
        <div className="absolute top-0 right-10 w-120 h-13 flex justify-between pt-5 px-1">
          <div className="font-bold text-xl">Home</div>
          <div className="font-bold text-xl">setting</div>
          <div className="font-bold text-xl">logout</div>
          <Image className="rounded-lg" src="/logo.png" alt="logo"  width={110} height={100} />
        </div>
        <div className="absolute top-35 w-100 left-10 text-5xl font-bold ">
          <div>Welcome to</div> 
          <div className="absolute left-40 w-100 pt-5">Letter boxd</div>
        </div>
        <div className="absolute top-52.5 right-10 w-full max-w-[485] mx-auto">
          <input type="text" placeholder="Hinted search text" className="w-full h-10 py-3 pl-4 pr-10 bg-gray-100 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
          <div className="absolute inset-y-0 right-3 flex items-center">
            🔍 {/* Replace with an actual icon */}
          </div>
        </div>
    </div>
  );
}

