import { useState, useEffect, useCallback } from "react";
import { Router, Route } from "wouter";

const currentLoc = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};


const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLoc());
  useEffect(() => {
    const hander = () => setLoc(currentLoc());
    window.addEventListener("hashchange", hander);

    return () => {
      window.removeEventListener("hashchange", hander);
    }
  }, []);

  const navigate = useCallback(to => { window.location.hash = to}, []);
  console.log(navigate, loc);
  return [loc, navigate];
};

export default useHashLocation;