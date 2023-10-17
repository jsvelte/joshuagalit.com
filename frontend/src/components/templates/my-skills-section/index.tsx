import React, { FC } from 'react'

import { myskills } from '~/utils/constant/my-skills'
import { Separator } from '~/components/atoms/separator'
import SkillCard from '~/components/molecules/skill-card'
import SectionTitle from '~/components/molecules/section-title'

const MySkillsSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <div id="my-skills">
      <div className="mx-auto w-full max-w-2xl">
        <Separator />
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-32">
        {/* Title */}
        <div className="flex justify-center" data-aos="fade-down" data-aos-delay="200">
          <SectionTitle title="My Skills" />
        </div>
        {/* Content */}
        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {myskills.map((skill, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={skill.delay}>
              <SkillCard
                {...{
                  image: skill.image,
                  title: skill.title,
                  delay: skill.delay
                }}
              />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay={2000}>
          <a
            href="#my-skills"
            className="text-sm text-slate-400 hover:underline dark:text-slate-300"
          >
            Show more
          </a>
        </div>
      </div>
    </div>
  )
}

export default MySkillsSection
