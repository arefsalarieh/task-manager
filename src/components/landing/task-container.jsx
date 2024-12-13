/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTasks } from "../admin/hooks/useTasks";
import { Spinner, useDisclosure } from "@nextui-org/react";
import TaskDetail from "../admin/TaskDetail";

/* eslint-disable react/prop-types */
function TaskContainer({ direction, className }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [CurrDetail, SetCurrDetail] = useState([]);
  const [LeftList, setLeftList] = useState([]);

  const OpenDetailHandler = (item) => {
    onOpen();
    SetCurrDetail(item);
  };

  const { tasks, isLoading } = useTasks();
  tasks && console.log(tasks);

  useEffect(() => {
    for (let i = 0; i < tasks?.length; i++) {
      if (i % 2 === 0) {
        setLeftList([...LeftList, tasks[i]]);
      }
    }
    // tasks?.forEach((item,index)=>{
    //   if(index%2 === 0){
    //     leftArr.push(item)
    //   }else{
    //     rightArr.push(item)
    //   }

    //   setLeftList(leftArr)
    //   setRightList(rightArr)

    // })
  }, []);

  return (
    <div className="relative  top-12 left-20 w-[441px] h-[452px]  border-2 border-transparent  ">
      {isLoading && (
        <Spinner
          size="lg"
          style={{ scale: "4" }}
          className="absolute left-[200px] top-[210px] z-40"
        />
      )}
      {tasks?.map((item, index) => {
        if (index % 2 === 0 && index < 10) {
          return (
            <motion.div
              style={{
                transformOrigin: "125px 273px",
                rotate: `${(index / 2 + 1) * -30}deg`,
                translate: "-113px",
              }}
              className="absolute left-[100px] -top-[56px] z-40 cursor-pointer"
              initial={{ width: 0 }}
              whileInView={{ width: "250px" }}
              transition={{ delay: Math.random() }}
              onClick={() => {
                OpenDetailHandler(item);
              }}
            >
              <div
                style={{ rotate: `${(index / 2 + 1) * 30}deg` }}
                className={` h-[65px] bg-white rounded-[8px] flex overflow-hidden items-center flex-row-reverse hover:scale-105 transition-all ${
                  direction === "left" ? "" : "flex-row-reverse"
                } ${className}`}
              >
                <div className="w-[30px] h-full bg-[#F42495] text-white flex justify-center items-center">
                  <p className="transform rotate-[-90deg]">{item.role}</p>
                </div>
                <h2 className="text-black text-center w-[140px]">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          );
        } else if (index % 2 === 1 && index < 10) {
          return (
            <motion.div
              style={{
                transformOrigin: "125px 273px",
                rotate: `${Math.floor(index / 2 + 1) * 30}deg`,
                translate: "100px",
              }}
              onClick={() => {
                OpenDetailHandler(item);
              }}
              className="absolute left-[100px] -top-[56px] z-40 cursor-pointer"
              initial={{ width: 0 }}
              whileInView={{ width: "250px" }}
              transition={{ delay: Math.random() }}
            >
              <div
                style={{ rotate: `${-Math.floor(index / 2 + 1) * 30}deg` }}
                className={` h-[65px] bg-white rounded-[8px] flex overflow-hidden items-center hover:scale-105 transition-all ${
                  direction === "left" ? "" : "flex-row-reverse"
                } ${className}`}
              >
                <div className="w-[30px] h-full bg-[#F42495] text-white flex justify-center items-center">
                  <p className="transform rotate-[-90deg]">{item.role}</p>
                </div>
                <h2 className="text-black text-center w-[140px]">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          );
        }
      })}

      <TaskDetail
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        detail={CurrDetail}
      />
    </div>
  );
}

export default TaskContainer;
