import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';

//component
import Button from '../../UIKit/Button';

//type
import { FormValues } from './ContactUsInterface';
const ContactUsForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit: SubmitHandler<FormValues> = (newContact) => {
		console.log('newContact', newContact);
	};

	return (
		<div className="container mx-auto">
			<h1 className="mb-4 text-2xl font-bold">ارتباط با ما</h1>
			<form className="flex w-full flex-col gap-6 p-4" onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">نام</label>
					<input
						type="text"
						name="name"
						className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
							errors.name ? 'border-red-500' : ''
						}`}
					/>
					{errors.name && <p className="text-xs italic text-red-500">نام اجباری می باشد.</p>}
				</div>

				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">ایمیل</label>
					<input
						type="email"
						name="email"
						className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
							errors.email ? 'border-red-500' : ''
						}`}
					/>
					{errors.email && <p className="text-xs italic text-red-500">لطفا ایمیل صحیح وارد نمایید.</p>}
				</div>

				<div className="mb-4">
					<label className="mb-2 block text-sm font-bold text-gray-700">پیام</label>
					<textarea
						name="message"
						className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
							errors.message ? 'border-red-500' : ''
						}`}
					></textarea>
					{errors.message && <p className="text-xs italic text-red-500">لطفا پیام خود را ثبت کنید.</p>}
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
