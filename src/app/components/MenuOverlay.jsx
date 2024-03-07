import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4 ">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.Path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay; 