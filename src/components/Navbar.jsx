import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  const handleNavClick = (e, targetSelector) => {
    e.preventDefault();
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VK
        </a>
        <a
          href="mailto:vivekkumarprince@email.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          vivekkumarprince@email.com
        </a>
        <ul>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} data-cursor="disable">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="#work" onClick={(e) => handleNavClick(e, "#work")} data-cursor="disable">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={(e) => handleNavClick(e, "#certificates")} data-cursor="disable">
              <HoverLinks text="CERTIFICATES" />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} data-cursor="disable">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;