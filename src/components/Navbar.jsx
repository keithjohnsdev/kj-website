import { useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const navigate = useNavigate();

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
            className="navlink"
            onClick={() => {
              handleNavigate("/");
            }}
          >
            Home<div className="underline"></div>
          </div>
          <div
            className="navlink"
            onClick={() => {
              handleNavigate("/resume");
            }}
          >
            Resume<div className="underline"></div>
          </div>
          <div className="navlink">
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
