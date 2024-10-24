function PageLink({ href, text, link }) {
  return (
    <li>
      <a href={href} className={link}>
        {text}
      </a>
    </li>
  );
}
export default PageLink;
