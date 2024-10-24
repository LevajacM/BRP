import PageLinks from "./PageLinks";
import PageIcons from "./PageIcons";

export const Footer = () => {
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  }
  return (
    <footer className='section footer'>
      {/* ------------------------------------------ */}
      <PageLinks pos={"footer-links"} link={"footer-link"} />
      <PageIcons pos={"footer-icons"} itemClass={"footer-icon"} />
      {/* ------------------------------------------ */}
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{getDate()}.</span> all rights reserved
      </p>
    </footer>
  );
};
