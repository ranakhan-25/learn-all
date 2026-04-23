import Image from "next/image";
import HeroImg from "../../public/sunset.jpg";

const Hero = () => {
  return (
    <section className="relative bg-linier-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Build Your Next Idea Faster 🚀
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Launch modern web apps with Next.js, reusable components, and a
            clean developer experience.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <Image
            src={HeroImg}
            alt="Hero Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
