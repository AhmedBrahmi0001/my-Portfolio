import resume from "../assets/pdf/resume.pdf";
import ahmedImage from "../assets/png/ahmed.jpg";
export const headerData = {
  name: "Ahmed Brahmi",
  title: "Full-Stack Developer",
  desciption:
    "Web and Mobile Developer with 1 year of experience in building scalable, secure applications. Passionate about real-time systems, UX, and authentication. Problem-solver focused on performance, security, and delivering innovative solutions.",
  image: ahmedImage,
  imageStyle: {
    transform: "translateX(10px)",
    transition: "transform 0.3s ease-in-out",
  },
  resumePdf: resume,
};
<img src={headerData.image} alt="Ahmed Brahmi" style={headerData.imageStyle} />;
