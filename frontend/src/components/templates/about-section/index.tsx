import React from 'react'
import Image from 'next/image'

import { SectionTitle } from '~/components/molecules/section-title'

export default function AboutSection(): JSX.Element {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        <div className="flex items-center justify-center" data-aos="fade-up">
          <Image
            src="/images/about/1.png"
            width={390}
            height={390}
            className="rounded-full"
            priority
            alt=""
          />
        </div>
        <div>
          <div data-aos="fade-down" data-aos-delay="500">
            <span className="sub-title">About</span>
            <SectionTitle title="Who Am I" />
          </div>
          <div className="mt-4" data-aos="fade-down" data-aos-delay="700">
            <p className="section-p">
              I&apos;m Josh, currently based in the province of Leyte. With over 2 years of hands-on
              experience in web development, including 1+ year of freelancing, I bring a wealth of
              expertise to the table. I thrive in high-pressure environments, showcase adaptability
              in various situations, and exhibit flexibility in my role.
              <br />
              <br />
              If you&apos;re looking for a professional with a solid background in web development
              and a creative touch in video editing, consider me for your needs!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
