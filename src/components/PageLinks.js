import { pageLinks } from "./data";
import PageLink from "./PageLink";

const PageLinks = ({ pos, link }) => {
  return (
    <ul className={pos} id={pos}>
      {pageLinks.map(({ id, href, text }) => {
        return <PageLink key={id} href={href} text={text} link={link} />;
      })}
    </ul>
  );
};
export default PageLinks;
