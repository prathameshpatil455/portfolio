import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PROJECTS, type Project } from "../../data/projects";

export type { Project } from "../../data/projects";

interface ProjectState {
  projects: Project[];
  filteredProjects: Project[];
  activeFilter: string;
}

const initialState: ProjectState = {
  projects: PROJECTS,
  filteredProjects: PROJECTS,
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
        const q = filter.toLowerCase();
        state.filteredProjects = state.projects.filter((project) =>
          project.tags.some((tag) => tag.toLowerCase().includes(q)),
        );
      }
    },
  },
});

export const { filterProjects } = projectSlice.actions;
export default projectSlice.reducer;
