export default function Nav() {
  type navItem = {
    name: string;
  };

  const navItems: navItem[] = [
    {
      name: "Essays",
    },
    {
      name: "Projects",
    },
    {
      name: "Resume",
    },
  ];

  return (
    <nav className="bg-slate-900 p-2 rounded-lg text-end text-xl">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="p-2 rounded-md hover:bg-slate-800 hover:text-amber-200 transition-all duration-200 cursor-pointer"
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
}
