import { useState, useEffect, useRef } from "react";

const MobileNavbar = ({ handleNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`mobile-navbar ${isOpen ? "open" : ""}`} ref={menuRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("open");
        }}
        className="menu-button"
      ></button>
      <div className="icon-wrapper">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="menu-icon"></div>
      </div>
      <div className="navlink-menu">
        {isOpen && (
          <div className="navlink" onClick={() => handleNavigate("/")}>
            Home
          </div>
        )}
        {isOpen && <div className="navlink" onClick={() => handleNavigate("/resume")}>Resume</div>}
        {isOpen && <div className="navlink">Home</div>}
        {isOpen && <div className="navlink">Home</div>}
      </div>
    </div>
  );
};

export default MobileNavbar;
