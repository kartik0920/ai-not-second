import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function InternalNavbar() {
  return (
    <section className="navbar-login">
        <span>AI ODYSSEY</span>
        <div className="profile-icon-div">
          <div className='profile-icon-internal'>
          <FontAwesomeIcon icon={faUser} size="15px" color='blue' />
          </div>
        </div>
      </section>
  )
}
