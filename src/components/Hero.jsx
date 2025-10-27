export default function Hero() {
    return (
      <section id="hero" className="h-[75vh] flex flex-col justify-center items-center text-center  bg-gray-900">
        <h1 className="text-6xl font-bold text-white">Hi, I’m Favoured Mwange</h1>
        <p className="mt-4 text-lg text-gray-400">
          Mobile Developer | Flutter & React Enthusiast
        </p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
            View My Work
          </a>
          <a href="public/Favoured_Mwange_Software_Developer_Resume.pdf" className="px-4 py-2 border border-gray-500 rounded-lg hover:bg-gray-800 transition" download>
            Download CV
          </a>
        </div>
      </section>
    );
  }
  