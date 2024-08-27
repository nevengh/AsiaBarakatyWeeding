/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({pageName}) => {
  return (
    <div className="hero">
      <h2>
        {pageName}/ <Link to="/">الرئيسية</Link>
      </h2>
    </div>
  );
};

export default Hero;
