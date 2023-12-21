import { Link } from "react-router-dom";

export default function Nameplate() {
  return (
    <Link
      className="bg-slate-900 p-4 rounded-lg text-end cursor-pointer"
      to="/"
    >
      <h1 className="text-4xl text-amber-200 font-bold">
        Joshua <wbr />
        Kellogg
      </h1>
      <h3 className="text-xl text-amber-100 font-semibold">
        Full-Stack <wbr />
        Developer
      </h3>
    </Link>
  );
}
