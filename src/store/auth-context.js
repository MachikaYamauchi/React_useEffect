import React, { useState, useEffect } from "react";

// AuthContext is not a coponent, it is a object which contains a component.
// The default value is used only if we would consume without having a provider -> This means Technically we do not need the Provider if we have a default value. But in reality we will use Context to have a value which can change and that will only be a possible with a provider.
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout:() => {},
  onLogin:(email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
