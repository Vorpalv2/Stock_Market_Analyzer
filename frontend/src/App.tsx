import FormHandle from "./components/Form";
import { MainHeading } from "./components/MainHeading";
import { Navbar } from "./components/Navbar";
import Test from "./components/Test";

export default function App() {
  return (
    <div className="h-[2000px] dark:bg-black dark:bg-grid-white/[0.2]">
      <Navbar />
      <MainHeading />
      <FormHandle />
      {/* <Test /> */}
    </div>
  );
}
