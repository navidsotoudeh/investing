"use client";
import React, { useRef, useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

//component
import Button from "../../UIKit/Button";

//type
import { FormValues } from "./ProfileComponentInterface";
const ProfileComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FormValues> = (newContact) => {
    console.log("newContact", newContact);
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
    <div className="container" dir='ltr'>
      <h1 className="text-2xl font-bold">ارسال پست</h1>

      <form
        className="flex flex-col w-full gap-6 p-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex flex-col items-end">
          <label className="text-gray-700 text-sm font-bold mb-2">
            عنوان
          </label>
          <input
            type="text"
            name="name"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">Name is required</p>
          )}
        </div>

        <div className="w-full">
          <SunEditor
            setDefaultStyle="font-family:Vazirmatn; height:auto"
            autoFocus={true}
            onChange={shortDescriptionHandler}
            onImageUploadBefore={onImageUploadBeforeShortDescription}
            // onImageUpload={handleImageUpload}
            getSunEditorInstance={getSunEditorInstanceShortDescription}
            setOptions={{
              minHeight: "300px",
              // resizingBar: false,
              // resizeEnable: true,
              rtl: true,
              buttonList: [
                [
                  "font",
                  "fontSize",
                  "formatBlock",
                  "bold",
                  "fontColor",
                  "list",
                  "dir",
                  "align",
                  "image",
                  "table",
                  "link",
                  "outdent",
                  "indent",
                  "preview",
                ],
                [
                  "-right",
                  ":i-More Misc-default.more_vertical",
                  "undo",
                  "redo",
                  "blockquote",
                  "underline",
                  "italic",
                  "strike",
                  "removeFormat",
                  "hiliteColor",
                  "subscript",
                  "superscript",
                  "textStyle",
                  "horizontalRule",
                  "lineHeight",
                  "video",
                  // 'imageGallery',
                  "showBlocks",
                  // 'codeView',
                  // 'save',
                ],
              ],
              imageGalleryUrl: "https://www.shutterstock.com/search/cdn",
              imageGalleryHeader: { key: "images" },
              font: [
                "Vazirmatn",
                "Arial",
                "Comic Sans MS",
                "Courier New",
                "Impact",
              ],
            }}
            // defaultValue={}
            // readOnly={true}
            // hideToolbar={true}
            // disableToolbar={true}
            // disable={true}

            // onSave={handleSavePost}
          />
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

export default ProfileComponent;
