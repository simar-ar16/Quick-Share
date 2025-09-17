import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">QuickShare</h1>
      <div className="space-x-8 text-lg font-medium">
        <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link to="/share" className="hover:text-yellow-300 transition">Share</Link>
        <Link to="/retrieve" className="hover:text-yellow-300 transition">Retrieve</Link>
        <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
      </div>
    </nav>
  );
}
