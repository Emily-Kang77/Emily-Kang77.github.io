// import MediaDashImage from '../assets/MediaDash.png';
// import SmartShareLogoImage from '../assets/SmartShareLogo.png';
// import SnowyVillageImage from '../assets/SnowyVillage.png';

/**
 * @interface Project
 * @property {string} name
 * @property {string} image
 * @property {string} description
 * @property {string} github
 * @property {string} link
 * @property {string[]} tech
 * @property {string} devpost
 */

export const projects = [

  {
    name: "MediaDash",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/MediaDash.png",
    description: `MediaDash lets you see all of your cross-platform recommendations and subscriptions in one app.
      This was made during a hackathon! See the full write-up in Github or Devpost.`,
    bold: "NextJS + TypeScript, Python + Flask, and Langchain.",
    github: "https://github.com/Emily-Kang77/Brainrot-MediaDash",
    link: "https://brainrot-media-dash.vercel.app/",
    tech: ['NextJS', 'TypeScript', 'Python', 'Flask'],
    devpost: "https://devpost.com/software/mediadash",
    height: "600px",
  },

  {
    name: "SmartShare",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/SmartShareLogo.png",
    description: `This is in development. It's a social media app for students
        on campus to exchange items and help each other out. I plan to finish up the MVP 
        and get user feedback soon, and I'm collaborating with a designer and PM.`,
    bold: "TypeScript, React, SQL",
    github: "https://github.com/SumanthBellam/Smart-Share.io",
    link: "",
    tech: ['TypeScript', 'React', 'SQL'],
    height: "500px",
  },

  {
    name: "Website for Snowy Village Cafe",
    image: "https://pfd-website-bucket.s3.us-west-2.amazonaws.com/assets/SnowyVillage.png",
    description: `This is a volunteer project and a demo for a local cafe. I made it with a team of 3 designers and 2 other developers 
      in a club called Web Impact.`,
    bold: "React, TypeScript, Vite.",
    github: "https://webimpactuw.github.io/snowy-village",
    link: "https://webimpactuw.github.io/snowy-village",
    tech: ['TypeScript', 'React'],
    height: "550px",
  },
]