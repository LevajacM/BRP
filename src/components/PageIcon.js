function PageIcon({ href, classI, itemClass }) {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={itemClass}>
        <i className={classI}></i>
      </a>
    </li>
  );
}
export default PageIcon;
