import React from "react";
import { Button } from "antd";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Button size="large" type="link">
        Proyectos Visibles
      </Button>
      <Button size="large" type="link">
        Programadas
      </Button>
      <Button size="large" type="link">
        Settings
      </Button>
      <Button size="large" type="link">
        Profile
      </Button>
      <Button size="large" type="link">
        Log Out
      </Button>
    </div>
  );
};

export default Header;
