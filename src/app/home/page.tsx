import Image from "next/image";

export  default function HomePage() {
  return (
    <div>
        <div className="relative w-360 h-84 overflow-hidden">
            <Image src="/avengers.jpg" alt="logo"  layout="fill" objectFit="cover" />
        </div>
    </div>
  );
}

