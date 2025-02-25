import React from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const navigate = useNavigate(); // Use navigate to redirect user

  const handleSignUp = async () => {
    if (!isLoaded) return;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification(); // Send verification email

      setSuccessMessage("Verification email sent! Please check your inbox."); // Show success message
    } catch (err) {
      setError("Error creating account.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side Image */}
          <div className="hidden bg-cover lg:block lg:w-1/2">
            <img
              src="./image/footerlogo.png"
              className=" h-full object-cover overflow-clip"
              alt=""
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full p-8 lg:w-1/2 bg-amber-50">
            <div className="flex items-center justify-center mt-10 relative">
              <img
                className="w-40 h-40 absolute insert-2"
                src="./image/logo.png"
                alt="Logo"
              />
            </div>
            <p className="text-xl font-semibold text-center text-black mt-5">
              Create an account
            </p>

            {/* Google Signup */}
            <a
              href="#"
              className="flex items-center justify-center mt-5 text-black rounded-lg bg-amber-400 py-2 px-4"
            >
              <div className="px-4 py-2 ">
                <svg className="w-6 h-6 " viewBox="0 0 40 40">
                  {/* Add SVG code for Google icon */}
                </svg>
              </div>
              <span className="font-semibold">Sign up with Google</span>
            </a>

            {/* Separator */}
            <div className="flex items-center justify-between my-5">
              <span className="w-1/4 border-b"></span>
              <span className="text-xs text-center text-black uppercase">
                or sign up with email
              </span>
              <span className="w-1/4 border-b"></span>
            </div>

            {/* Input Fields */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-black">
                Email Address
              </label>
              <input
                className="w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-amber-400 focus:ring focus:outline-none"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                className="w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-amber-400 focus:ring focus:outline-none"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                className="w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-amber-400 focus:ring focus:outline-none"
                type="password"
                placeholder="Enter confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Show error or success message */}
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}

            {/* Sign Up Button */}
            <button
              onClick={handleSignUp}
              className="w-full mt-5 py-2 text-sm font-medium text-black bg-amber-400 rounded-lg focus:ring"
            >
              Sign Up
            </button>

            {/* Already Have an Account */}
            <div className="text-center mt-4">
              <Link to="/signin" className="text-xs text-black hover:underline">
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
