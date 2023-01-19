import useNavigationContext from "../Hooks/use-navigation-context";
import classNames from "classnames";

function Link({ to, children, classNm, activeClassNm }) {
  const { navigate, currentPath } = useNavigationContext();

  const classes = classNames(
    "text-blue-500",
    classNm,
    currentPath === to && activeClassNm
  );
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
