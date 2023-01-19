import { useContext } from "react";
import NavigationContext from "../Context/NavigationContext";

function useNavigationContext() {
  return useContext(NavigationContext);
}

export default useNavigationContext;
