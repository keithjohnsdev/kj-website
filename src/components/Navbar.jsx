import { useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const navigate = useNavigate();
  const location = window.location.pathname.slice(11);

  function handleNavigate(destination) {
    console.log("ping")
    sessionStorage.setItem("visited", true);
    navigate(destination);
  }
  return (
    <>
      <div className="navbar">
        <div className="left-navs">
          <div
            className={`navlink ${location === "/" ? "current" : ""}`}
            onClick={() => {
              handleNavigate("/");
            }}
          >
            Home<div className="underline"></div>
          </div>
          <div
            className={`navlink ${location === "/resume" ? "current" : ""}`}
            onClick={() => {
              handleNavigate("/resume");
            }}
          >
            Resume<div className="underline"></div>
          </div>
          <div className={`navlink ${location === "/portfolio" ? "current" : ""}`}>
            Portfolio<div className="underline"></div>
          </div>
        </div>
        <div className="right-navs">
          <a href={`mailto:keithjohnsdev@gmail.com?subject=Hello!`}>
            <div className="navlink email-text">
              keithjohnsdev@gmail.com<div className="underline"></div>
            </div>
          </a>
          <div className="navlink email-icon">
            <a href={`mailto:keithjohnsdev@gmail.com?subject=Hello!`}>
              <img src="./icon-email.png" />
            </a>
          </div>
        </div>
      </div>
      <MobileNavbar handleNavigate={handleNavigate} />
    </>
  );
}
