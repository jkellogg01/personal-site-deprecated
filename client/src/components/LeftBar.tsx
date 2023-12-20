import Nav from "./Nav";

export default function LeftBar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-slate-900 p-4 rounded-lg text-end">
        <h1 className="text-4xl text-amber-200 font-bold">
          Joshua <wbr />
          Kellogg
        </h1>
        <h2 className="text-xl text-amber-100 font-semibold">
          Full-Stack <wbr />
          Developer
        </h2>
      </div>
      <Nav />
    </div>
  );
}
