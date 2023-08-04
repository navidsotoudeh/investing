'use client';
import { useState, useEffect } from 'react';
import ContactUsForm from '@/components/pages/contact-us/ContactUsForm';
const ContactUs = () => {
	const [name, setName] = useState('نوید ستوده مهر');
	useEffect(() => {
		// Side-effect...
		return function cleanup() {
			// Side-effect cleanup...
		};
	}, []);

	return (
		<div className="my-4 w-full bg-yellow-100" dir="rtl">
			<ContactUsForm />
		</div>
	);
};

export default ContactUs;
