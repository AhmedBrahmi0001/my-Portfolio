import HarvardImage from "../assets/png/Harvard.jpeg";
import CourseraImage from "../assets/png/coursera.png";
import OpenClassroomsImage from "../assets/png/openclassroom.png";

export const achievementData = {
  bio: "Putting quantified achievements on a resume is great, but I just don’t work with hard numbers. I have no data to support the quality of my work. If you have lots of relevant experience, the heading statement of your resume will be a summary.",
  achievements: [
    {
      id: 1,
      title: "OpenClassrooms certification",
      details:
        "Acquired full-stack skills through hands-on projects, including UI development, API integration, and Agile methodologies.",
      date: "Apr 20, 2022",
      field: "Web Development",
      image: OpenClassroomsImage,
    },
    {
      id: 2,
      title: " Coursera Certification",
      details:
        "Gained expertise in supervised/unsupervised learning, model optimization, and ML system design.",
      date: "jan 2, 2023",
      field: "Machine learning",
      image: CourseraImage,
    },
    {
      id: 3,
      title: "Harvard University (CS50) Certification",
      details:
        "Mastered full-stack development principles through Harvard's intensive CS50 program.",
      date: "jan 2, 2024",
      field: " Full-stack Development",
      image: HarvardImage,
    },
  ],
};

// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
