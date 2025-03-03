import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router";
import { supabase } from "../../client";
import AiOdysseyLogo from "../resources/AiOdysseyLogo.svg";

export default function InternalNavbar() {
  async function handleLogout() {
    sessionStorage.clear();
    localStorage.clear();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    Navigate("/");
  }

  let token = sessionStorage.getItem("token");
  let myToken = JSON.parse(token);
  let teamname = myToken.user.user_metadata.teamname;

  return (
    <section className="navbar-login internalNavBar">
      <span>
        <Link onClick={handleLogout} to="/">
          <img src={AiOdysseyLogo} alt="logo" />
        </Link>
      </span>
      <div className="profile-teamName">
        <div className="profile-icon-div" style={{ alignItems: "center" }}>
          <div className="profile-icon-internal">
            <FontAwesomeIcon icon={faUser} size="15px" color="blue" />
          </div>
        </div>
        <div className="teamNameInHeader">
          {teamname ? teamname : "Team odyssey"}
        </div>
      </div>
    </section>
  );
}
