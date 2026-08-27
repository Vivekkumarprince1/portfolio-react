import { createContext, useContext, useState } from "react";

const LoadingContext = createContext(undefined);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
