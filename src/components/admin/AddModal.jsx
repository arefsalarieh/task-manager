/* eslint-disable react/prop-types */

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

function AddModal({ isOpen, onOpenChange }) {
  return (
    <Modal
      className="dark font-[IRANSans]"
      dir="rtl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              اضافه کردن
            </ModalHeader>
            <ModalBody className="text-white">
              <Input autoFocus label="نام ویدیو" variant="bordered" />
              <Input autoFocus label="نام ویدیو" variant="bordered" />
              <Input autoFocus label="نام ویدیو" variant="bordered" />
              <Input autoFocus label="نام ویدیو" variant="bordered" />
              <Input autoFocus label="نام ویدیو" variant="bordered" />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                لغو
              </Button>
              <Button color="primary" onPress={onClose}>
                تایید
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default AddModal;
