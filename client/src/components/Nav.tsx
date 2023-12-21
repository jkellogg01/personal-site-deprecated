import { Link } from "react-router-dom";

export default function Nav() {
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
    <nav className="bg-slate-900 p-2 rounded-lg text-end text-xl flex flex-col">
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
  );
}
