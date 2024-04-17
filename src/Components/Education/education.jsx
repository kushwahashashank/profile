import React from "react";

const Education = () => {
  return (
    <div>
      {" "}
      <div className="card">
        <div className="card-container heightchange">
          <div className="card-left">
            <div
              data-aos="fade-right"
              data-aos-offset="50"
              className="animation-left "
            >
              <p>2020 - Ongoing</p>
              <div className="degree">Bachelor's Degree</div>
            </div>
          </div>
          <div className="card-right">
            <div
              data-aos="fade-left"
              duration="600"
              data-aos-offset="50"
              className="animation-right"
            >
              <div className="card-heading">Bachelor of Technology (CSE)</div>
              <div className="card-sub-head">
                INDIAN INSTITUTE OF INFORMATION TECHNOLOGY UNA
              </div>
              <p>
                Currently in senior year of B.Tech program in IIIT Una with 7.86
                CGPA
              </p>
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
    </div>
  );
};

export default Education;
