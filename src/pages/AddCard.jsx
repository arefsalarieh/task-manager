import { useFormik } from "formik";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import * as Yup from "yup";
import rolesData from "../core/constants/role.json";
import { toast } from "react-toastify";
import { useCreateTask } from "../core/services/api/CreatTask";

const AddCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const addCard2 = useCreateTask();

  const formik = useFormik({
    initialValues: {
      role: "",
      section: "",
      isMain: true,
      title: "",
      describe: "",
      createDate: new Date(),
    },
    validationSchema: Yup.object({
      role: Yup.string().required("فیلد نقش الزامی است."),
      section: Yup.string().required("فیلد بخش الزامی است."),
      title: Yup.string().required("فیلد عنوان الزامی است."),
      describe: Yup.string().required("فیلد توضیحات الزامی است."),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      addCard2.mutate(values, {
        onSettled: () => {
          onOpenChange(false);
          formik.resetForm();
        },
      });
    },
  });

  return (
    <>
      <Button
        color="danger"
        className="absolute top-[10%] right-[10%]"
        onPress={onOpen}
      >
        اضافه کردن
      </Button>
      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        // css={{ direction: "rtl" }}
        style={{ direction: "rtl" }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                اضافه کردن کارت جدید
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="text-sm font-medium">
                    نقش
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border rounded p-2 text-sm"
                  >
                    <option value="" disabled>
                      نقش را انتخاب کنید
                    </option>
                    {rolesData.map((role) => (
                      <option key={role.priority} value={role.name}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.role && formik.errors.role && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.role}
                    </div>
                  )}
                </div>

                <Input
                  name="section"
                  label="بخش"
                  placeholder="بخش را وارد کنید"
                  value={formik.values.section}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="bordered"
                />
                {formik.touched.section && formik.errors.section && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.section}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label htmlFor="isMain" className="text-sm font-medium">
                    نوع
                  </label>
                  <select
                    id="isMain"
                    name="isMain"
                    value={formik.values.isMain}
                    onChange={formik.handleChange}
                    className="border rounded p-2 text-sm"
                  >
                    <option value="true">اصلی</option>
                    <option value="false">فرعی</option>
                  </select>
                </div>

                <Input
                  name="title"
                  label="عنوان"
                  placeholder="عنوان را وارد کنید"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="bordered"
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.title}
                  </div>
                )}

                <Input
                  name="describe"
                  label="توضیحات"
                  placeholder="توضیحات را وارد کنید"
                  value={formik.values.describe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="bordered"
                />
                {formik.touched.describe && formik.errors.describe && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.describe}
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  بستن
                </Button>
                <Button color="primary" type="submit">
                  ثبت
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddCard;
