import publicImage from "./publicImage";

export const projects = {
  main: {
    displayImg: publicImage("vox-temp.png"),
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
        displayImg: publicImage("BB-display.png"),
        title: "Flatiron Capstone Project",
        description:
          "This was my first take at a full stack application. It's a text adventure game built with React/Rails and utilizes Redux.",
        deployment: false,
        repo: "https://github.com/bigolboyyo/capstone-proj-flatiron",
        status: "No Longer Deployed",
      },
      {
        displayImg: publicImage("icon-loading.png"),
        title: "Bouncing Balls",
        description:
          "An example of using Canvas and JS to demonstrate collision physics.",
        deployment: "https://bigolboyyo.github.io/BouncingBalls/",
        repo: "https://github.com/bigolboyyo/BouncingBalls",
        status: "Deployed",
      },
      {
        displayImg: publicImage("Dots.png"),
        title: "Test ",
        description: "Testing Text Testing Tests",
        deployment: "https://bigolboyyo.github.io/BouncingBalls/",
        repo: "https://github.com/bigolboyyo/BouncingBalls",
        status: "Deployed",
      },
    ],
  },
};
