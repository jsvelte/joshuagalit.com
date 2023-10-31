export type Testimony = {
  profileImageUrl: string
  name: string
  text: string
  position: string
  companyImageUrl: string
}

export const testimonials: Testimony[] = [
  {
    profileImageUrl: '/images/testimonials/jerome-joseph-villaruel.png',
    name: 'Jerome Joseph Villaruel',
    text: `
      I've had the pleasure of working closely with my friend, Joshua, for several years in the software development industry, and I can confidently say that he is an exceptional software developer. His expertise in full stack development is truly impressive. Joshua has an in-depth knowledge of a wide range of technologies, including NextJS, Tailwindcss, Prisma, GraphQL and NestJS.
      <br />
      <br />
      In summary, Joshua is a highly skilled and dedicated software developer with a wealth of experience in full stack development. His expertise in NextJS, Tailwindcss, Prisma, GraphQL and NestJS is invaluable to any project, and his professionalism and teamwork make him a true asset to any software development team. I feel fortunate to have had the opportunity to work alongside him, and I have no doubt that he will continue to excel in his career.
    `,
    position: 'Fullstack/Mobile Developer at Halcyon Agine Company',
    companyImageUrl: '/images/company/halcyon.png'
  },
  {
    profileImageUrl: '/images/testimonials/john-paul-banera.png',
    name: 'John Paul Banera',
    text: `
      I had the pleasure of working closely with Joshua, a highly reliable and skillful frontend developer with a keen eye for design. His proficiency in technologies like Next.js, TypeScript, React.js, and Tailwind CSS is impressive, and he consistently delivers outstanding results. Joshua's adaptability, fast learning, and commitment to exceeding expectations make him a high performer in our company.
      <br />
      <br />
      It has been a privilege collaborating with him, and I wholeheartedly recommend him for any project or role where excellence is required.
    `,
    position: 'Fullstack Developer at Sun Asterisk Philippines',
    companyImageUrl: '/images/company/sun-asterisk.png'
  },
  {
    profileImageUrl: '/images/testimonials/rogelio-john-oliverio.png',
    name: 'Rogelio John Oliverio',
    text: `
      Sir Joshua's development skills are truly exceptional, as he consistently delivers pixel-perfect designs and flawless user interfaces. After having the pleasure to work with him in the same company and in some projects, I can say that his proficiency in his current tech stack combination ensures that every project he undertakes is not only visually stunning but also highly functional and responsive.
      <br />
      <br />
      I wholeheartedly recommend him for your web development and business digitalization needs.
    `,
    position: 'Fullstack Developer at Sun Asterisk Philippines',
    companyImageUrl: '/images/company/sun-asterisk.png'
  },
  {
    profileImageUrl: '/images/testimonials/nilo-castillano-jr.png',
    name: 'Nilo Castillano Jr.',
    text: `
      It has been a pleasure working alongside Joshua for more than a year, during which I've had the privilege of observing his outstanding proficiency in frontend development. Joshua stands out for his ability to build strong relationships with colleagues, his approachable demeanor, and his consistent contributions of valuable insights during our scrum meetings. He is unquestionably a dedicated team player, and the excellence of his work underscores his profound expertise across a wide range of technology stacks.
      <br />
      <br />
      I wholeheartedly recommend Joshua, and I am confident that he will prove to be a valuable addition to your company as well.
    `,
    position: 'Web Developer at Sun Asterisk Philippines',
    companyImageUrl: '/images/company/sun-asterisk.png'
  }
]
