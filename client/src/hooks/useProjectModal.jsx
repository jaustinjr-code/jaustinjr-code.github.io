import { useCallback, useState } from "react";

// Tracks which project's demo modal is open. Returns the active project object
// (or null) plus open/close handlers.
export default function useProjectModal() {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = useCallback((project) => setActiveProject(project), []);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return { activeProject, openProject, closeProject };
}
