import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Nameplate from "./components/Nameplate";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="p-8 gap-4 flex flex-row justify-center items-start">
      <div className="flex flex-col gap-4 max-w-xs">
        <Nameplate />
        <Nav />
      </div>
      <Outlet />
      <div className="flex flex-col gap-4 max-w-xs">
        <Profile />
      </div>
    </div>
  );
}
