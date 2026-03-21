export interface ProjectMedia {
  type: "video" | "gif";
  url: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  ogImage?: string;
  tags: string[];
  featuredTags: string[];
  demoUrl?: string;
  codeUrl?: string;
  media?: ProjectMedia;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "image-steganography",
    title: "Image Stegnography",
    description:
      "A React app to securely hide and extract secret messages within images using steganography.",
    longDescription:
      "This project implements image steganography in the browser: encode hidden payloads inside bitmap data, decode with the same key, and validate integrity. It focuses on UX for non-technical users and clear feedback for invalid inputs. The stack centers on React with client-side processing and deploys as a static site.",
    image: "/images/portfolio/imageStegnography.png",
    tags: ["React", "Stegnography", "CyberSecurity"],
    featuredTags: ["React", "CyberSecurity"],
    demoUrl: "https://image-stegnography.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/ImageStegnography",
  },
  {
    id: 2,
    slug: "pokedex-collection",
    title: "Pokedex Collection",
    description:
      "An interactive Pokédex built with React and PokeAPI to explore Pokémon data and stats.",
    longDescription:
      "A Pokédex-style explorer that consumes the public PokeAPI: search and filter species, inspect stats and typings, and persist a lightweight favorites list. Built with React and TypeScript, styled with Tailwind, and hosted on Netlify. The detail page below includes a placeholder demo clip for layout testing.",
    image: "/images/portfolio/pokdexCollection.png",
    tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    featuredTags: ["React", "TypeScript", "Firebase"],
    demoUrl: "https://pokedex-collection.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/pokedex",
    media: {
      type: "video",
      url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
      caption: "Placeholder demo video (CC0 sample from MDN) for UI testing.",
    },
  },
  {
    id: 3,
    slug: "2048-game",
    title: "2048 Game",
    description:
      "A mobile 2048 puzzle game built with React Native and Redux for smooth gameplay.",
    longDescription:
      "A React Native implementation of 2048 with Redux for game state, gesture-driven tile moves, and NativeWind for styling. Focus on 60fps animations and predictable state transitions for undo-friendly gameplay.",
    image: "/images/portfolio/2048Game.png",
    tags: ["React-Native", "Redux", "Native-wind"],
    featuredTags: ["React Native", "Redux"],
    codeUrl: "https://github.com/prathameshpatil455/0248",
  },
  {
    id: 4,
    slug: "image-editor",
    title: "Image Editor",
    description:
      "A web image editor that allows cropping, filtering, and adjusting images in the browser.",
    longDescription:
      "Browser-based image tooling: crop with aspect presets, apply basic filters and brightness/contrast adjustments, and export. Implemented with canvas APIs and vanilla JS modules where appropriate, with a React shell for UI.",
    image: "/images/portfolio/imageEditor.png",
    tags: ["Canvas", "Image Manipulation"],
    featuredTags: ["Canvas", "Image Manipulation"],
    demoUrl: "https://image-modifier.netlify.app/",
    codeUrl: "https://github.com/prathameshpatil455/image-editor",
    media: {
      type: "gif",
      url: "https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif",
      caption: "Placeholder GIF for layout testing (external GIPHY embed).",
    },
  },
  {
    id: 5,
    slug: "rice-leaf-disease-detection",
    title: "Rice Leaf Disease Detection",
    description:
      "A CNN-based model to detect rice leaf diseases from plant images using deep learning.",
    longDescription:
      "Convolutional network trained on curated plant pathology images to classify common rice leaf conditions. Includes preprocessing (resize, normalize), evaluation metrics, and notes on data imbalance and augmentation.",
    image: "/images/portfolio/riceLeafDetection.png",
    tags: ["Deep Learning", "Machine Learning", "CNN"],
    featuredTags: ["Deep Learning", "CNN"],
    codeUrl:
      "https://github.com/prathameshpatil455/Rice-leaf-disease-detection",
  },
  {
    id: 6,
    slug: "traffic-sign-recognition",
    title: "Traffic Sign Recognition Model",
    description:
      "A deep learning model to identify traffic signs using image classification with CNNs.",
    longDescription:
      "End-to-end pipeline from raw traffic sign crops to class logits: augmentation, CNN architecture experiments, and confusion-matrix-driven iteration. Documents preprocessing choices and deployment considerations for edge devices.",
    image: "/images/portfolio/trafficSignRecognition.jpg",
    tags: ["Deep Learning", "Machine Learning", "CNN"],
    featuredTags: ["Deep Learning", "CNN"],
    codeUrl:
      "https://github.com/prathameshpatil455/Traffic-Sign-Recognition-Mode",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectFilterOptions(): string[] {
  const tags = new Set<string>();
  PROJECTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return ["All", ...[...tags].sort((a, b) => a.localeCompare(b))];
}
