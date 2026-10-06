import Image from "next/image";

interface Technology {
  name: string;
  logo: string;
}

const technologies: Technology[] = [
  {
    name: "Laravel",
    logo: "/hero-slider/laravel-96.png",
  },
  {
    name: "Java",
    logo: "/hero-slider/java.svg",
  },
  {
    name: "Springboot",
    logo: "/hero-slider/spring-boot.svg",
  },
  {
    name: "Node.js",
    logo: "/hero-slider/nodejs.svg",
  },
  {
    name: "Flutter",
    logo: "/hero-slider/flutter.svg",
  },
  {
    name: "Docker",
    logo: "/hero-slider/docker.svg",
  },
  {
    name: "Next JS",
    logo: "/hero-slider/nextjs.svg",
  },
  {
    name: ".NET",
    logo: "/hero-slider/dotnet.svg",
  },
    {
    name: "Golang",
    logo: "/hero-slider/golang.svg",
  },
];

export default function TechSlider() {
  const sliderItems = [...technologies, ...technologies];

  return (
    <section className="w-full bg-white">
      <div className="container-main">
        <div className="relative flex h-[125px] items-center overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

          {/* Slider */}
          <div className="w-full overflow-hidden">
            <div className="tech-slider flex w-max gap-5">
              {sliderItems.map((technology, index) => (
                <div
                  key={`${technology.name}-${index}`}
                  className="flex h-[70px] min-w-[160px] shrink-0 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/40 hover:shadow-md"
                >
                  <Image
                    src={technology.logo}
                    alt={technology.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />

                  <span className="whitespace-nowrap text-sm font-semibold text-[#171717]">
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}