const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-500">Nagalakshmi</span>
      </h1>
      <p className="text-lg sm:text-xl mb-6 max-w-xl">
        Front-End Developer skilled in React, JavaScript, and building
        responsive, user-friendly applications.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Home;