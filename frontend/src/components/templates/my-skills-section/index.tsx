import React, { FC } from 'react'

import { myskills } from '~/utils/constant/my-skills'
import SkillCard from '~/components/molecules/skill-card'
import SectionTitle from '~/components/molecules/section-title'

const MySkillsSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section id="my-skills" className="section">
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
      <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay={2750}>
        <a href="#my-skills" className="text-sm text-slate-400 hover:underline dark:text-slate-300">
          Show more
        </a>
      </div>
    </section>
  )
}

export default MySkillsSection
