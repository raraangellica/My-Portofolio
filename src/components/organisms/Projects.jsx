import { Projects } from "../data/Projext.jsx";

const MyProjects = () => {
  return (
    <div id="project" className="bg-slate-900 h-110 sm:h-100 pl-2 sm:pl-5">
      <h3 className="textH3">My Projects</h3>
      <div>
        {Projects.map((item) => (
          <div key={item.id} className="project-card">
            <h4>{item.name}</h4>
            <p>{item.details}</p>

            <div className="flex gap-1">
              {item.use.map((tech, index) => (
                <span key={index} className="bg-gray-600 p-1 rounded-sm">
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
