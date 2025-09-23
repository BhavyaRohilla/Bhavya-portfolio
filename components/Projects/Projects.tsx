import { memo } from "react";
import Project from "./Project";
import projects from "../../lib/projects"; // ✅ import karo

function Projects() {
  const renderProjects = () => {
    return Object.values(projects).map(
      ({ title, description, images, stack, links, special }, index) => (
        <Project
          key={index}
          index={index}
          title={title}
          description={description}
          images={images}
          stack={stack}
          links={links}
          special={special}
        />
      )
    );
  };

  return <section>{renderProjects()}</section>;
}

export default memo(Projects);
