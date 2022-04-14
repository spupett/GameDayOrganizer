import { Link, Outlet } from "react-router-dom";
import React from "react";
import Login from "../src/components/Login/Login";

import "./App.css";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  console.log(token);

  if (!token) {
    console.log("get token");
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <h1>Game Day Organizer</h1>
      <nav style={{ borderBottom: "solid 10x", paddingBottom: "1rem" }}>
        <Link to="/games">Spuppett's Games</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
