export function getPageName(pathname) {
  switch (pathname) {
    case "/about":
      return "About";
    case "/work":
      return "Work";
    case "/contact":
      return "Contact";
    default:
      return "Home";
  }
}
