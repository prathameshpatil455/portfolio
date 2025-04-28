import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    demoUrl: 'https://demo-ecommerce.com',
    codeUrl: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demoUrl: 'https://task-management-app.com',
    codeUrl: 'https://github.com/username/task-management',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with global forecasts and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'OpenWeatherMap API', 'Chart.js'],
    demoUrl: 'https://weather-dashboard.com',
    codeUrl: 'https://github.com/username/weather-dashboard',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for monitoring social media performance across platforms.',
    image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Redux', 'D3.js', 'Express', 'Social APIs'],
    demoUrl: 'https://social-dashboard.com',
    codeUrl: 'https://github.com/username/social-dashboard',
  },
];

const initialState: ProjectState = {
  projects,
  filteredProjects: projects,
  activeFilter: 'All',
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    filterProjects: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      state.activeFilter = filter;
      
      if (filter === 'All') {
        state.filteredProjects = state.projects;
      } else {
        state.filteredProjects = state.projects.filter(project => 
          project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
        );
      }
    },
  },
});

export const { filterProjects } = projectSlice.actions;
export default projectSlice.reducer;