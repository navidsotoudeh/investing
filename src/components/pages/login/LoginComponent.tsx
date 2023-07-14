"use client";
import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
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
//type
import { FormValues } from "./LoginComponentInterface";
const LoginComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const [login, { isLoading: loggingIsLoading }] = useLoginUserMutation();
  //const [signup, { isLoading: signupIsLoading }] = useSignupUserMutation();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    login(data)
      .unwrap()
      .then(() => {
        // toast.success(
        //     <ToastUI
        //         title="پست با موفقیت ثبت شد."
        //         //subtitle={'متن خط دوم'}
        //         subtitle={null}
        //         type={'success'}
        //     />
        // )
        // reset()
      })
      .catch(() => {});
  };

  //===============================================================
  return (
    <div className="container" dir="ltr">
      <h1 className="text-2xl font-bold">ارسال پست</h1>

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
              required: "شماره همراه اجباری است",
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
          label="ثبت فرم"
          size="large"
          onClick={handleSubmit((d) => onSubmit(d as FormValues))}
          // loading={isLoading}
        />
      </form>
    </div>
  );
};

export default LoginComponent;
