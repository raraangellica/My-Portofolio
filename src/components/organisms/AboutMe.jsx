import MySkills from "../molecules/MySkills.jsx";

const AboutMe = () => {
  return (
    <div id="about" className="aboutMeContainer  ">
      <div className="flex flex-col justify-center sm:gap-2 mx-50">
        <h3 className="textH3">About Me</h3>
        <p>
          I'm experienced in building applications web and skilled in HTML,
          CSS,Tailwind,Boostrap, Javascript, PHP, React,Typescipt,MySQL,
          NodeJs(Express.Js,Next.Js). A detail-person who enjoys learning new
          things and currently looking for new opportunity as an Full Stack
          Developer
        </p>
      </div>
      <div id="skills" className="textH3">
        <h3>My Skills</h3>
        <MySkills />
      </div>
    </div>
  );
};
export default AboutMe;
