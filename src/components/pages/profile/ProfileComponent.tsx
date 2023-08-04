'use client';
import React, { useRef, useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import axios from 'axios';

//api
import { useCreateArticleMutation } from '@/redux/services/article/articleApi';
import { useLogoutMutation } from '@/redux/services/auth/authApi';
import { useSendFileMutation } from '@/redux/services/file/fileApi';

//component
import Button from '@/components/UIKit/Button';
import Radio from '@/components/UIKit/Radio/Radio';
import Input from '@/components/UIKit/Input';
import Text from '@/components/UIKit/Text';
import FileUploader from '@/components/common/fileUploader/FileUploader';
import { useRouter } from 'next/navigation';
//type
import { FormValues } from './ProfileComponentInterface';
import Cookies from 'js-cookie';

const ProfileComponent = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		watch,
		reset,
	} = useForm();
	const router = useRouter();
	const [createNewPost, { isLoading }] = useCreateArticleMutation();
	const [logOut, { isLoading: logoutIsLoading }] = useLogoutMutation();
	const [sendFile, { isLoading: sendFileIsLoading }] = useSendFileMutation();
	const [thumbnailPath, setThumbnailPath] = useState('');
	console.log('************************', watch('thumbnail'));
	const onSubmit: SubmitHandler<FormValues> = (newPost) => {
		// dispatch(setContactForm(newContact))
		createNewPost(newPost)
			.unwrap()
			.then(() => {
				// toast.success(
				//   <ToastUI
				//     title="پست با موفقیت ثبت شد."
				//     //subtitle={'متن خط دوم'}
				//     subtitle={null}
				//     type={"success"}
				//   />
				// );
				router.push('/articles');
			})
			.catch(() => {});
	};

	const refEditorShortDescription = useRef<any>();

	const getSunEditorInstanceShortDescription = (sunEditor: any) => {
		refEditorShortDescription.current = sunEditor;
	};
	const onImageUploadBeforeShortDescription = (files: File[], info: any, uploadHandler: any) => {
		const formData = new FormData();
		formData.append('file', files[0]);
		axios
			.post('https://investing-nta8.onrender.com/file/image', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${Cookies.get('investing-accessToken')}`,
				},
			})
			.then(function (response) {
				uploadHandler({
					result: [
						{
							url: `https://investing-nta8.onrender.com/file/${response.data.filepath}`,
							name: `${response.data.filename}`,
							size: 1890,
						},
					],
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};
	//===============================================================
	return (
		<div className="container" dir="rtl">
			<h1 className="text-2xl font-bold">ارسال پست</h1>
			<form className="flex w-full flex-col gap-6 p-4 " onSubmit={handleSubmit(onSubmit)}>
				<Button
					label="ارسال پست"
					size="large"
					onClick={handleSubmit((d) => onSubmit(d as FormValues))}
					// loading={isLoading}
				/>
				<div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
					<Controller
						name="title"
						control={control}
						defaultValue=""
						rules={{
							required: 'عنوان اجباری است',
						}}
						render={({ field: { onChange, value } }) => (
							<Input type="text" label="عنوان" hasError={!!errors.title} value={value} onChange={onChange} />
						)}
					/>
					{!!errors.title && (
						<Text variant="caption2" className="flex w-full items-start text-Error-60">
							{`${errors?.title?.message}`}
						</Text>
					)}
				</div>
				{/*===============================================================================*/}
				<div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
					<Controller
						name="status"
						control={control}
						defaultValue=""
						rules={{
							required: 'status اجباری است',
						}}
						render={({ field: { onChange, value } }) => (
							<Radio
								name="status"
								hasError={!!errors.status}
								onChange={onChange}
								value={value}
								radioOptions={[
									{ label: 'Draft', value: 'Draft' },
									{ label: 'Published', value: 'Published' },
								]}
							/>
						)}
					/>
					{!!errors.status && (
						<Text variant="caption2" className="flex w-full items-start text-Error-60">
							{`${errors?.status?.message}`}
						</Text>
					)}
				</div>
				<div className="col-span-2 flex h-11 flex-col desktop:col-span-1">
					<div className="flex w-full gap-4">
						<div className="w-4/5">
							<Controller
								name="thumbnail"
								control={control}
								defaultValue=""
								rules={{
									required: 'thumbnail اجباری است',
								}}
								render={({ field: { value, onChange } }) => (
									<FileUploader
										onFileUpload={sendFile}
										sendFileIsLoading={sendFileIsLoading}
										onChange={onChange}
										value={value}
									/>
								)}
							/>
						</div>
					</div>
					{!!errors.thumbnail && (
						<Text variant="caption2" className="flex w-full items-start text-Error-60">
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
							required: 'content اجباری است',
						}}
						render={({ field: { onChange, value } }) => (
							<Input type="text" label="content" hasError={!!errors.content} value={value} onChange={onChange} />
						)}
					/>
					{!!errors.content && (
						<Text variant="caption2" className="flex w-full items-start text-Error-60">
							{`${errors?.content?.message}`}
						</Text>
					)}
				</div>
				<div className="col-span-2 flex min-h-[200px] flex-col desktop:col-span-1">
					<Controller
						name="htmlContent"
						control={control}
						defaultValue=""
						rules={{
							required: 'htmlContent اجباری است',
						}}
						render={({ field: { onChange, value } }) => (
							<SunEditor
								setDefaultStyle="font-family:Vazirmatn; height:auto"
								autoFocus={true}
								onChange={onChange}
								onImageUploadBefore={onImageUploadBeforeShortDescription}
								// onImageUpload={handleImageUpload}
								getSunEditorInstance={getSunEditorInstanceShortDescription}
								setOptions={{
									minHeight: '300px',
									// resizingBar: false,
									// resizeEnable: true,
									rtl: true,
									buttonList: [
										[
											'font',
											'fontSize',
											'formatBlock',
											'bold',
											'fontColor',
											'list',
											'dir',
											'align',
											'image',
											'table',
											'link',
											'outdent',
											'indent',
											'preview',
										],
										[
											'-right',
											':i-More Misc-default.more_vertical',
											'undo',
											'redo',
											'blockquote',
											'underline',
											'italic',
											'strike',
											'removeFormat',
											'hiliteColor',
											'subscript',
											'superscript',
											'textStyle',
											'horizontalRule',
											'lineHeight',
											'video',
											// 'imageGallery',
											'showBlocks',
											// 'codeView',
											// 'save',
										],
									],
									imageGalleryUrl: 'https://www.shutterstock.com/search/cdn',
									imageGalleryHeader: { key: 'images' },
									font: ['Vazirmatn', 'Arial', 'Comic Sans MS', 'Courier New', 'Impact'],
								}}
								// defaultValue={}
								// readOnly={true}
								// hideToolbar={true}
								// disableToolbar={true}
								// disable={true}
								// onSave={handleSavePost}
							/>
						)}
					/>
					{!!errors.htmlContent && (
						<Text variant="caption2" className="flex w-full items-start text-Error-60">
							{`${errors?.htmlContent?.message}`}
						</Text>
					)}
				</div>
			</form>
		</div>
	);
};

export default ProfileComponent;
