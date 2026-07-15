import { Projects } from "../data/Projext.jsx";

const MyProjects = () => {
  return (
    <div
      id="project"
      className="bg-slate-900 h-full sm:h-full pl-2 sm:pl-5 pb-2"
    >
      <h3 className="textH3">My Projects</h3>
      <div>
        {Projects.map((item) => (
          <div key={item.id} className="project-card">
            <h4 className="font-bold pb-1 underline underline-offset-8">
              {item.name}
            </h4>
            <p>{item.details}</p>

            <div className="flex gap-1 w-full flex-wrap">
              {item.use.map((tech, index) => (
                <span key={index} className="bg-gray-600 h-full p-1 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
