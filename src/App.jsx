import { SignUpPage, SignInPage, Home, LeaderBoard } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(false);
  // console.log(token);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path={"/"} element={<SignInPage setToken={setToken} />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        {token ? <Route path={"/home"} element={<Home token={token} />} /> : ""}
        {token ? <Route path={"/leaderboard"} element={<LeaderBoard token={token} />} /> : ""}
      </Routes>
    </>
  );
}

export default App;
