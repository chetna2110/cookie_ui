import React from 'react'
import { useAuth, useUser } from "@clerk/clerk-react"; // Use useAuth instead
import { useNavigate } from "react-router-dom";
const Logout = () => {
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
    <div className='flex flex-row gap-4'>
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
}

export default Logout
