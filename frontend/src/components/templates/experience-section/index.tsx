import React, { useState } from 'react'

import { experiences } from '~/utils/constant/experiences'
import { SectionTitle } from '~/components/molecules/section-title'
import { ExperienceTimeLine } from '~/components/molecules/experience-timeline'

export default function ExperienceSection(): JSX.Element {
  const [showAllExperiences, setShowAllExperiences] = useState(true)

  const visibleExperiences = showAllExperiences ? experiences : experiences.slice(0, 2)

  return (
    <section id="experience" className="section">
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
              data-aos="fade-up"
              data-aos-delay="200"
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
    </section>
  )
}
