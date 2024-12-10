import BackCircle from "../components/landing/backCircle";
import FrontCircle from "../components/landing/FrontCircle";
import BackImage from "../components/landing/back-image";
import TaskContainer from "../components/landing/task-container";
import AddCard from "./AddCard";

const Landing = () => {
  return (
    <div className="flex justify-center items-center">
      <BackImage />
      <AddCard />
      <div className="w-[600px] h-[550px] relative mt-[100px]">
        <BackCircle />
        <FrontCircle />
        <TaskContainer direction="left" />
      </div>
    </div>
  );
};

export default Landing;
