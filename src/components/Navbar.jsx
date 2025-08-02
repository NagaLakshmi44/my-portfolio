import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
   <nav className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white px-6 py-4 shadow-md flex justify-between items-center fixed w-full z-50">
  <h1 className="text-2xl font-bold tracking-widest">
    <Link to="/">Nagalakshmi</Link>
  </h1>
  <ul className="hidden md:flex gap-8 text-sm font-medium">
    <li><Link to="/" className="hover:text-pink-400">Home</Link></li>
    <li><Link to="/projects" className="hover:text-pink-400">Projects</Link></li>
    <li><Link to="/about" className="hover:text-pink-400">About</Link></li>
  </ul>
</nav>
  );
};

export default Navbar;
