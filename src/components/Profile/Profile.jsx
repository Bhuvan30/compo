import "./Profile.css";
import profilePic from "../../public/profilePic.png";
import { useState } from "react";
import Button from "../Button/Button";

function Profile() {
  const [name, setName] = useState("dummy");
  const [email, setEmail] = useState("dummy@gmail.com");
  const [area, setArea] = useState("bengaluru");

  return (
    <div>
      <main className="profile-page">
        <img className="profilePic" src={profilePic} alt="Profile Pic"></img>
        <h1 className="profileH2">Name : {name}</h1>
        <h1 className="profileH2">Email : {email}</h1>
        <h1 className="area profileH2">Area : {area}</h1>

        <div className="LogOutBtn">
          <Button type="primary">Log Out</Button>
        </div>
      </main>
    </div>
  );
}

export default Profile;
