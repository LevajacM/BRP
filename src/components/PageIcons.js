import { pageIcons } from "./data";
import PageIcon from "./PageIcon";

const PageIcons = ({ pos, itemClass }) => {
  return (
    <ul className={pos}>
      {pageIcons.map(({ id, href, classI }) => {
        return (
          <PageIcon
            key={id}
            href={href}
            classI={classI}
            itemClass={itemClass}
          />
        );
      })}
    </ul>
  );
};
export default PageIcons;
