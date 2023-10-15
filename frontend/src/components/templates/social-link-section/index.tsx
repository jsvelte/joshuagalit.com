import React, { FC } from 'react'
import { cn } from '~/utils/cn'

const SocialLinkSection: FC<Record<string, unknown>> = (props): JSX.Element => {
  const linkStyle = cn(
    'scale-75 opacity-30 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 dark:opacity-100 dark:grayscale-0'
  )
  return (
    <section
      className="mx-auto mt-24 flex max-w-6xl items-center justify-between gap-x-4 px-4 py-4 sm:mt-8"
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="1500"
    >
      <a href="https://github.com/acatzk" target="_blank" rel="noreferrer">
        <img src="/images/social-links/github.png" className={linkStyle} alt="" />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01c374b0ac56c357aek"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/social-links/upwork.png" className={linkStyle} alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/joshua-galit-7b6b84200/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/social-links/linkedin.png" className={linkStyle} alt="" />
      </a>
      <a
        href="https://stackoverflow.com/users/14108225/joshua-galit"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/social-links/stackoverflow.png" className={linkStyle} alt="" />
      </a>
    </section>
  )
}

export default SocialLinkSection
