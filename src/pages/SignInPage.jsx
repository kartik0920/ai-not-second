import Navbar from "../assets/components/navbar";
import AIorNot from "../assets/components/AIorNot";
import SignIn from "../assets/components/SignIn";

export default function SignInPage({ setToken }) {
  return (
    <>
      {" "}
      {/* use for nav bar in siginPage */}
      <Navbar /> {/* fixed */}
      <AIorNot /> {/* fixed */}
      <SignIn setToken={setToken} /> {/* changing */}
    </>
  );
}
