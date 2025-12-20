import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppStore();

  const redirect = () => {
    if (!userInfo) {
      navigate("/auth");
    } else if (!userInfo.profileSetup) {
      navigate("/profile");
    } else {
      navigate("/home");
    }
  };

  return redirect;
};

export default useAuthRedirect;
