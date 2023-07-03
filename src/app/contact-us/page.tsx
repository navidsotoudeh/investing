"use client";
import { useState, useEffect } from "react";
import ContactUsForm from "@/app/components/pages/contact-us/ContactUsForm";
const ContactUs = () => {
  const [name, setName] = useState("نوید ستوده مهر");
  useEffect(() => {
    // Side-effect...
    return function cleanup() {
      // Side-effect cleanup...
    };
  }, []);

  return (
    <div className="w-full">
      <p>{name} - مشاور کسب و کار شما </p>
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
