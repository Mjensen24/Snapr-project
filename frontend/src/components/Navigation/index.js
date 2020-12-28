import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import PostButton from './PostButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navigation-links_left">
        <ProfileButton user={sessionUser} />
        <NavLink className="navigation-links" to="/post">post</NavLink>
      </div>
    );
  } else {
    sessionLinks = (
      <div>
        <NavLink className="navigation-links" to="/login">Log In</NavLink>
        <NavLink className="navigation-links" to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="navigation-links_container-outer">
      <div className="navigation-links_container-inner">
        <NavLink className="navigation-links" exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
