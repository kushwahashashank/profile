import "./Projects.css";
function Projects() {
  return (
    <>
      <p className="heading">Projects</p>
      <div className="card">
        <div className="card-container heightchange">
          <div className="card-left">
            <div
              data-aos="fade-right"
              data-aos-offset="50"
              className="animation-left"
            >
              <p>2019</p>
              <div className="degree">Senior Secondary</div>
            </div>
          </div>
          <div className="card-right">
            <div
              data-aos="fade-left"
              duration="600"
              data-aos-offset="50"
              className="animation-right"
            >
              <div className="card-heading">10+2 with Physical Education</div>
              <div className="card-sub-head">N.S.P.S SCHOOL</div>
              <p>Passed Senior Secondary with 82.5%.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-container heightchange">
          <div className="card-left">
            <div
              data-aos="fade-right"
              data-aos-offset="50"
              className="animation-left "
            >
              <p>2017</p>
              <div className="degree">Senior High School</div>
            </div>
          </div>
          <div className="card-right">
            <div
              data-aos="fade-left"
              duration="600"
              data-aos-offset="50"
              className="animation-right"
            >
              <div className="card-heading">10th</div>
              <div className="card-sub-head">N.S.P.S SCHOOL</div>
              <p>Passed Senior High School with 87.68%.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
