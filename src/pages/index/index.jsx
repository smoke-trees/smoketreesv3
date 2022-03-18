import { Navbar } from "../../components";
import { FirstSection } from "./first-section";
import './index.scss';
import { SecondSection } from "./second-section";
import { ThirdSection } from "./third-section";


export function Index() {

  return (
    <>
      <Navbar />
      <div className="body">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    </>
  );
}