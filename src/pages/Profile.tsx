// import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome message */}

      <h1 className="text-3xl font-bold">
        Welcome <span className="text-green-500">{user?.email}</span> to your
        profile
      </h1>

      {/* <h1 className="text-3xl font-bold">Profile</h1>
        <div className="mt-4">
            <p className="text-lg">Name: {user?.name}</p>
            <p className="text-lg">Email: {user?.email}</p>
        </div> */}
    </div>
  );
}
