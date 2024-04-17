import React from "react";

const Experience = () => {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-left">
          <div
            data-aos="fade-right"
            data-aos-offset="50"
            className="animation-left "
          >
            JAUARY 2023 - MAY 2023
          </div>
        </div>
        <div className="card-right">
          <div
            data-aos="fade-left"
            duration="600"
            data-aos-offset="50"
            className="animation-right"
          >
            <div className="card-heading">Ritswa Software Solution</div>
            <div className="card-sub-head">
              Software Engineer Intern (Remote)
            </div>
            <p>
              Boosted portal performance by 30% through strategic component
              partitioning and optimized API calls.
            </p>
            <p>
              Enhanced performance by memoizing state variables, cutting down
              query and API response times by 50% using cache.
            </p>
            <p>
              Managed 20+ hotfixes, documented projects thoroughly, and mentored
              a team of 4 developers.
            </p>
            <p>
              <b>Tech Stack :</b> ReactJs, Typescript, Bootstrap, CSS, NodeJs, MongoDb,
              Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
