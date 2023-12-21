import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="bg-slate-900 p-4 rounded-lg max-w-prose flex flex-col gap-4">
        <h2 className="text-5xl text-amber-300 font-bold">404: Not Found</h2>
        <p className="text-2xl">
          Ain't nothing here.
          <br />
          Y'all best be moving on, compadre.
        </p>
        <Link
          to="/"
          className="bg-amber-300 hover:bg-amber-400 text-slate-900 bg:text-slate-800 text-2xl p-2 rounded-md max-w-fit"
        >
          Go home?
        </Link>
      </div>
    </div>
  );
}
