import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/create">
        <button className="btn">Create Survey</button>
        <br />
      </Link>
      <Link to="/published">
        <button className="btn">Take Survey</button>
      </Link>
    </div>
  );
};

export default Menu;
