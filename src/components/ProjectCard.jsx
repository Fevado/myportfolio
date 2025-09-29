export default function ProjectCard({ project }) {
    return (
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-green-600/30 transition">
        <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-sm px-2 py-1 bg-gray-800 rounded">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 space-x-3">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" className="text-green-500 hover:underline">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="text-green-500 hover:underline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    );
  }
  