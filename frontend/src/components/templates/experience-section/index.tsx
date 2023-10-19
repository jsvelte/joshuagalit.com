import React, { FC, useState } from 'react'

import { experiences } from '~/utils/constant/experiences'
import SectionTitle from '~/components/molecules/section-title'
import ExperienceTimeLine from '~/components/molecules/experience-timeline'

const ExperienceSection: FC<Record<string, unknown>> = (): JSX.Element => {
  const [showAllExperiences, setShowAllExperiences] = useState(true)

  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 2)

  return (
    <div id="experience">
      <div className="mx-auto w-full max-w-6xl px-4 py-32">
        {/* Title */}
        <div className="inline-flex justify-start" data-aos="fade-down" data-aos-delay="200">
          <SectionTitle title="Experience" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col space-y-4">
          {visibleExperiences.map((exp) => (
            <ExperienceTimeLine key={exp.id} exp={exp} />
          ))}
          {experiences.length > 2 && (
            <div className="flex w-full items-center justify-center py-6">
              <button
                type="button"
                className="cursor-pointer text-sm text-slate-400 hover:underline dark:text-slate-400"
                onClick={() => {
                  setShowAllExperiences(!showAllExperiences)
                }}
              >
                {showAllExperiences ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
