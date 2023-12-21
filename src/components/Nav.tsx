import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  // TODO: implement darkening overlay on the rest of the page when the drawer is open
  const [drawer, setDrawer] = useState(false);

  type navItem = {
    name: string;
    url: string;
  };

  const navItems: navItem[] = [
    {
      name: "Essays",
      url: "/essays",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Resume",
      url: "/resume",
    },
  ];

  return (
    <>
      <div className="bg-slate-900 p-2 rounded-lg flex flex-row justify-between">
        <Link
          to="/"
          className="sm:hover:bg-slate-800 p-2 rounded-md transition-all duration-200 sm:text-end flex flex-row justify-center sm:flex-col gap-4 sm:gap-2 items-center sm:items-end"
        >
          <h1 className="text-sm sm:text-4xl text-amber-200 font-bold">
            Joshua Kellogg
          </h1>
          <h3 className="text-sm sm:text-xl text-amber-100 font-semibold">
            Full-Stack Developer
          </h3>
        </Link>
        <button
          className="sm:hidden aspect-square p-2 rounded-full bg-slate-800 border-slate-800 active:bg-slate-900 border-2"
          onClick={() => setDrawer(true)}
        >
          {/* TODO: find an actual hamburger menu icon to put here */}E
        </button>
      </div>
      <div
        className={`${
          drawer ? "max-sm:fixed" : "max-sm:hidden"
        } max-sm:top-0 max-sm:min-h-screen max-sm:right-0 max-sm:w-1/3`}
      >
        <nav className="bg-slate-900 p-2 sm:rounded-lg sm:text-end sm:text-xl flex flex-col max-sm:min-h-screen">
          <button
            onClick={() => setDrawer(false)}
            className="sm:hidden p-2 text-start"
          >
            Close
          </button>
          {navItems.map((item, index) => (
            <Link
              key={index}
              className="p-2 rounded-md hover:bg-slate-800 hover:text-amber-200 transition-all duration-200 cursor-pointer"
              to={item.url}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
