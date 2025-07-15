// src/Projects.jsx
import React from "react";
import { projects } from "./assets/projects";

const Projects = () => {
  return (
    <div className="p-4 grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">{project.title}</h2>
          <p>{project.description}</p>
          <div className="mt-2 space-x-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Live</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">Repo</a>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-blue-200 px-2 py-1 text-xs rounded">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
