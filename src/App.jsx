import { SignUpPage, SignInPage, Home } from "./pages/index";
import { redirect, Route, Routes, useNavigate } from "react-router-dom";
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
    if (localStorage.getItem("sb-iqttuxapydnhjecbfpch-auth-token")) {
      let data = JSON.parse(
        localStorage.getItem("sb-iqttuxapydnhjecbfpch-auth-token")
      );
      setToken(data);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<SignInPage setToken={setToken} />} />
        <Route path={"/signup"} element={<SignUpPage />} />
        {token ? <Route path={"/home"} element={<Home token={token} />} /> : ""}
      </Routes>
    </>
  );
}

export default App;
