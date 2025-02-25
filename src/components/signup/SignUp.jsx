import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (!isLoaded) return;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const signUpAttempt = await signUp.create({
        emailAddress: email,
        password,
      });

      console.log("Sign-up Response:", signUpAttempt); // Debugging

      await signUp.prepareEmailAddressVerification(); // Send verification email
      alert("Verification email sent! Please check your inbox.");
    } catch (err) {
      console.error("Signup Error:", err); // Log full error for debugging
      setError(err.errors?.[0]?.message || "Error creating account."); // Show specific error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side Image */}
          <div className="hidden lg:block lg:w-1/2">
            <img
              src="./image/footerlogo.png"
              className="h-full object-cover"
              alt="Signup"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full p-8 lg:w-1/2 bg-amber-50">
            <div className="flex items-center justify-center mt-10">
              <img className="w-40 h-40" src="./image/logo.png" alt="Logo" />
            </div>
            <p className="text-xl font-semibold text-center text-black mt-5">
              Create an account
            </p>

            {/* Google Signup */}
            <button className="flex items-center justify-center mt-5 bg-amber-400 text-black rounded-lg py-2 px-4 w-full">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
              </svg>
              Sign up with Google
            </button>

            {/* Separator */}
            <div className="flex items-center justify-between my-5">
              <span className="w-1/4 border-b"></span>
              <span className="text-xs text-black uppercase">
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
            {error && <p className="text-red-500">{error}</p>}

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
