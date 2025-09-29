import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-6">Contact</h2>
      <p className="text-gray-300">Let’s connect! You can reach me at:</p>

      <div className="mt-10 flex flex-col md:flex-row md:justify-center items-center gap-6">
        {/* Email */}
        <a
          href="mailto:mwangefavoured@gmail.com"
          className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition"
        >
          <Mail size={22} />
          <span>mwangefavoured@gmail.com</span>
        </a>

        {/* Mobile */}
        <a
          href="+254704350442"
          className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition"
        >
          <Phone size={22} />
          <span>+254704350442</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Fevado"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition"
        >
          <Github size={22} />
          <span>github.com/Fevado</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/favoured-mwange/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-300 hover:text-green-500 transition"
        >
          <Linkedin size={22} />
          <span>linkedin.com/in/favoured-mwange</span>
        </a>
      </div>
    </section>
  );
}

  