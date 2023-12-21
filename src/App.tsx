import { Outlet } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

export default function App() {
  return (
    <div className="p-8 gap-4 flex flex-row justify-center items-start">
      <LeftBar />
      <Outlet />
      <RightBar />
    </div>
  );
}
