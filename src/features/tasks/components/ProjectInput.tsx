import { useQueryClient } from "@tanstack/react-query";
import { Dispatch } from "react";
import { SingleValue } from "react-select";
import CreatableSelect from "react-select/creatable";

import useCreateProject from "../hooks/useCreateProject";
import ProjectOption from "../interfaces/ProjectOption";

interface ProjectInputProps {
  selectedProject: ProjectOption | null;
  setSelectedProject: Dispatch<React.SetStateAction<ProjectOption | null>>;
  options: ProjectOption[] | undefined;
}

function ProjectInput({
  selectedProject,
  setSelectedProject,
  options,
  ...rest
}: ProjectInputProps) {
  const queryClient = useQueryClient();

  const createProject = useCreateProject({
    onSuccess: (data) => {
      setSelectedProject({ label: data.name, value: data.id });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  function handleCreateOption(newProject: string) {
    createProject.mutate({ name: newProject });
  }

  function handleChange(option: SingleValue<ProjectOption>) {
    setSelectedProject(option);
  }

  return (
    <CreatableSelect
      {...rest}
      options={options}
      value={selectedProject}
      onCreateOption={handleCreateOption}
      onChange={handleChange}
      isClearable={true}
      styles={{
        clearIndicator: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          cursor: "pointer",
        }),
      }}
    />
  );
}

export default ProjectInput;
