export default function Nav() {
  const navItems = ["Home", "Essays", "Projects"];

  return (
    <nav className="bg-slate-900 p-2 rounded-lg text-end text-xl">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="p-2 rounded-md hover:bg-slate-800 hover:text-amber-200 transition-all duration-200 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </nav>
  );
}
