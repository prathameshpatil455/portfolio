import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import imageStegnography from "../../../public/images/portfolio/imageStegnography.png";
import pokdexCollection from "../../../public/images/portfolio/pokdexCollection.png";
import Game2048 from "../../../public/images/portfolio/2048Game.png";
import imageEditor from "../../../public/images/portfolio/imageEditor.png";
import trafficSignRecognition from "../../../public/images/portfolio/trafficSignRecognition.jpg";
import riceLeafDetection from "../../../public/images/portfolio/riceLeafDetection.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

interface ProjectState {
  projects: Project[];
  filteredProjects: Project[];
  activeFilter: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Image Stegnography",
    description:
      "A React app to securely hide and extract secret messages within images using steganography.",
    image: imageStegnography,
    tags: [
      "React",
      "Encryption",
      "Decryption",
      "Stegnography",
      "CyberSecurity",
    ],
    demoUrl: "https://image-stegnography.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/ImageStegnography",
  },
  {
    id: 2,
    title: "Pokedex Collection",
    description:
      "An interactive Pokédex built with React and PokeAPI to explore Pokémon data and stats.",
    image: pokdexCollection,
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Poke Api"],
    demoUrl: "https://pokedex-collection.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/pokedex",
  },
  {
    id: 3,
    title: "2048 Game",
    description:
      "A mobile 2048 puzzle game built with React Native and Redux for smooth gameplay.",
    image: Game2048,
    tags: ["React-Native", "Redux", "Native-wind"],
    codeUrl: "https://github.com/prathameshpatil455/0248",
  },
  {
    id: 4,
    title: "Image Editor",
    description:
      "A web image editor that allows cropping, filtering, and adjusting images in the browser.",
    image: imageEditor,
    tags: ["HTML", "CSS", "Javascript", "Image Manipulation"],
    demoUrl: "https://image-modifier.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/image-editor",
  },
  {
    id: 5,
    title: "Rice Leaf Disease Detection",
    description:
      "A CNN-based model to detect rice leaf diseases from plant images using deep learning.",
    image: riceLeafDetection,
    tags: ["Deep Learning", "Machine Learning", "CNN"],
    codeUrl:
      "https://github.com/prathameshpatil455/Rice-leaf-disease-detection",
  },
  {
    id: 6,
    title: "Traffic Sign Recognition Model",
    description:
      "A deep learning model to identify traffic signs using image classification with CNNs.",
    image: trafficSignRecognition,
    tags: ["Deep Learning", "Machine Learning", "CNN", "Pre-Processing"],
    codeUrl:
      "https://github.com/prathameshpatil455/Traffic-Sign-Recognition-Mode",
  },
];

const initialState: ProjectState = {
  projects,
  filteredProjects: projects,
  activeFilter: "All",
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    filterProjects: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      state.activeFilter = filter;

      if (filter === "All") {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(filter.toLowerCase())
          )
        );
      }
    },
  },
});

export const { filterProjects } = projectSlice.actions;
export default projectSlice.reducer;
