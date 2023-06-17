import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/parent">Parent</Link>
          </li>
          <li>
            <Link to="/guest">GuestList</Link>
          </li>
          <li>
            <Link to="/user">UserSearch</Link>
          </li>
          <li>
            <Link to="/userrefs">UserSearch with Refs</Link>
          </li>
          <li>
            <Link to="/userclass">UserSearchClass</Link>
          </li>
          <li>
            <Link to="/event">Event Component</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
