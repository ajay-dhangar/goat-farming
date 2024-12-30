import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";
import { FiUser, FiSettings, FiLogOut, FiMenu, FiX, FiShare2 } from "react-icons/fi";

export default function Profile() {
  const { user, signOut } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch user profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("profiles") // Replace "profiles" with your table name
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) console.error("Error fetching profile data:", error.message);
        else setProfileData(data);
      }
    };

    fetchProfileData();
  }, [user]);

  // Update profile handler
  const updateProfile = async (updatedData: { name?: string; email?: string }) => {
    if (user) {
      const { error } = await supabase
        .from("profiles") // Replace "profiles" with your table name
        .update(updatedData)
        .eq("id", user.id);

      if (error) alert("Failed to update profile: " + error.message);
      else alert("Profile updated successfully!");
    }
  };

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative z-1 bg-white shadow-md flex flex-col lg:w-64 ${
          sidebarOpen ? "w-64" : "w-0"
        } lg:w-64 transition-all duration-300`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          {/* <h2 className="text-xl font-bold text-gray-800">Menu</h2> */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li>
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-200 ${
                  activeTab === "overview" ? "bg-gray-300" : ""
                }`}
              >
                <FiUser /> <span className="lg:inline">
                  {sidebarOpen ? "Overview" : ""}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-200 ${
                  activeTab === "settings" ? "bg-gray-300" : ""
                }`}
              >
                <FiSettings /> <span className="lg:inline">
                  {sidebarOpen ? "Settings" : ""}
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={signOut}
                className="w-full flex items-center gap-4 py-2 px-4 rounded hover:bg-gray-200 text-red-500"
              >
                <FiLogOut /> <span className="lg:inline">
                  {sidebarOpen ? "Sign Out" : ""}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto lg:ml-64 transition-all duration-300 ml-8">
        {/* <button
          className="lg:hidden mb-4 p-2 bg-blue-500 text-white rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close Menu" : "Open Menu"}
        </button> */}

        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Welcome, <span className="text-green-400"
              >{profileData?.name || user?.email}</span>, to your profile!
            </h1>
            <p className="text-gray-600">
              <strong>Name:</strong> {profileData?.name || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> {profileData?.email || user?.email}
            </p>
            {/* <button
              onClick={() =>
                navigator.share
                  ? navigator.share({
                      title: "Profile Info",
                      text: `Name: ${profileData?.name}, Email: ${profileData?.email}`,
                    })
                  : alert("Sharing not supported on this browser.")
              }
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              <FiShare2 className="inline mr-2" /> Share Profile
            </button> */}
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = (e.target as any).name.value;
                const email = (e.target as any).email.value;
                updateProfile({ name, email });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={profileData?.name || ""}
                  className="w-full border rounded py-2 px-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={profileData?.email || ""}
                  className="w-full border rounded py-2 px-3"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
