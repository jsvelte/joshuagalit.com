import Image from 'next/image'
import React, { FC } from 'react'

import SectionTitle from '~/components/molecules/section-title'

const AboutSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <div id="about" className="mx-auto w-full max-w-6xl px-4 py-32">
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
            <span className="font-bold text-sky-500">About</span>
            <SectionTitle title="Who Am I" />
          </div>
          <div className="mt-4" data-aos="fade-down" data-aos-delay="700">
            <p className="text-slate-600 dark:text-slate-300 md:text-lg">
              I&apos;m Josh, residing in the province of Bato, Leyte. With 2 years of freelancing
              experience in video editing and 1.4 years of full-time work as a web developer at Sun
              Asterisk Philippines, I possess expertise in Fullstack application development, web
              design, and video editing.
              <br />
              <br />I excel at working under pressure, am highly adaptable in various situations,
              and demonstrate flexibility in my job. Consider hiring me for your needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
