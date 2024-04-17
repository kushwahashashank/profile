import React, { useEffect, useRef } from "react";
import "./home.css";
import "./card.css";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import background from "../images/bg.jpg";
import contactbackground from "../images/Contact.png";
import { BsGithub, BsCodeSlash, BsInstagram } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import Projects from "./Projects/Projects";
import Experience from "./Experience/experience";
import Clubs from "./clubs";
import Education from "./Education/education";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gh1q04j",
        "template_bx674in",
        form.current,
        "hZQ3Y9GwSEcM62WD6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const handleClickScroll = () => {
    const element = document.getElementById("contact_form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="home">
        <div
          className="page-header-image"
          data-parallax="true"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <div className="home_main">
          <p id="name">Abhishek Kushwaha</p>
          <p>CSE STUDENT</p>
          <div className="links">
            <a className="btn btn-primary" onClick={handleClickScroll}>
              Let's Talk
            </a>
            <a
              className="btn btn-primary"
              href="https://bit.ly/3HNVykE"
              target="blank_"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="container">
          <div className="button-container">
            <a
              id="github"
              className="  btn-round  "
              href="https://github.com/kushwahashashank/"
              data-tooltip-content="My Github Profile"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub className="btn-icon" />
            </a>
            <a
              id="linkedin"
              className="btn-round"
              href="https://www.linkedin.com/in/kushwahashashank/"
              data-tooltip-content="Connect with me on LinkedIn"
              rel="noreferrer"
              target="_blank"
            >
              <TfiLinkedin className="btn-icon" />
            </a>
            <a
              id="cp"
              className="btn-round"
              href="https://clist.by/coder/kushwahashashank/"
              data-tooltip-content="My Competitive Programming profiles"
              rel="noreferrer"
              target="_blank"
            >
              <BsCodeSlash className="btn-icon" />
            </a>
            <Tooltip
              anchorId="github"
              style={{
                maxWidth: "10rem",
                textAlign: "center",
              }}
              variant="light"
            />
            <Tooltip
              anchorId="linkedin"
              style={{
                maxWidth: "10rem",
                textAlign: "center",
              }}
              variant="light"
            />
            <Tooltip
              anchorId="cp"
              style={{
                maxWidth: "10rem",
                textAlign: "center",
              }}
              variant="light"
            />
          </div>
        </div>
        <div className="block">
          <div className="row">
            <div className="about_subsection">
              <div className="card-body">
                <div className="title">About</div>
                <p>Hello! I am Abhishek Kushwaha.</p>
                <p>
                  I am from India and I &hearts; to build beautiful Web apps &
                  solve problems on different CP websites.
                </p>
                <p>
                  I will love to work along you. You can contact me by the links
                  provided and contact information given below.
                </p>
              </div>
            </div>
            <div className="about_subsection">
              <div className="card-body">
                <div className="title">Basic Information</div>
                <div className="about_item">
                  <div className="about_head">
                    <strong>AGE :</strong>
                  </div>
                  <div className="about_dis">23</div>
                </div>
                <div className="about_item">
                  <div className="about_head">
                    <strong>EMAIL :</strong>
                  </div>
                  <div className="about_dis">kushwahaabhi101@gmail.com</div>
                </div>
                <div className="about_item">
                  <div className="about_head">
                    <strong>PHONE :</strong>
                  </div>
                  <div className="about_dis">+91 8081637834</div>
                </div>
                <div className="about_item">
                  <div className="about_head">
                    <strong>LANGUAGE :</strong>
                  </div>
                  <div className="about_dis">English, Hindi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <p className="heading">Professional Skills</p>

          <div data-aos="fade-up" className="block skill_block ">
            <div className="skill_item">
              <div className="skill_head">
                <p>LANGUAGES/DATABASES :</p>
              </div>
              <div className="skill_dis">
                C++, C, JavaScript, TypeScript, MySQL, MongoDB, Firebase,
                Cassandra
              </div>
            </div>
            <div className="skill_item">
              <div className="skill_head">
                <p>TOOLS/TECHNOLOGIES :</p>
              </div>
              <div className="skill_dis">
                HTML, CSS, ReactJs, NextJs, NodeJs, ExpressJs, Git, Docker,
                Bootstrap
              </div>
            </div>
            <div className="skill_item">
              <div className="skill_head">
                <p>COURSEWORK :</p>
              </div>
              <div className="skill_dis">
                Data Structures and Algorithms, Object Oriented Programming,
                DBMS
              </div>
            </div>
            <div className="skill_item">
              <div className="skill_head">
                <p>PERSONAL :</p>
              </div>
              <div className="skill_dis">
                Analytical Thinking, Guidance, Collaboration, Efficient Resource
                Allocation
              </div>
            </div>
          </div>
        </div>
        <p className="heading">Projects</p>
        <Projects />
        <p className="heading">Work Experience</p>
        <Experience />
        <p className="heading">Other Experiences & POR</p>
        <Clubs />
        <p className="heading">Education</p>
        <Education />
        <div id="contact_form" className="contact">
          <div
            className="contact-header-image"
            data-parallax="true"
            style={{
              backgroundImage: `url(${contactbackground})`,
            }}
          ></div>
          <div className="contact__container" data-aos="zoom-in">
            <p className="contact-head">Get In Touch</p>

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: "3rem" }} className="container">
        <div className="button-container">
          <a
            id="insta"
            className="  btn-round-corner  "
            href="https://instagram.com/_kushwaha_shashank_"
            data-tooltip-content="Follow me on Instagram"
            rel="noreferrer"
            target="_blank"
          >
            <BsInstagram
              style={{ fontSize: "1.5rem" }}
              className="social-btn-icon insta"
            />
          </a>

          <a
            id="link"
            className="btn-round"
            href="https://www.linkedin.com/in/kushwahashashank/"
            data-tooltip-content="Connect with me on LinkedIn"
            rel="noreferrer"
            target="_blank"
          >
            <TfiLinkedin className="btn-icon" />
          </a>
          <a
            id="what"
            className="btn-round-corner"
            data-tooltip-content="Send me a message !"
            href="https://wa.me/+918081637834"
            rel="noreferrer"
            target="_blank"
          >
            <RiWhatsappFill
              style={{ fontSize: "1.7rem" }}
              className="social-btn-icon whatsapp"
            />
          </a>
          <Tooltip
            anchorId="insta"
            style={{
              maxWidth: "10rem",
              textAlign: "center",
            }}
          />
          <Tooltip
            anchorId="link"
            style={{
              maxWidth: "10rem",
              textAlign: "center",
            }}
            variant="info"
          />
          <Tooltip
            anchorId="what"
            style={{
              maxWidth: "10rem",
              textAlign: "center",
            }}
          />
        </div>
      </div>
      <div className="last-name">Abhishek Kushwaha</div>
    </>
  );
}

export default Home;
