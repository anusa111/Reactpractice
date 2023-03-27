import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Anusa",
    };
  }
  render() {
    const name = this.state.name;
    return (
      <navbar className="navbar">
        <div className="navlink">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to={`/skills/${name}`} className="nav-btn">Skills</Link>
          <Link to="/projects" className="nav-btn">Projects</Link>
        </div>
      </navbar>
    );
  }
}
export default Nav;
