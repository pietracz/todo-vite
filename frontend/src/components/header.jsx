import React from "react";

function Header() {
  return (
    <nav>
      <div className="site-title">
        <a href="/">
          <h1>Todo</h1>
        </a>
        <p>Plan the steps to get you ahead.</p>
      </div>
      <ul className="quickMenu">
        <li>
          <a href="#">Archive</a>
        </li>
        <li>
          <a href="#">Bin</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
