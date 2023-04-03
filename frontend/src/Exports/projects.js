import BBImage from "../images/BB-display.png";
import VoxImg from "../images/vox-temp.png";

export const projects = {
  main: {
    displayImg: VoxImg,
    title: "Voxion",
    description:
      "An MVP for a speech focused chat bot using OpenAI, designed to provide a more human like conversation experience.",
    deployment: false,
    repo: "https://github.com/bigolboyyo/voxion",
    status: "In Development",
  },
  secondary: {
    projs: [
      {
        displayImg: BBImage,
        title: "Flatiron Capstone Project",
        description:
          "This was my first take at a full stack application. It's a text adventure game built with React/Rails and utilizes Redux.",
        deployment: false,
        repo: "https://github.com/bigolboyyo/capstone-proj-flatiron",
        status: "No Longer Deployed",
      },
      {
        displayImg: BBImage,
        title: "Bouncing Balls",
        description:
          "An example of using Canvas and JS to demonstrate collision physics.",
        deployment: "https://bigolboyyo.github.io/BouncingBalls/",
        repo: "https://github.com/bigolboyyo/BouncingBalls",
        status: "Deployed",
      },
      {
        displayImg: BBImage,
        title: "Test ",
        description: "Testing Text Testing Tests",
        deployment: "https://bigolboyyo.github.io/BouncingBalls/",
        repo: "https://github.com/bigolboyyo/BouncingBalls",
        status: "Deployed",
      },
    ],
  },
};
