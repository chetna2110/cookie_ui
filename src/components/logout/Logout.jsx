import React from "react";
import { useAuth, useUser } from "@clerk/clerk-react"; // Use useAuth instead
import { useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
const Logout = ({isClicked, setIsClicked}) => {
  const { signOut } = useAuth();
  const { user } = useUser(); // For deleting account
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(); // Logs the user out
    navigate("/signin"); // Redirect to sign-in page
  };
  // Delete Account function
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone!"
    );

    if (confirmDelete) {
      try {
        await user.delete(); // Deletes the account
        navigate("/"); // Redirect to home page after deletion
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 absolute right-4 top-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-3 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800">Account Options</h2>
        <button
          aria-label="Close"
          onClick={() => setIsClicked(!isClicked)}
          className="p-1 ml-4 rounded-full border border-amber-600 hover:bg-amber-100 transition"
        >
          <MdOutlineClose className="size-5 text-amber-600" />
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 font-semibold bg-amber-500 text-black rounded-lg hover:bg-amber-700 hover:text-white"
      >
        Logout
      </button>
      <button
        onClick={handleDeleteAccount}
        className="px-4 py-2 bg-amber-500 font-semibold text-black rounded-lg hover:bg-amber-700 hover:text-white"
      >
        Delete Account
      </button>
    </div>
  );
};

export default Logout;
