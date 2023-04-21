export function getPageName(pathname) {
  switch (pathname) {
    case "/skills":
      return "Skills";
    case "/work":
      return "Work";
    case "/contact":
      return "Contact";
    default:
      return "Home";
  }
}
