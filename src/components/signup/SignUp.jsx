import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState(""); // New state for verification
  const [pendingVerification, setPendingVerification] = useState(false); // Track verification step
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!isLoaded) return;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const newUser = await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification();
      setPendingVerification(true); // Move to verification step
    } catch (err) {
      setError("Error creating account.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      alert("Email verified successfully! You can now sign in.");
      navigate("/");
    } catch (err) {
      setError("Invalid verification code. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="hidden bg-cover lg:block lg:w-1/2">
            <img
              src="./image/footerlogo.png"
              className="h-full object-cover"
              alt="Logo"
            />
          </div>

          <div className="w-full p-8 lg:w-1/2 bg-amber-50">
            <div className="flex items-center justify-center mt-10 relative">
              <img
                className="w-40 h-40 absolute insert-2"
                src="./image/logo.png"
                alt="Logo"
              />
            </div>
            <p className="text-xl font-semibold text-center text-black mt-5">
              {pendingVerification ? "Verify Your Email" : "Create an Account"}
            </p>

            {!pendingVerification ? (
              <>
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

                <button
                  onClick={handleSignUp}
                  className="w-full mt-5 py-2 text-sm font-medium text-black bg-amber-400 rounded-lg focus:ring"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-black">
                    Verification Code
                  </label>
                  <input
                    className="w-full px-4 py-2 text-black bg-white border rounded-lg focus:border-amber-400 focus:ring focus:outline-none"
                    type="text"
                    placeholder="Enter verification code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <button
                  onClick={handleVerifyCode}
                  className="w-full mt-5 py-2 text-sm font-medium text-black bg-green-500 rounded-lg focus:ring"
                >
                  Verify Email
                </button>
              </>
            )}

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
