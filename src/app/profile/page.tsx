"use client";
import { useState, useEffect } from "react";
import ProfileComponent from "@/components/pages/profile/ProfileComponent";
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
      پروفایل
      <ProfileComponent />
    </div>
  );
};

export default Profile;
