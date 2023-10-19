export type Company = {
  name: string
  image: string
  position: string
}

export type Experience = {
  id: number
  jobTitle: string
  company: Company
  description: string
  yearFrom: number
  yearTo: number
  delay: number
}

export const experiences: Experience[] = [
  {
    id: 1,
    jobTitle: 'Jr. Web Developer',
    company: {
      name: 'Sun Asterisk Philippines',
      image: '/images/experience/sun-asterisk.png',
      position: 'Full Time'
    },
    description: `
      I worked as a Jr. Web Developer at Sun Asterisk Philippines from July 2022 to October
      2023. During this time, I learned a lot about building websites.
      <br />
      <br />I focused on two main areas: frontend (the part of the website users see) and
      backend (the behind-the-scenes technology). For the frontend, I became skilled in
      using Next.js and TypeScript. On the backend, I worked with various technologies like
      Laravel API, Nest.js, Dotnet GraphQL and Ruby on Rails.
      <br />
      <br />I also became experienced in deploying websites using services like AWS Fargate,
      Amplify, and Vercel. Additionally, I took care of maintaining the websites, making
      sure they worked well and looked good on different devices and browsers. I also became
      good at testing the websites to ensure they worked perfectly.
      <br />
      <br />
      My main expertise is in creating the visual part of websites using React and Tailwind
      CSS, but I&apos;m also comfortable working with different backend technologies. My time at
      Sun Asterisk taught me a lot about building websites from start to finish, and I&apos;m
      excited to bring this knowledge to new projects.
    `,
    yearFrom: 2022,
    yearTo: 2023,
    delay: 100
  },
  {
    id: 2,
    jobTitle: 'Freelance Video Editor',
    company: {
      name: 'Upwork',
      image: '/images/experience/upwork.png',
      position: 'Freelancer'
    },
    description: `
      I freelanced with my friend from September 2020 to July 2022, exclusively using Premiere Pro as my video editing platform. My friend, a top-rated video editor on Upwork, hired us to collaborate on projects with international clients.
      <br />
      <br />
      We created diverse content, from motivational videos to topic-based content. Some of the videos I crafted for his channel reached millions of views, which filled me with pride.
      <br />
      <br />
      Working closely with clients and using my skills in Premiere Pro was a fulfilling experience during my freelancing journey.
    `,
    yearFrom: 2020,
    yearTo: 2022,
    delay: 150
  },
  {
    id: 3,
    jobTitle: 'Data Encoder',
    company: {
      name: 'Conversion Technologies, Inc. - ZM (CTI-ZM)',
      image: '/images/experience/cti-zm.png',
      position: 'Contractual'
    },
    description: `
      After graduating from college, I worked in Manila as a Data Encoder from August 2019 to September 2020. In this role, I focused on entering data accurately and efficiently, typing at a speed of more than 80 words per minute.
      <br />
      <br />
      I paid close attention to details and maintained a high accuracy rate of 95%. This experience honed my skills in fast and precise data entry, making me adept at handling large volumes of information with meticulous care.
    `,
    yearFrom: 2019,
    yearTo: 2020,
    delay: 200
  },
  {
    id: 4,
    jobTitle: 'Technical Support Engineer',
    company: {
      name: 'Northgate Technologies, Inc.',
      image: '/images/experience/northgate.png',
      position: 'Internship'
    },
    description: `
      I completed an internship at Northgate Technologies, Inc. in Makati City as a Technical Support Engineer from July 2018 to February 2019.
      <br />
      <br />
      During this period, I provided on-site technical support, handling tasks such as computer repair, setup, replacement of items, operating system installation, computer assembly and disassembly, and antivirus installation for our partnered clients. This experience significantly enhanced my technical skills in both computer hardware and networking.
    `,
    yearFrom: 2018,
    yearTo: 2019,
    delay: 250
  }
]
