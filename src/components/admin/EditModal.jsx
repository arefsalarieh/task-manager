/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import * as Yup from "yup";
import rolesData from "../../core/constants/role.json";
import { useEffect, useState } from "react";
import { useUpdateTasks } from "../../core/services/api/UpdateTask";
import { useQueryClient } from "@tanstack/react-query";

function EditModal({ isOpen, onOpenChange, task }) {
  const updateTask = useUpdateTasks();
  const QueryClient = useQueryClient();
  const [initialValues, setInitialValues] = useState({
    id: "",
    role: "",
    section: "",
    isMain: "",
    title: "",
    describe: "",
    mainDescribe: "",
    createDate: new Date(),
  });
  useEffect(() => {
    if (task) {
      setInitialValues({
        id: task?.id,
        role: task?.role ?? "",
        section: task?.section ?? "",
        isMain: task.isMain ?? true,
        title: task?.title ?? "",
        describe: task?.describe ?? "",
        mainDescribe: task?.mainDescribe ?? "",
        createDate: task.createDate ?? new Date(),
      });
    }
  }, [task]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      role: Yup.string().required("فیلد نقش الزامی است."),
      section: Yup.string().required("فیلد بخش الزامی است."),
      title: Yup.string().required("فیلد عنوان الزامی است."),
      describe: Yup.string().required("فیلد توضیحات الزامی است."),
      mainDescribe: Yup.string()
        .required("فیلد توضیحات الزامی است.")
        .min(30, "توضیحات باید حداقل 30 کاراکتر باشد."),
      isMain: Yup.string().required("فیلد نوع الزامی است."),
    }),

    onSubmit: (values) => {
      updateTask.mutate(values, {
        // onSuccess: () => {
        //   toast.success("تسک با موفقیت به‌روزرسانی شد.");
        //   onOpenChange(false);
        //   formik.resetForm();
        // },
        onSettled: () => {
          onOpenChange(false);
          formik.resetForm();
          QueryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
      });
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader className="flex flex-col gap-1 text-white">
              ویرایش کارت
            </ModalHeader>
            <ModalBody className="text-white">
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
                  className="border rounded p-2 text-sm text-white bg-gray-800 border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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

              <div className="flex flex-col gap-2">
                <label htmlFor="section" className="text-sm font-medium">
                  بخش
                </label>
                <Input
                  id="section"
                  name="section"
                  className="text-white"
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
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="isMain" className="text-sm font-medium">
                  نوع
                </label>
                <select
                  id="isMain"
                  name="isMain"
                  value={formik.values.isMain}
                  onChange={formik.handleChange}
                  className="border rounded p-2 text-sm text-white bg-gray-800 border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="" disabled>
                    اهمیت را انتخاب کنید
                  </option>
                  <option value="true">اصلی</option>
                  <option value="false">فرعی</option>
                </select>
                {formik.touched.isMain && formik.errors.isMain && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.isMain}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-medium">
                  عنوان
                </label>
                <Input
                  id="title"
                  name="title"
                  placeholder="عنوان را وارد کنید"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="bordered"
                  className="text-white"
                />
                {formik.touched.title && formik.errors.title && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.title}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="describe" className="text-sm font-medium">
                  توضیحات
                </label>
                <Input
                  id="describe"
                  name="describe"
                  placeholder="توضیحات را وارد کنید"
                  value={formik.values.describe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  variant="bordered"
                  className="text-white"
                />
                {formik.touched.describe && formik.errors.describe && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.describe}
                  </div>
                )}
              </div>

              <textarea
                name="mainDescribe"
                placeholder="توضیحات اصلی را وارد کنید"
                value={formik.values.mainDescribe}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="text-white rounded-lg p-2"
              />
              {formik.touched.mainDescribe && formik.errors.mainDescribe && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.mainDescribe}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                لغو
              </Button>
              <Button color="primary" type="submit">
                ویرایش
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}

export default EditModal;
