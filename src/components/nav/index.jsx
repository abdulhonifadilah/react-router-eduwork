import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-blue-600">
      <nav className="container py-3">
        <ul className="list-none flex justify-center gap-3 text-blue-200">
          <li className="hover:text-blue-100">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-100">
            <Link to="/detail">Detail</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
