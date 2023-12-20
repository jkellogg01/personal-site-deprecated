import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

export default function App() {
  return (
    <div className="p-8 gap-4 flex flex-row justify-center items-start">
      <LeftBar />
      <div className="bg-slate-900 p-4 rounded-xl max-w-prose">
        This is column 2
      </div>
      <RightBar />
    </div>
  );
}
