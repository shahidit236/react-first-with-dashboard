// Importing necessary hooks from React and react-router-dom
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A custom hook that scrolls the window to the top whenever the route changes.
 * This ensures that when a user navigates to a new page, the new page starts at the top.
 */
const UseScrollToTop = () => {
  // useLocation hook provides the current location object, which includes information about the current URL.
  const { pathname } = useLocation();

  /**
   * useEffect is a React hook that runs a side effect in function components.
   * In this case, it runs whenever the `pathname` changes.
   */
  useEffect(() => {
    // Scroll the window to the top left corner of the page (coordinates 0, 0).
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: this effect runs whenever `pathname` changes.

  // No return value since this hook is only for side effects
};

export default UseScrollToTop;
