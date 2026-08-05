import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative md:min-h-screen h-[500px] w-full flex items-center justify-start overflow-hidden">
      <Image
        src="https://thenthbit.com/wp-content/uploads/2026/05/software-company-gurgaon.jpg.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />

      <div className="relative container  pt-20 z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight uppercase mb-6">
            We Sense Your Thoughts <br />
            <span className="text-sky-400">Before You Think</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
            Through Analysis, Design, Development, Implementation, and
            Evaluation, we turn unspoken ideas into intelligent software that
            meets your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
