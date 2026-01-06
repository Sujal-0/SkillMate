import { apiClient } from "@/lib/api-client";
import { useAppStore } from "@/store";
import { LOGOUT_ROUTE } from "@/utils/constants";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const response = await apiClient.post(
        LOGOUT_ROUTE,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        setUserInfo(null);
        navigate("/landing");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div>
      Home
      <button
        onClick={logOut}
        className="mt-6 px-6 text-sm  font-boldpx-12 py-2 font-bold  tracking-wider bg-[#27374D] w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 flex items-center gap-4 group"
      >
        Logout{" "}
        <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
      </button>
    </div>
  );
};

export default Home;
