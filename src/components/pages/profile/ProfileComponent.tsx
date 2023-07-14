"use client";
import React, { useRef, useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

//api
import { useCreatePostMutation } from "@/redux/services/post/postApi";

//component
import Button from "@/components/UIKit/Button";
import Radio from "@/components/UIKit/Radio/Radio";
import Input from "@/components/UIKit/Input";
import Text from "@/components/UIKit/Text";

//type
import { FormValues } from "./ProfileComponentInterface";

const ProfileComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const [createNewPost, { isLoading }] = useCreatePostMutation();

  const onSubmit: SubmitHandler<FormValues> = (newPost) => {
    // dispatch(setContactForm(newContact))
    createNewPost(newPost)
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
  const [shortDescription, setShortDescription] = useState<null | string>(null);

  const refEditorShortDescription = useRef<any>();

  const getSunEditorInstanceShortDescription = (sunEditor: any) => {
    refEditorShortDescription.current = sunEditor;
  };
  const onImageUploadBeforeShortDescription = (
    files: File[],
    info: any,
    uploadHandler: any
  ) => {
    // fileService
    //   .uploadImage(files[0], FolderName.categoryImage)
    //   .then((result: any) => {
    //     uploadHandler({
    //       result: [
    //         {
    //           url: `https://storage.dgland.dev/api/File/${FolderName.categoryImage}/${result.data}`,
    //           name: "iphone13.jpg",
    //           size: 1890,
    //         },
    //       ],
    //     });
    //     return undefined;
    //   })
    //   .catch((err) => console.log(err));
  };
  const shortDescriptionHandler = (evt: any) => {
    const shortDescription = evt.editor.getData();
    setShortDescription(shortDescription);
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
            name="title"
            control={control}
            defaultValue=""
            rules={{
              required: "عنوان اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                label="عنوان"
                hasError={!!errors.title}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {!!errors.title && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.title?.message}`}
            </Text>
          )}
        </div>
        {/*===============================================================================*/}
        {/*<div className="col-span-2 flex h-11 flex-col desktop:col-span-1">*/}
        {/*  <Controller*/}
        {/*    name="status"*/}
        {/*    control={control}*/}
        {/*    defaultValue=""*/}
        {/*    rules={{*/}
        {/*      required: "status اجباری است",*/}
        {/*    }}*/}
        {/*    render={({ field: { onChange, value } }) => (*/}
        {/*      <Input*/}
        {/*        type="text"*/}
        {/*        label="status"*/}
        {/*        hasError={!!errors.status}*/}
        {/*        value={value}*/}
        {/*        onChange={onChange}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*  />*/}
        {/*  {!!errors.status && (*/}
        {/*    <Text*/}
        {/*      variant="caption2"*/}
        {/*      className="flex w-full items-start text-Error-60"*/}
        {/*    >*/}
        {/*      {`${errors?.status?.message}`}*/}
        {/*    </Text>*/}
        {/*  )}*/}
        {/*</div>*/}

        <div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
          <Controller
            name="status"
            control={control}
            defaultValue=""
            rules={{
              required: "status اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Radio
                name="status"
                hasError={!!errors.status}
                onChange={onChange}
                value={value}
                radioOptions={[
                  { label: "Draft", value: "Draft" },
                  { label: "Published", value: "Published" },
                ]}
              />
            )}
          />
          {!!errors.status && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.status?.message}`}
            </Text>
          )}
        </div>
        {/*===============================================================================*/}
        <div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
          <Controller
            name="htmlContent"
            control={control}
            defaultValue=""
            rules={{
              required: "htmlContent اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                label="htmlContent"
                hasError={!!errors.htmlContent}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {!!errors.htmlContent && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.htmlContent?.message}`}
            </Text>
          )}
        </div>
        <div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
          <Controller
            name="thumbnail"
            control={control}
            defaultValue=""
            rules={{
              required: "thumbnail اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                label="thumbnail"
                hasError={!!errors.thumbnail}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {!!errors.thumbnail && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.thumbnail?.message}`}
            </Text>
          )}
        </div>
        <div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
          <Controller
            name="content"
            control={control}
            defaultValue=""
            rules={{
              required: "content اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                label="content"
                hasError={!!errors.content}
                value={value}
                onChange={onChange}
              />
            )}
          />
          {!!errors.content && (
            <Text
              variant="caption2"
              className="flex w-full items-start text-Error-60"
            >
              {`${errors?.content?.message}`}
            </Text>
          )}
        </div>
        {/*<div className="w-full">*/}
        {/*  <SunEditor*/}
        {/*    setDefaultStyle="font-family:Vazirmatn; height:auto"*/}
        {/*    autoFocus={true}*/}
        {/*    onChange={shortDescriptionHandler}*/}
        {/*    onImageUploadBefore={onImageUploadBeforeShortDescription}*/}
        {/*    // onImageUpload={handleImageUpload}*/}
        {/*    getSunEditorInstance={getSunEditorInstanceShortDescription}*/}
        {/*    setOptions={{*/}
        {/*      minHeight: "300px",*/}
        {/*      // resizingBar: false,*/}
        {/*      // resizeEnable: true,*/}
        {/*      rtl: true,*/}
        {/*      buttonList: [*/}
        {/*        [*/}
        {/*          "font",*/}
        {/*          "fontSize",*/}
        {/*          "formatBlock",*/}
        {/*          "bold",*/}
        {/*          "fontColor",*/}
        {/*          "list",*/}
        {/*          "dir",*/}
        {/*          "align",*/}
        {/*          "image",*/}
        {/*          "table",*/}
        {/*          "link",*/}
        {/*          "outdent",*/}
        {/*          "indent",*/}
        {/*          "preview",*/}
        {/*        ],*/}
        {/*        [*/}
        {/*          "-right",*/}
        {/*          ":i-More Misc-default.more_vertical",*/}
        {/*          "undo",*/}
        {/*          "redo",*/}
        {/*          "blockquote",*/}
        {/*          "underline",*/}
        {/*          "italic",*/}
        {/*          "strike",*/}
        {/*          "removeFormat",*/}
        {/*          "hiliteColor",*/}
        {/*          "subscript",*/}
        {/*          "superscript",*/}
        {/*          "textStyle",*/}
        {/*          "horizontalRule",*/}
        {/*          "lineHeight",*/}
        {/*          "video",*/}
        {/*          // 'imageGallery',*/}
        {/*          "showBlocks",*/}
        {/*          // 'codeView',*/}
        {/*          // 'save',*/}
        {/*        ],*/}
        {/*      ],*/}
        {/*      imageGalleryUrl: "https://www.shutterstock.com/search/cdn",*/}
        {/*      imageGalleryHeader: { key: "images" },*/}
        {/*      font: [*/}
        {/*        "Vazirmatn",*/}
        {/*        "Arial",*/}
        {/*        "Comic Sans MS",*/}
        {/*        "Courier New",*/}
        {/*        "Impact",*/}
        {/*      ],*/}
        {/*    }}*/}
        {/*    // defaultValue={}*/}
        {/*    // readOnly={true}*/}
        {/*    // hideToolbar={true}*/}
        {/*    // disableToolbar={true}*/}
        {/*    // disable={true}*/}

        {/*    // onSave={handleSavePost}*/}
        {/*  />*/}
        {/*</div>*/}

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

export default ProfileComponent;
