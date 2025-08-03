import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const onToggleSignup = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />

      {/* Full-screen background image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered form container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <form className="bg-black bg-opacity-75 p-6 sm:p-8 rounded-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm &&
            <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />}

          {/* Email input */}
          <input
            type="text"
            placeholder="Email address"
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Toggle link */}
          <p
            onClick={onToggleSignup}
            className="mt-4 text-center text-gray-300 cursor-pointer hover:underline"
          >
            {isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;