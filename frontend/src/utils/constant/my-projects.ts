export interface IProject {
  imageUrl: string
  title: string
  description: string
  rating: number
  demoUrl: string
  sourceCodeUrl: string
  tags: string[]
}

export const myProjects: IProject[] = [
  {
    imageUrl: 'https://utfs.io/f/b8da1e05-ea64-4ae8-a309-e45baac19f12-1d.webp',
    title: 'MSI Tech Company Design',
    description:
      'This site was crafted using Next.js, TypeScript, and Tailwind CSS to build an e-commerce platform specializing in devices like computers and laptops. It focuses solely on design and lacks additional functionality',
    rating: 4,
    demoUrl: 'https://tech-online-store.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/tech-online-store',
    tags: ['next.js', 'typescript', 'tailwindcss', 'ecommerce-website', 'daisyui']
  },
  {
    imageUrl: 'https://utfs.io/f/6be0842f-4b22-4f44-b7ea-fce5e53e75bd-1e.webp',
    title: 'Wigs ECommerce Design',
    description:
      "This site has been redesigned using Next.js, TypeScript, and Tailwind CSS. The redesign process is informed by Figma's design references and is reflected in the source code",
    rating: 3,
    demoUrl: 'https://wigs-ecommerce-ui.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/wigs-ecommerce-ui',
    tags: ['next.js', 'typescript', 'tailwindcss', 'ecommerce']
  },
  {
    imageUrl: 'https://utfs.io/f/5d429dd5-cb02-4d36-a7a8-84d4a10b52c3-1f.webp',
    title: 'IPhone Notification Clone Redesign',
    description:
      'This site is built using Next.js and TypeScript, incorporating Tailwind CSS to redesign notifications in the style of iPhone 14',
    rating: 2,
    demoUrl: 'https://iphone-notification-clone.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/iphone-notification-clone',
    tags: ['next.js', 'typescript', 'tailwindcss']
  },
  {
    imageUrl: 'https://utfs.io/f/09473da9-09a4-4df0-8bd8-4016bac970a1-1g.webp',
    title: 'Smart Watch ECommerce Design',
    description:
      'This site is developed using Next.js and TypeScript, enhanced with Tailwind CSS. I drew inspiration from Figma, recreating the design in practice to master Tailwind CSS',
    rating: 4,
    demoUrl: 'https://smart-watch-ecommerce.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/smart-watch-ecommerce',
    tags: ['next.js', 'typescript', 'tailwindcss']
  },
  {
    imageUrl: 'https://utfs.io/f/c56302d1-f32b-4253-985f-12f4e489f251-1h.webp',
    title: 'Stat Preview Card Component Challenge',
    description:
      'This site is built using Next.js and Tailwind CSS, specifically for the Tailwind CSS card component stats preview challenge on the main site. This project aims to enhance my skills in React and Tailwind CSS.',
    rating: 2,
    demoUrl: 'https://challenge-stats-preview-card-five.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/challenge-stats-preview-card',
    tags: ['next.js', 'typescript', 'tailwindcss']
  },
  {
    imageUrl: 'https://utfs.io/f/f983e77f-cc30-406c-9efe-7c932263551a-1i.webp',
    title: 'Google 2 Search Engine Redesign',
    description:
      'This project is developed using Next.js and Tailwind CSS, incorporating the Google Search API to seamlessly integrate the Google search engine, providing an amazing user experience',
    rating: 4,
    demoUrl: 'https://google-2-search-engine-acatzk.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/google-2-search-engine',
    tags: ['next.js', 'typescript', 'tailwindcss', 'react.js', 'vercel', 'google-search-api']
  },
  {
    imageUrl: 'https://utfs.io/f/3077625e-27dd-4086-8674-2aa2f5c01342-1j.webp',
    title: 'Messenger Redesign',
    description:
      'This project is built with Next.js and Tailwind CSS, focusing on redesigning Facebook Messenger. Through this, I gained expertise in layout design and implementing scroll functionality across various sections.',
    rating: 3,
    demoUrl: 'https://messenger-ui-git-master-acatzk.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/messenger-ui',
    tags: ['next.js', 'typescript', 'tailwindcss', 'vercel']
  },
  {
    imageUrl: 'https://utfs.io/f/b4101449-4dd4-4eef-be14-4ee4b290261f-1k.webp',
    title: 'My First Portfolio Site',
    description:
      'This site is constructed using Next.js, TypeScript, and Tailwind CSS, with a backend powered by Hasura GraphQL. I integrated it to enable interactions like viewing and commenting on my projects. As the previous backend is unavailable, I created a new one entirely for this static site.',
    rating: 4,
    demoUrl: 'https://joshuagalit-com.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/joshuagalit',
    tags: [
      'next.js',
      'typescript',
      'tailwindcss',
      'vercel',
      'messenger-chatbots',
      'hasura-graphql',
      'nhost'
    ]
  },
  {
    imageUrl: 'https://utfs.io/f/50a85de0-444b-4824-b3a0-7091c377f75b-1l.webp',
    title: 'My Osomware Company',
    description:
      "This site is built using Next.js and Tailwind CSS, inspired by my startup venture with my partner Veoscript. We aim to launch it in the future, shaping our vision for the company's online presence",
    rating: 5,
    demoUrl: 'https://osomware.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/osomware',
    tags: ['next.js', 'typescript', 'tailwindcss', 'yarn', 'react.js']
  },
  {
    imageUrl: 'https://utfs.io/f/578d7fa7-4703-4bd8-baf6-4f3b02fd3267-17j.webp',
    title: 'Forum Site For Developer',
    description:
      'This project is developed using Next.js, TypeScript, and Tailwind CSS, with Hasura GraphQL serving as the backend. Its purpose is to create a forum for discussions similar to Stack Overflow, providing a platform for engaging and informative conversations.',
    rating: 5,
    demoUrl: 'https://forum-git-master-acatzk.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/forum',
    tags: ['next.js', 'typescript', 'tailwindcss', 'yarn', 'react.js', 'hasura-graphql', 'vercel']
  },
  {
    imageUrl: 'https://utfs.io/f/add799ab-3d95-40a4-a26e-d31050e35776-17k.webp',
    title: 'Twitch Clone',
    description:
      'This project is crafted using Nuxt.js, a Vue.js framework, and Tailwind CSS. I meticulously re-created the Twitch site, incorporating various packages, including a 3D carousel. This effort resulted in an impressive and exact replica of the Twitch homepage, enhancing my skills and knowledge.',
    rating: 4,
    demoUrl: 'https://twitch-acatzk.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/twitch',
    tags: ['vuejs', 'nuxtjs', 'tailwindcss']
  },
  {
    imageUrl: 'https://utfs.io/f/56789161-78a2-4ff2-8429-324d163eddc4-17l.webp',
    title: 'Instagram Clone',
    description:
      'This project is developed using Nuxt.js, a Vue.js framework, and Tailwind CSS. I meticulously redesigned the Instagram UI, aiming to replicate its appearance precisely. This endeavor allowed me to gain valuable insights into the nuances of design, enhancing my skills from a visual perspective.',
    rating: 4,
    demoUrl: 'https://instagram-ui-acatzk.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/instagram-ui',
    tags: ['vuejs', 'nuxtjs', 'tailwindcss']
  },
  {
    imageUrl: 'https://utfs.io/f/23b57425-3c64-4626-b85d-1ad5914be218-17m.webp',
    title: 'SLSU Freedom Wall',
    description:
      'This application is developed using Vue.js, Hasura GraphQL, Firebase, and Docker. Its sole purpose is to enable SLSU students to post on and comment within the SLSU freedom wall, fostering a platform for free expression and interaction.',
    rating: 3,
    demoUrl: 'https://github.com/acatzk/slsu-freedomwall',
    sourceCodeUrl: 'https://github.com/acatzk/slsu-freedomwall',
    tags: [
      'vuejs',
      'graphql',
      'docker',
      'firebase',
      'docker-compose',
      'firebase-authentication',
      'hasura-graphql-engine',
      'vercel'
    ]
  },
  {
    imageUrl: 'https://utfs.io/f/f6bde44a-c3bd-42bb-8e2d-373a08488c06-17n.webp',
    title: 'Josom Software Inc.',
    description:
      'This marks my second venture in founding a software company for startups. The platform is crafted using Vue.js, coupled with dynamic animations through AOS. Every essential section detailing the company and startup explanation has been meticulously included, ensuring a comprehensive overview of the venture.',
    rating: 5,
    demoUrl: 'https://josom-software-inc.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/josom-software-inc',
    tags: ['vuejs', 'vuetify', 'aos', 'vercel']
  },
  {
    imageUrl: 'https://utfs.io/f/b97a5c88-35bd-4f65-96ea-81649b2bed44-17o.webp',
    title: 'Twitter Clone With Functionality',
    description:
      'This serves as my second endeavor in crafting a Twitter clone, meticulously developed using Vue.js and enhanced with Tailwind CSS. Although the platform enables users to post content, it operates in a static manner, lacking integration with any backend technologies for dynamic functionality.',
    rating: 2,
    demoUrl: 'https://vue-twitter-clone-md4dyey9g.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/vue-twitter-clone',
    tags: ['vuejs', 'vuetify', 'vercel']
  },
  {
    imageUrl: 'https://utfs.io/f/c65b61da-8f8f-44eb-9cc4-df4ac8c7435e-17p.webp',
    title: 'Jerome Villaruel Freedom Wall',
    description:
      'Presenting the official website of my friend, Veoscript, where the spotlight is on his freedom wall. This unique feature is meticulously crafted using Hasura GraphQL and Vue.js. Throughout the development journey, we gained extensive knowledge and valuable insights, enriching our experience in the process.',
    rating: 4,
    demoUrl: 'https://jeromevillaruel.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/jeromevillaruel-official',
    tags: ['vue', 'javascript', 'css', 'html']
  },
  {
    imageUrl: 'https://utfs.io/f/66026526-5078-4aa9-9890-ada998640746-18f.webp',
    title: 'Daily Time Record (College Days)',
    description:
      'During my college years, I undertook a project employing VB.net and MySQL as the backend, enhanced by Bunifu framework for its design aesthetics. The primary focus was on creating a system to record daily attendance, complete with a teacher management system and a daily time record (DTR) feature. Each user, under administrative privileges, could generate monthly DTR reports, streamlining the entire process efficiently.',
    rating: 4,
    demoUrl: '',
    sourceCodeUrl: 'https://github.com/acatzk/dti-dotnet',
    tags: ['dotnet', 'visual basic', 'college']
  },
  {
    imageUrl: 'https://utfs.io/f/66fb293f-d991-4859-87e8-96dea1e8f919-18h.webp',
    title: 'Outdoor Activity Lading Page Design',
    description:
      'This landing page is a manual creation, skillfully crafted using HTML and CSS. Its purpose is purely educational, aiming to provide hands-on experience in mastering grid and flexbox layouts within CSS.',
    rating: 2,
    demoUrl: 'https://oa-lp.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/oa-lp',
    tags: ['html', 'javascript', 'css']
  },
  {
    imageUrl: 'https://utfs.io/f/5d98b08c-a49b-41a2-b320-dfe8ec3b3523-18j.webp',
    title: 'Twitter Clone with Vuetify',
    description:
      'This website is developed using Vuetify design, powered by Hasura GraphQL in the backend API. Leveraging the robustness of Firebase, the project integrates Firebase Authentication for secure user access and Firebase Storage to efficiently manage and store images.',
    rating: 3,
    demoUrl: 'https://vue-twitter-acatzk.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/vue-twitter',
    tags: ['firebase', 'vuejs', 'firebase-authentication', 'vuetify', 'hasura-graphql']
  },
  {
    imageUrl: 'https://utfs.io/f/63b9a082-2d7f-4bea-b32a-258967bc778f-18k.webp',
    title: 'ESL Learning Admin',
    description:
      'Introducing an innovative Airclass Solution Company facilitating global English language education for students worldwide. This exclusive administrator private website is meticulously crafted using Vue.js, Firebase, Firebase Authentication, Hasura, and Vuetify, ensuring seamless user experiences and efficient language learning opportunities.',
    rating: 3,
    demoUrl: 'https://esl-learning-admin.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/esl-learning-admin',
    tags: ['firebase', 'vuejs', 'firebase-authentication', 'hasura', 'vuetify', 'hasura-graphql']
  },
  {
    imageUrl: 'https://utfs.io/f/1a02a579-f0fd-44be-be48-de666d3fc4de-18m.PNG',
    title: 'Gewgew Social Network',
    description:
      "Introducing my inaugural social media platform, affectionately named 'gewgew' after my dear friend's nickname, whom I deeply admire. This creation holds sentimental value, serving as a tribute to cherished moments in life. A heartfelt thank you accompanies this endeavor, capturing the essence of reminiscence and gratitude.",
    rating: 3,
    demoUrl: 'https://gewgew.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/gewgew',
    tags: [
      'social-media',
      'typescript',
      'serverless',
      'reactjs',
      'nextjs',
      'tailwindcss',
      'hasura-graphql-engine',
      'vercel',
      'nhost'
    ]
  },
  {
    imageUrl: 'https://utfs.io/f/1684dee1-26fe-4b22-b322-860195854b47-18n.PNG',
    title: 'Yoga Yola',
    description:
      'This website, discovered through YouTube, has been an invaluable resource, enhancing my knowledge of animation techniques and timing. It provided fundamental insights into color grading and the intricacies of the design process, significantly enriching my skillset.',
    rating: 5,
    demoUrl: 'https://yoga-yola.vercel.app/',
    sourceCodeUrl: 'https://github.com/acatzk/yoga-yola',
    tags: ['nextjs', 'tailwindcss', 'reactjs', 'aos-animation']
  }
]
