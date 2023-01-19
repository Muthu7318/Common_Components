import useNavigationContext from "../Hooks/use-navigation-context";

function Route({ path, children }) {
  const { currentPath } = useNavigationContext();

  if (currentPath === path) {
    return children;
  }
  return null;
}

export default Route;
