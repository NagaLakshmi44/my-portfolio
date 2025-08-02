const projects = [
  {
    title: "Video Management App",
    tech: "React, MongoDB, Node.js",
    link: "#",
  },
  {
    title: "Portfolio Website",
    tech: "React, TailwindCSS",
    link: "#",
  },
  {
    title: "Phaser Game",
    tech: "Phaser 3, JavaScript",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen p-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
     <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.tech}</p>
      <a href={project.link} className="text-blue-400 hover:text-blue-600 transition">
        🔗 View Project →
      </a>
    </div>
  ))}
</div>

    </section>
  );
};

export default Projects;
