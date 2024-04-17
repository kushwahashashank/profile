// import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
function Projects() {
  return (
    <>
      <div className="card">
        <div className="card-container heightchange">
          <div className="card-left">
            <div
              data-aos="fade-right"
              data-aos-offset="50"
              className="animation-left"
            >
              <div className="degree">Sentiment Analysis</div>
            </div>
          </div>
          <div className="card-right">
            <div
              data-aos="fade-left"
              duration="600"
              data-aos-offset="50"
              className="animation-right"
            >
              <div
                className="card-sub-head"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  Github
                  <a
                    href="https://github.com/kushwahashashank/Audio-Sentiment-Analysis-and-Summarizing-System"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        marginRight: "1rem",
                        cursor: "pointer",
                        color: "rgba(136, 109, 69, 0.9)",
                      }}
                    />
                  </a>
                </div>
              </div>
              <p>Utilized Deepgram API for audio transcription.</p>
              <p>
                Employed the GPT-4 API for the Summaring and Sentiment Analysis
                task.
              </p>
              <p>
                Developed FastAPI integrated with web app, supporting text and
                audio input.
              </p>
              <p>
                <b>Tech Stack :</b> ReactJs, Bootstrap, CSS, NodeJs, MongoDB
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
              <div className="degree">Carhub</div>
            </div>
          </div>
          <div className="card-right">
            <div
              data-aos="fade-left"
              duration="600"
              data-aos-offset="50"
              className="animation-right"
            >
              <div
                className="card-sub-head"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  Live
                  <a
                    href="https://carhub-shashank.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaExternalLinkAlt
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        marginRight: "1rem",
                        cursor: "pointer",
                        color: "rgba(136, 109, 69, 0.9)",
                      }}
                    />
                  </a>
                </div>
                <div>
                  Github
                  <a
                    href="https://github.com/kushwahashashank/carhub"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        marginRight: "1rem",
                        cursor: "pointer",
                        color: "rgba(136, 109, 69, 0.9)",
                      }}
                    />
                  </a>
                </div>
              </div>
              <p>
                Developed a cutting-edge web app with Next.js and Tailwind CSS
                for responsive car rental service.
              </p>
              <p>
                Integrated APIs for seamless user connections to diverse rental
                car options with secure authentication.
              </p>
              <p>
                Implemented feature-rich UI, advanced search, and payment
                gateways for hassle-free booking experience.
              </p>
              <p>
                <b>Tech Stack :</b> ReactJs, Typescript, CSS, NodeJs, MongoDB
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
              <div className="degree">Arthub</div>
            </div>
          </div>
          <div className="card-right">
            <div
              data-aos="fade-left"
              duration="600"
              data-aos-offset="50"
              className="animation-right"
            >
              <div
                className="card-sub-head"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  Live
                  <a
                    href="https://aarthub.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaExternalLinkAlt
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        marginRight: "1rem",
                        cursor: "pointer",
                        color: "rgba(136, 109, 69, 0.9)",
                      }}
                    />
                  </a>
                </div>
                <div>
                  Github
                  <a
                    href="https://github.com/kushwahashashank/arthub"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.9rem",
                        marginRight: "1rem",
                        cursor: "pointer",
                        color: "rgba(136, 109, 69, 0.9)",
                      }}
                    />
                  </a>
                </div>
              </div>
              <p>
                Developed an e-commerce site for artwork sales with seamless
                user experience, responsive design, and modern look.
              </p>
              <p>
                Implemented React Redux for real-time cart management with
                Node.js API integration for backend functionality.
              </p>
              <p>
                Utilized MongoDB for efficient data storage and management,
                ensuring scalability and performance.
              </p>
              <p>
                <b>Tech Stack :</b> ReactJs, Bootstrap, CSS, NodeJs, MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
