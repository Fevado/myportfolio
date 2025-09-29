const skills = ["Flutter", "Dart", "Firebase", "React.js", "Node.js", "MySQL", "Git", "JavaScript"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-green-500 text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
