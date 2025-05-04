import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import imageStegnography from "../../../public/images/portfolio/imageStegnography.png";
import pokdexCollection from "../../../public/images/portfolio/pokdexCollection.png";
import Game2048 from "../../../public/images/portfolio/2048Game.png";
import imageEditor from "../../../public/images/portfolio/imageEditor.png";

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
      "A full-featured e-commerce platform built with React, Node.js, and MongoDB.",
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
    title: "Pokedex collection",
    description:
      "A Kanban-style task management application with drag-and-drop functionality.",
    image: pokdexCollection,
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Poke Api"],
    demoUrl: "https://pokedex-collection.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/pokedex",
  },
  {
    id: 3,
    title: "2048 Game",
    description:
      "Real-time weather dashboard with global forecasts and interactive maps.",
    image: Game2048,
    tags: ["React-Native", "Redux", "Native-wind"],
    // demoUrl: "https://weather-dashboard.com",
    codeUrl: "https://github.com/prathameshpatil455/0248",
  },
  {
    id: 4,
    title: "Image Editor",
    description:
      "An analytics dashboard for monitoring social media performance across platforms.",
    image: imageEditor,
    tags: ["HTML", "CSS", "Javascript", "Image Manipulation"],
    demoUrl: "https://image-modifier.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/image-editor",
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
