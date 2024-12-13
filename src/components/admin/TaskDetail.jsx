import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const TaskDetail = ({ isOpen, onOpenChange, detail }) => {
  // console.log(detail?.role)
  return (
    <>
      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        style={{ direction: "rtl" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                جزئیات وظایف
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="font-bold ">عنوان: </span>
                    <span>{detail?.title}</span>
                  </div>
                  <div>
                    <span className="font-bold ">توضیحات کوتاه: </span>
                    <span>{detail?.describe}</span>
                  </div>
                  <div>
                    <span className="font-bold ">نقش: </span>
                    <span>{detail?.role}</span>
                  </div>
                  <div>
                    <span className="font-bold ">نهاد: </span>
                    <span>{detail?.section}</span>
                  </div>
                  <div>
                    <span className="font-bold ">اصلی/فرعی بودن: </span>
                    <span>{detail?.isMain ? "اصلی" : "فرعی"}</span>
                  </div>
                  <div>
                    <span className="font-bold "> توضیحات اصلی:  </span>
                    <span>{detail?.mainDescribe}</span>
                  </div>
                </div>
              </ModalBody>
              {/* <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              بستن
            </Button>
            <Button color="primary" type="submit">
              ثبت
            </Button>
          </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskDetail;
