import React, { useState } from "react";
import bgimg from "../assets/bgimg.png";
import { toast } from "sonner";
import { apiClient } from "@/lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";

const AuthCard = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [mode, setMode] = useState("signin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateLogin = () => {
    if (!email.length) {
      toast.error("Email is required");
      return false;
    }

    if (!password.length) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required");
      return false;
    }

    if (!password.length) {
      toast.error("Password is required");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateLogin()) return;
    try {
      const response = await apiClient.post(
        LOGIN_ROUTE,
        { email, password },
        { withCredentials: true }
      );
      if (response.data?.user?.id) {
        setUserInfo(response.data.user);
        if (response.data.user.profileSetup) navigate("/home");
        else navigate("/profile");
        toast.success("Login successful");
      }
      console.log({ response });
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data || error.message || "Login failed");
    }
  };
  const handleSignup = async () => {
    if (!validateSignup()) return;
    try {
      const response = await apiClient.post(
        SIGNUP_ROUTE,
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 201) {
        setUserInfo(response.data.user);
        toast.success("Signup successful");
        navigate("/home");
      }
      console.log({ response });
    } catch (error) {
      // console.error(error);
      toast.error(error?.response?.data || error.message || "Signup failed");
    }
  };

  return (
    <div className="grid w-full max-w-5xl overflow-hidden bg-[#EEEEEE] shadow-xl rounded-2xl md:grid-cols-2">
      {/* LEFT – IMAGE / LOTTIE */}
      <div className="items-center justify-center hidden p-10 md:flex">
        {/* Replace this div with Lottie/Image later */}
        <div className="flex items-center justify-center w-full h-full text-white/70">
          <img src={bgimg} alt="background image" className="" />
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="p-8 md:p-12">
        <h2 className="text-3xl font-bold text-[#27374D]">
          {mode === "signin" ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="mt-2 text-gray-600">
          {mode === "signin"
            ? "Please enter your account details below"
            : "Create your SkillMate account"}
        </p>

        {/* FORM */}
        <form className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="email"
            value={email}
            className="auth-input w-full py-3 text-lg font-semibold tracking-wide text-[#27374D] bg-[#EEEEEE]
            shadow-[3px_3px_0px_black]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            className="auth-input w-full py-3 text-lg font-semibold tracking-wide text-[#27374D] bg-[#EEEEEE]
            shadow-[3px_3px_0px_black]"
            onChange={(e) => setPassword(e.target.value)}
          />

          {mode === "signup" && (
            <input
              placeholder="confirm password"
              type="password"
              value={confirmPassword}
              className="auth-input w-full py-3 text-lg font-semibold tracking-wide text-[#27374D] bg-[#EEEEEE]
            shadow-[3px_3px_0px_black]"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <button
            type="button"
            onClick={mode === "signin" ? handleLogin : handleSignup}
            className="w-full py-3 text-lg font-semibold tracking-wide text-[#27374D] transition-all bg-[#EEEEEE]
  shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* TOGGLE */}
        <p className="mt-6 text-sm text-center text-gray-700">
          {mode === "signin"
            ? "Don’t have an account?"
            : "Already have an account?"}
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="relative ml-1 font-semibold text-[#27374D]
             after:absolute after:left-0 after:-bottom-0.5
             after:h-0.5 after:w-0 after:bg-[#27374D]
             after:transition-all after:duration-300
             hover:after:w-full cursor-pointer"
          >
            {mode === "signin" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthCard;
