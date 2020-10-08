import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/profile/FullName";
import Adress from "./Component/Profile/profile/Address";
import "./Style.css";

function App() {
  return (
    <div className="container">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
