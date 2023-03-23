export const getTriangleStyles = (trianglePosition) => {
  switch (trianglePosition) {
    case "north":
      return {
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderBottom: "20px solid #40AAFE",
        top: "-20px",
        left: `calc(50% - 20px)`,
      };
    case "west":
      return {
        position: "absolute",
        width: 0,
        height: 0,
        borderRight: "20px solid #40AAFE",
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        left: "-20px",
        top: `calc(50% - 20px)`,
      };
    case "south":
      return {
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderTop: "20px solid #40AAFE",
        bottom: "-20px",
        left: `calc(50% - 20px)`,
      };
    case "east":
      return {
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "20px solid #40AAFE",
        borderTop: "20px solid transparent",
        borderBottom: "20px solid transparent",
        right: "-20px",
        top: `calc(50% - 20px)`,
      };
    default:
      return {
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "20px solid transparent",
        borderRight: "20px solid transparent",
        borderTop: "20px solid #40AAFE",
        bottom: "-20px",
        left: `calc(50% - 20px)`,
      };
  }
};
