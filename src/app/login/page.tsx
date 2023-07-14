"use client";
import { useState, useEffect } from "react";
import LoginComponent from "@/components/pages/login/LoginComponent";
const Profile = () => {
  const [name, setName] = useState("نوید ستوده مهر");
  useEffect(() => {
    // Side-effect...
    return function cleanup() {
      // Side-effect cleanup...
    };
  }, []);

  return (
    <div className="w-full">
      لطفا یوزنیم و پسورد بزنید
      <LoginComponent />
    </div>
  );
};

export default Profile;
