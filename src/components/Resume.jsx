const Resume = () => {
    return (
      <section id="resume" className="h-1/2 flex flex-col items-center justify-center  text-white px-6 pb-32">
        <h2 className="text-4xl text-green-500 font-bold mb-6">Resume</h2>
        <p className="text-lg mb-6 max-w-2xl text-center">
          Here’s a copy of my resume. Feel free to view or download it.
        </p>
        <div className="space-x-4">
          <a
            href="public/Favoured_Mwange_Mobile_Dev_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-300 transition"
          >
            View Resume
          </a>
          <a
            href="public/Favoured_Mwange_Mobile_Dev_Resume.pdf"
            download
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-700 transition"
          >
            Download CV
          </a>
        </div>
      </section>
    );
  };
  
  export default Resume;
  