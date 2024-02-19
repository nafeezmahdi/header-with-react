import logo from "../assets/images/logo.png";
import ListItem from "./ListItem";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} className="logo-img" alt="Logo" />
      <ul>
        <ListItem text="Home" />
        <ListItem text="Bedroom" />
        <ListItem text="Dinning" />
        <ListItem text="Kitchen" />
        <ListItem text="Backyard" />
      </ul>
    </div>
  );
}
