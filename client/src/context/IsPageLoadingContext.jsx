import React, { createContext, useState } from "react";

export const IsPageLoadingContext = createContext();

export const IsPageLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IsPageLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsPageLoadingContext.Provider>
  );
};
