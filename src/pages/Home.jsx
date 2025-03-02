import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

export default function Home({ token, setToken }) {
  let navigate = useNavigate();
  async function handleLogout() {
    sessionStorage.clear();
    localStorage.clear();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/");
  }

  // let teamname = token.session.user.user_metadata.teamname;
  return (
    <>
      {token && <h1>Welcome to homescreen @</h1>}

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
