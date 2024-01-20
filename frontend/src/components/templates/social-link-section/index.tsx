import React from 'react'

import { cn } from '~/utils/cn'
import { socialLinks } from '~/utils/constant/socialLinks'

export default function SocialLinkSection(): JSX.Element {
  return (
    <section
      className="section mt-24 grid grid-cols-2 gap-4 px-4 py-4 sm:mt-8 sm:grid-cols-4"
      data-aos="fade-up"
      data-aos-delay="800"
      data-aos-duration="1500"
    >
      {socialLinks.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noreferrer">
          <img
            src={social.imageUrl}
            className={cn(
              'scale-75 opacity-30 grayscale transition-all duration-200',
              'hover:opacity-100 hover:grayscale-0 dark:opacity-100 dark:grayscale-0'
            )}
            alt={social.alt}
          />
        </a>
      ))}
    </section>
  )
}
