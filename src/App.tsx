import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="p-2 lg:p-8 gap-4 flex flex-col sm:flex-row justify-center items-start">
      <div className="flex flex-col gap-4 max-sm:w-full sm:max-w-xs">
        <Nav />
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="max-w-prose">
          <Outlet />
        </div>
        <div className="flex flex-col gap-4 max-w-prose lg:max-w-xs">
          <Profile />
        </div>
      </div>
    </div>
  );
}
