import React from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

//component
import Button from "../../UIKit/Button";

//type
import { FormValues } from "./ContactUsInterface";
const ContactUsForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = (newContact) => {
    console.log("newContact", newContact);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">ارتباط با ما</h1>
      <form
        className="flex flex-col w-full gap-6 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            نام
          </label>
          <input
            type="text"
            name="name"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">نام اجباری می باشد.</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ایمیل
          </label>
          <input
            type="email"
            name="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              لطفا ایمیل صحیح وارد نمایید.
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            پیام
          </label>
          <textarea
            name="message"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.message ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs italic">
              لطفا پیام خود را ثبت کنید.
            </p>
          )}
        </div>

        <Button
          label="ثبت پیام"
          size="large"
          onClick={handleSubmit((d) => onSubmit(d as FormValues))}
          // loading={isLoading}
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
