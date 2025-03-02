// Navbar componet used and AIODYSSEY

import { Link, Navigate } from "react-router";
import { supabase } from "../../client";
import AiOdysseyLogo from "../resources/AiOdysseyLogo.svg";

export default function Navbar() {
  async function handleLogout() {
    sessionStorage.clear();
    localStorage.clear();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    Navigate("/");
  }

  return (
    <>
      <section className="navbar-login mainNavBar">
        <span>
          <Link to="/">
            <img src={AiOdysseyLogo} alt="logo" />
          </Link>
        </span>
      </section>
    </>
  );
}
