import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b p-4 sticky">
      <div className="flex items-center justify-between">
        <div className="font-bold">Pai's WEB</div>
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex md:flex-row items-center gap-4">
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-2 mt-3 md:hidden">
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;