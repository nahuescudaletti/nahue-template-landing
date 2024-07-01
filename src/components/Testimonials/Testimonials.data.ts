import { getBasePath } from "@/utils/utils";

export const dataTestimonials = [
  {
    avatarImg: `${getBasePath()}/assets/perfil_example.jpeg`,
    name: "Daniel Clifford",
    heading:
      "I received a job offer mid-course, and the subjects I learned were current.",
    description:
      "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.",
    bgColor: "rgba(255, 255, 255, 0.1)", // Naranja
    textColor: "rgba(255,255, 255, 1)", // Negro para contraste con naranja
    className: "md:col-span-2",
  },
  {
    avatarImg: `${getBasePath()}/assets/perfil_example.jpeg`,
    name: "Jonathan Walters",
    heading: "The team was very supportive and kept me motivated",
    description:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
    bgColor: "rgba(255, 255, 255, 0.1)", // Cian
    textColor: "rgba(255, 255, 255, 1)", // Negro para contraste con cian
    className: "",
  },
  {
    avatarImg: `${getBasePath()}/assets/perfil_example.jpeg`,
    name: "Kira Whittle",
    heading: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say ",
    bgColor: "rgba(255, 255, 255, 0.1)", // Cian más oscuro
    textColor: "rgba(255, 255, 255, 1)", // Blanco para contraste con cian
    className: "md:row-span-2",
  },
  {
    avatarImg: `${getBasePath()}/assets/perfil_example.jpeg`,
    name: "Jeanette Harmon",
    heading: "An overall wonderful and rewarding experience",
    description:
      "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
    bgColor: "rgba(255, 255, 255, 0.1)", // Naranja suave
    textColor: "rgba(255, 255, 255, 1)", // Negro para contraste con naranja
    className: "",
  },
  {
    avatarImg: `${getBasePath()}/assets/perfil_example.jpeg`,
    name: "Kira Whittle",
    heading: "Such a life-changing experience. Highly recommended!",
    description:
      "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say ",
    bgColor: "rgba(255, 255, 255, 0.1)", // Cian más oscuro (repetido)
    textColor: "rgba(255, 255, 255, 1)", // Blanco para contraste con cian (repetido)
    className: "md:row-span-2",
  },
];
