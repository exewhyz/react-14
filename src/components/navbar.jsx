import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="h-14 flex justify-between items-center px-4 shadow-md">
      <h2 className="font-bold text-4xl">
        <NavLink to="/">Weather App</NavLink>
      </h2>
      <ul className="flex gap-4">
        <li className="hover:text-gray-600">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-gray-600">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
