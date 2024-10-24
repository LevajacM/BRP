import logo from "../images/logo.svg";
import PageIcons from "./PageIcons";
import PageLinks from "./PageLinks";

export const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        {/* ------------------------------------------ */}

        <PageLinks pos={"nav-links"} link={"nav-link"} />
        <PageIcons pos={"nav-icons"} itemClass={"nav-icon"} />

        {/* ------------------------------------------*/}
      </div>
    </nav>
  );
};
