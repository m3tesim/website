import Udacity from "../assets/udacity.jpg";

function MySkills(props) {
  const { visibility, myRef } = props;

  return (
    <section ref={myRef} id="my-skills" className={`container section `}>
      <div>
        <h1 className={`colored-font big-font ${visibility ? "animate" : ""}`}>
          My Skills ,,
        </h1>
        <br />
        <br />
        <p className={` textRise ${visibility ? "animate2" : ""}`}>
          <span className="html-tag">{"<li>"}</span>
          After graduation from CS Department, I had a passion for art, so I‘ve
          acquired skills in graphic design,
          <span className="colored-font">UI /UX,</span>
          and illustrations, using tools like Adobe illustrator, Photoshop and
          <span className="colored-font">Adobe Xd,Figma</span>
          <span className="html-tag">{"</li>"}</span>
        </p>
        <br />

        <p className={` textRise ${visibility ? "animate2" : ""}`}>
          <span className="html-tag">{"<li>"}</span>
          Then I’ve decided to focus on a CS career as Front end Developer, so
          I’ve mastered
          <span className="colored-font"> javascript, HTML5, CSS3</span> and
          followed it with modern technologies like
          <span className="colored-font"> React, Redux,</span> and finally
          management tools like Git&github, web pack and Sass
          <span className="html-tag">{"</li>"}</span>
        </p>
      </div>
      <div className="display-column ">
        <section
          className={` skills textRise2 ${visibility ? "animate2" : ""}`}
        >
          <div className="skill"> Front End (ES6 ,HTML5 ,Css3)</div>
          <div id="skill-one"></div>

          <div className="skill">React JS</div>
          <div id="skill-two"></div>

          <div className="skill">UI /UX Design</div>
          <div id="skill-three"></div>
        </section>
        <div
          id="Certifications"
          className={`  textRise2 ${visibility ? "animate2" : ""}`}
        >
          <h5 className="big-font">Certifications</h5>

          <div className="display-row">
            <div>
              <img src={Udacity} className="icon-image" alt="udacity logo" />
            </div>
            <div>
              <a
                href="https://graduation.udacity.com/confirm/TKSSDNHE"
                target="_blank"
                rel="noreferrer"
              >
                Advanced Front-end Development (React & Redux )
              </a>
              <br />
              <a
                href="https://graduation.udacity.com/confirm/KPALHPQZ"
                target="_blank"
                rel="noreferrer"
              >
                Front End Web Development Professional
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
