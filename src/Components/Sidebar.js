import Link from "./Link";

function Sidebar(props) {
  const links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Buttons",
      path: "/buttons",
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        classNm="mb-3"
        activeClassNm="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
