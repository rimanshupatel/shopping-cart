import { Link } from "react-router-dom";

export default function Navlinks() {
  const data = [
    {
      id: 1,
      name: "store",
      link: "/",
    },
    {
      id: 2,
      name: "about",
      link: "/About",
    },
  ];
  const nav_links = {
    padding: "0 1rem",
    fontWeight: 500,
  };
  return (
    <ul className="flex relative ">
      {data.map((links) => (
        <Link to={links.link} className="leading-[70px] " key={links.id}>
          <li
            style={nav_links}
            className="hover:border-b-4 hover:border-purple-500 duration-300 group"
          >
            {links.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
