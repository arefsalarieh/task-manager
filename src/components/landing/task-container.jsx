import { motion } from "framer-motion";
/* eslint-disable react/prop-types */
function TaskContainer({ direction, className }) {
  const ContainerDelay = 1;
  const TitleDelay = 2;
  const DateDelay = 0.5;

  return (
    <motion.div
      className={`w-[250px] h-[65px] relative z-40 bg-white rounded-[8px] flex overflow-hidden items-center ${
        direction === "left" ? "origin-right" : "flex-row-reverse origin-left"
      } ${className}`}
      initial={{ rotate: -90, opacity: 0 }}
      animate={{
        rotate: direction === "left" ? [-90, 0, 5, -2, 0] : [90, 0, 5, -2, 0],
        opacity: [0, 1],
      }}
      transition={{
        rotate: {
          duration: 2,
          ease: "easeInOut",
          delay: ContainerDelay,
        },
        opacity: {
          duration: 2,
          ease: "easeInOut",
          delay: ContainerDelay,
        },
      }}
    >
      <motion.div
        className="w-[30px] h-full bg-[#F42495] text-white flex justify-center items-center"
        initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
          delay: DateDelay,
        }}
      >
        <p className="transform rotate-[-90deg]">یکشنبه</p>
      </motion.div>
      <motion.h2
        className="text-black text-center w-[140px]"
        initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 25,
          delay: TitleDelay,
        }}
      >
        متن توضیحات متن توضیحات تسک
      </motion.h2>
    </motion.div>
  );
}

export default TaskContainer;
