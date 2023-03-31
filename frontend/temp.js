// TODO: Loading util

// import React, { useState, useEffect } from "react";
// import Loading from "../components/Loading";

// export const withLoading = (WrappedComponent) => {
//   return (props) => {
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//       console.log("Setting isLoading to true");
//       setIsLoading(true);
//       const timer = setTimeout(() => {
//         console.log("Setting isLoading to false");
//         setIsLoading(false);
//       }, 5000);

//       return () => clearTimeout(timer);
//     }, []);

//     console.log("isLoading:", isLoading);

//     return isLoading ? <Loading /> : <WrappedComponent {...props} />;
//   };
// };

// const HeaderLayoutWithLoadingScreen = withLoading(HeaderLayout);

// export { HeaderLayoutWithLoadingScreen as HeaderLayout };
