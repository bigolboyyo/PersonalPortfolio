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
        displayImg: publicImage("robotext.png"),
        title: "Text Adventure",
        description:
          "Developed as my Flatiron capstone project. A text adventure game built with React/Rails and utilizes Redux.",
        deployment: false,
        repo: "https://github.com/bigolboyyo/capstone-proj-flatiron",
        status: "Not Deployed",
      },
      {
        displayImg: publicImage("BB-display.png"),
        title: "Screensaver",
        description:
          "Experimenting with Canvas and JS to create a simple screensaver.",
        deployment: "https://bigolboyyo.github.io/BouncingBalls/",
        repo: "https://github.com/bigolboyyo/BouncingBalls",
        status: "Deployed",
      },
      {
        displayImg: publicImage("beerlien.png"),
        title: "Recipe App",
        description:
          "Utilizing the Punk Beer api to create a beer recipe app with JS.",
        deployment: "https://bigolboyyo.github.io/PunkBeer/",
        repo: "https://github.com/bigolboyyo/PunkBeer",
        status: "Deployed",
      },
      {
        displayImg: publicImage("lifeis.png"),
        title: "Youtube Search",
        description:
          "Youtube search clone utiling YT api and implementing pagination.",
        deployment: "https://bigolboyyo.github.io/YoutubeSearch/",
        repo: "https://github.com/bigolboyyo/YoutubeSearch",
        status: "Deployed",
      },
      {
        displayImg: publicImage("img-brd-icon.png"),
        title: "Image Board",
        description:
          "A personal image board with file reading, using traditional grid methods.",
        deployment: "https://bigolboyyo.github.io/ImageBoard/",
        repo: "https://github.com/bigolboyyo/Gridscroller",
        status: "Deployed",
      },
    ],
  },
};
