import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {/* In these <Login/> and <Home/> component, we do not forward Context.*/}
        {/* (Reason 1) At <Login/>, we are using the onLogin(loginHandler) funtion  */}
        {/* (Reason 2) At <Home/>, pass onLogout to <Button/>, and the <Button/> should be the reusable. */}
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
