import { MainHeading } from "./components/MainHeading";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="h-[2000px] dark:bg-black">
      <Navbar />
      <MainHeading />
    </div>
  );
}
