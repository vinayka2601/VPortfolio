import { useCallback } from "react";
import {useNavigation} from "react-router-dom";

const useNavigation = () => {
  const navigate = useCallback((path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  },[]);
  return navigate;
};

export default useNavigation;