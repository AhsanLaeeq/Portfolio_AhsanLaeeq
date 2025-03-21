// import React from "react";

// const projects = [
//   {
//     title: "📝 NoteNest",
//     description: "A note-taking app with authentication and real-time updates.",
//     link: "https://ahsanlaeeq.github.io/Fronend_notenest/"
//   },
//   {
//     title: "🛍️ Redux Shopping Cart",
//     description: "A React & Redux-based shopping cart with a dynamic balance system.",
//     link: "https://ahsanlaeeq.github.io/ecommerce_cart_Redux_Based/"
//   },
//   {
//     title: "📰 Newscaster App",
//     description: "A real-time news app fetching headlines via API.",
//     link: "https://ahsanlaeeq.github.io/Newscaster_app/"
//   }
// ];

// const Projects = ({ projectsRef }) => {
//   return (
//     <section id="projects" ref={projectsRef} className="py-5 text-center">
//       <div className="container">
//         <h2 className="mb-4">🚀 My Projects</h2>
//         <div className="row">
//           {projects.map((project, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card shadow mb-4">
//                 <div className="card-body">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                   <a href={project.link} target="_blank" className="btn btn-primary">
//                     🔗 Live Preview
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";

const projects = [
  {
    title: "📝 NoteNest",
    description: "A note-taking app with authentication and real-time updates.",
    link: "https://ahsanlaeeq.github.io/Fronend_notenest/"
  },
  {
    title: "🛍️ Redux Shopping Cart",
    description: "React & Redux-based shopping cart",
    link: "https://ahsanlaeeq.github.io/ecommerce_cart_Redux_Based/"
  },
  {
    title: "📰 Newscaster App",
    description: "A sleek news app that fetches live headlines from trusted APIs, keeping you updated",
    link: "https://ahsanlaeeq.github.io/Newscaster_app/"
  },
  {
    title: "📱 Weather App",
    description: "A weather app that fetches live weather data using an API keeping you updated.",
    link: "https://ahsanlaeeq.github.io/Weather_App/"
  }
];

const Projects = ({ projectsRef }) => {
  return (
    <section id="projects" ref={projectsRef} className="py-5 text-center">
      <div className="container">
        <h2 className="mb-4">🚀 My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card shadow">
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    🔗 Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
