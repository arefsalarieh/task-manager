/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import * as Yup from "yup";
import rolesData from "../core/constants/role.json";
import { useCreateTask } from "../core/services/api/CreatTask";
import { useQueryClient } from "@tanstack/react-query";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect, useState } from "react";
import spellCheckText from "../core/utils/spellCheckService"; // ایمپورت سرویس اسپل‌چک


const AddCard = ({ isOpen, onOpenChange }) => {
  /* const { isOpen, onOpen, onOpenChange } = useDisclosure(); */
  const addCard2 = useCreateTask();
  const QueryClient = useQueryClient();
  const [spellCheckResult, setSpellCheckResult] = useState(null); // ذخیره نتیجه اسپل‌چک


  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "fa-IR" });
  };

  const handleSpellCheck = async () => {
    const result = await spellCheckText(formik.values.describe); // فراخوانی اسپل‌چک
    setSpellCheckResult(result);
  };


  const formik = useFormik({
    initialValues: {
      role: "",
      section: "",
      isMain: "",
      title: "",
      describe: "",
      mainDescribe: "",
      createDate: new Date(),
    },
    validationSchema: Yup.object({
      role: Yup.string().required("فیلد نقش الزامی است."),
      section: Yup.string().required("فیلد بخش الزامی است."),
      title: Yup.string().required("فیلد عنوان الزامی است."),
      describe: Yup.string().required("فیلد توضیحات الزامی است."),
      // mainDescribe: Yup.string()
        // .required("فیلد توضیحات الزامی است.")
        // .min(30, "توضیحات باید حداقل 30 کاراکتر باشد."),
      isMain: Yup.string().required("فیلد نوع الزامی است."),
    }),
    onSubmit: (values) => {
      console.log("Submitted values:", values);
      addCard2.mutate(values, {
        onSettled: () => {
          onOpenChange(false);
          formik.resetForm();
          QueryClient.invalidateQueries({ queryKey: ["tasks"] });
        },
      });
    },
  });

  useEffect(() => {
    formik.setFieldValue("mainDescribe", transcript);
  }, [transcript]);

  useEffect(() => {
    if (!isOpen) {
      setSpellCheckResult(null);
    }
  }, [isOpen]);

  return (
    <>
      {/* <Button
        color="danger"
        className="absolute top-[10%] right-[10%]"
        onPress={onOpen}
      >
        اضافه کردن
      </Button> */}
      <Modal
        isOpen={isOpen}
        className="dark"
        placement="top-center"
        onOpenChange={onOpenChange}
        // css={{ direction: "rtl" }}
        style={{ direction: "rtl" }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1 text-white">
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

                <Input
                  name="section"
                  className="text-white"
                  // label="بخش"
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

                <Input
                  name="title"
                  // label="عنوان"
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

                {/* توضیحات */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="describe" className="text-sm font-medium">
                    توضیحات
                  </label>
                  <Input
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
                  <Button
                    onPress={handleSpellCheck}
                    color="primary"
                    className="mt-2">
                    بررسی متن
                  </Button>
                </div>

                {/* نمایش نتیجه بررسی */}
                {spellCheckResult && (
                  <div className="my-4 text-sm flex justify-between items-center">
                    {spellCheckResult.success ? (
                      <>
                        <div className="text-green-500">
                          خروجی اصلاح شده: {spellCheckResult.output}
                        </div>
                        <Button
                          onPress={() =>
                            formik.setFieldValue(
                              "describe",
                              spellCheckResult.output
                            )
                          }
                          color="success"
                          className="mt-2">
                          جایگزینی متن
                        </Button>
                      </>
                    ) : (
                      <>
                        <div className="text-red-500">
                          خطا در بررسی متن: {spellCheckResult.error}
                        </div>
                        <Button
                          onPress={() => spellCheckText(formik.values.describe)}
                          color="warning"
                          className="mt-2 text-white">
                          تلاش مجدد
                        </Button>
                      </>
                    )}
                  </div>
                )}

                 <Textarea
                  name="mainDescribe"
                  value={formik.values.mainDescribe}
                  onChange={formik.handleChange}
                  placeholder='توضیحات تکمیلی'
                />
                <div className="text-white flex">

                  <Button color="success" variant="bordered"
                    type="button" // اضافه کردن این نوع
                    onClick={(e) => {
                      e.preventDefault(); // جلوگیری از رفتار پیش‌فرض
                      startListening();
                    }}
                  >
                    Start
                  </Button>
                  <Button color="warning" variant="bordered" className="mx-4"
                    type="button" // اضافه کردن این نوع
                    onClick={(e) => {
                      e.preventDefault(); // جلوگیری از رفتار پیش‌فرض
                      SpeechRecognition.stopListening();
                    }}
                  >
                    Stop
                  </Button>
                  <Button color="default" variant="bordered"
                    onClick={(e) => {
                      e.preventDefault(); // جلوگیری از رفتار پیش‌فرض
                      resetTranscript();
                    }}
                  >
                    Reset
                  </Button>

                  <p>میکروفون: {listening ? "روشن" : "خاموش"}</p>

                  
                </div>
                
                {/* {formik.touched.mainDescribe && formik.errors.mainDescribe && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.mainDescribe}
                  </div>
                )} */}
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
