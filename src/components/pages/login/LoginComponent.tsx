"use client";
import React from "react";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import "suneditor/dist/css/suneditor.min.css";

//api
import {
  useLoginUserMutation,
  useSignupUserMutation,
} from "@/redux/services/auth/authApi";

//component
import Button from "../../UIKit/Button";
import Input from "../../UIKit/Input";
import Text from "../../UIKit/Text";
import ToastUI from "../../UIKit/Toast";
//type
import { IFormValues } from "./LoginComponentInterface";
const LoginComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const [login, { isLoading: loggingIsLoading }] = useLoginUserMutation();
  // const [signup, { isLoading: signupIsLoading }] = useSignupUserMutation();

  const onSubmit = (data: any) => {
    login(data)
      .unwrap()
      .then(() => {
        toast.success(
          <ToastUI
            title="ورود با موفقیت صورت گرفت."
            subtitle={null}
            type={"success"}
          />
        );
        reset();
      })
      .catch(() => {});
  };

  //===============================================================
  return (
    <div className="container" dir="ltr">
      <form
        className="flex flex-col w-full gap-6 p-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: "نام کاربری اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                label="نام کاربری"
                hasError={!!errors.username}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {!!errors.username && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.username?.message}`}
            </Text>
          )}
        </div>
        <div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "پسورد اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                label="پسورد"
                hasError={!!errors.password}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {!!errors.password && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.password?.message}`}
            </Text>
          )}
        </div>

        <Button
          label="ورود"
          size="large"
          onClick={handleSubmit((d) => onSubmit(d))} // loading={isLoading}
        />
      </form>
    </div>
  );
};

export default LoginComponent;
