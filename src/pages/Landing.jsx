import BackCircle from "../components/landing/backCircle";
import FrontCircle from "../components/landing/FrontCircle";
import BackImage from "../components/landing/back-image";
import TaskContainer from "../components/landing/task-container";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import pictures from "../core/constants/pictures.json";

const Landing = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const BackGroundChanger = (src) => {
    const backIMG = document.getElementById("backIMG");
    backIMG.src = src;
  };

  return (
    <div className="flex justify-center items-center">
      <BackImage />
      <div className="w-[600px] h-[550px] relative mt-[100px]">
        <BackCircle />
        <FrontCircle />
        <TaskContainer direction="left" />
      </div>
      <Button onClick={onOpen} className="absolute top-2 left-2 bg-white">
        گالری عکس ها
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                گالری عکس ها
              </ModalHeader>
              <ModalBody>
                <div className="w-fit ml-5 h-fit m-auto flex flex-wrap items-center justify-start gap-8">
                  {pictures.map((item) => (
                    <img
                      className="w-[200px] h-[140px] rounded-md cursor-pointer hover:scale-[1.1] transition-all"
                      key={item.id}
                      src={item.address}
                      onClick={() => {
                        BackGroundChanger(item.address);
                      }}
                    />
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  تایید
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Landing;
