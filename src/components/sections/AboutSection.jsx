import PersonalImage from "../../assets/Personal.jpg";

const AboutSection = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex h-full w-2/3 flex-col items-start justify-center gap-4">
      <h1 className="text-6xl">Who am I?</h1>
      <p className="text-base">
        As a Computer Science student graduating in August 2025, I specialize in Frontend
        development for web and mobile platforms, with strong expertise in ReactJS. I also have
        experience in backend development using Python, Flask, and Node.js, enabling me to build
        robust, full-stack applications. For my final-year project, I developed a machine
        learning-powered trading system, blending my passion for innovative technologies with
        practical problem-solving. I’m excited to create user-focused, impactful solutions and am
        eager to contribute to cutting-edge projects.
      </p>
    </div>
    <div className="flex size-30 items-center justify-center">
      <img
        className="aspect-square rounded-full border-1 object-cover"
        src={PersonalImage}
        alt="A picture of me"
      />
    </div>
  </div>
);

export default AboutSection;
