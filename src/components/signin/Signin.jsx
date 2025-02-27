import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignIn } from "@clerk/clerk-react";

const Signin = () => {
  const { signIn, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForget, setIsForget] = useState(false);
  const [error, setError] = useState("");
  const handleSignIn = async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      const result = await signInAttempt.attemptFirstFactor({
        strategy: "password",
        password,
      });

      if (result.status === "complete") {
        window.location.href = "/"; // Redirect after successful login
      } else {
        setError("Authentication failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.errors ? err.errors[0].message : "Invalid email or password."
      );
    }
  };

  // Custom Google Sign-Up Function
  const handleGoogleSignIn = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/", // Redirect to the dashboard or another page
      });
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      setError("Failed to sign in with Google.");
    }
  };

  return (
    <div>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl mt-20">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <img
            src="./image/footerlogo.png"
            className=" h-full object-cover overflow-clip"
            alt=""
            srcset=""
          />
        </div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 bg-amber-50">
          <div className="flex justify-center h-16">
            <div className="h-full w-full flex justify-center items-center relative mt-[13px]">
              <img
                className="w-40 h-40 absolute"
                src="./image/logo.png"
                alt=""
              />
            </div>
          </div>
          {isForget ? (
          // forget Password logic
            <div></div>
          ) : (
            <>
              <p className="text-xl text-center font-semibold text-black">
                Welcome back!
              </p>

              <div
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center mt-5 text-black rounded-lg bg-amber-400 py-2 px-4 cursor-pointer"
              >
                <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>

                <span className="font-bold">Sign in with Google</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b lg:w-1/4"></span>

                <Link
                  to="/signin"
                  className="text-xs text-center text-black uppercase hover:underline"
                >
                  or login with email
                </Link>

                <span className="w-1/5 border-b lg:w-1/4"></span>
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-black "
                  for="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-4 py-2 text-black bg-white border rounded-lg  focus:border-amber-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-amber-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-black "
                    for="loggingPassword"
                  >
                    Password
                  </label>
                  <div onClick={()=>setIsForget(!isForget)} className="text-xs text-black hover:underline">
                    Forget Password?
                  </div>
                </div>

                <input
                  id="loggingPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-2 text-black bg-white border rounded-lg  focus:border-amber-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-amber-300"
                  type="password"
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div className="mt-6 bg-amber-400 rounded-lg">
                <button
                  onClick={handleSignIn}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring focus:border-amber-400 focus:ring-amber-300 focus:ring-opacity-40"
                >
                  Sign In
                </button>
              </div>
            </>
          )}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>

            <Link
              to="/signup"
              className="text-xs text-black uppercase hover:underline"
            >
              or sign up
            </Link>

            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
