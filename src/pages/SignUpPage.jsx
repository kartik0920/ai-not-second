import Navbar from "../assets/components/navbar";
import AIorNot from "../assets/components/AIorNot";
import SignUp from "../assets/components/Signupbox";

export default function SignUpPage() {
  return (
    <>
      {" "}
      {/* use for nav bar in siginPage */}
      <Navbar /> {/* fixed */}
      <AIorNot /> {/* fixed */}
      <SignUp /> {/* changing */}
    </>
  );
}
