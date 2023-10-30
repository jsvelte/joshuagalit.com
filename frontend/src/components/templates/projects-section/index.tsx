import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'

import { myProjects } from '~/utils/constant/my-projects'
import useScreenCondition from '~/hooks/useScreenCondition'
import ProjectCard from '~/components/molecules/project-card'
import SectionTitle from '~/components/molecules/section-title'

const ProjectsSection: FC<Record<string, unknown>> = (): JSX.Element => {
  const isMediumScreen = useScreenCondition('(max-width: 768px)')

  return (
    <section id="projects" className="section-block transition-colors duration-700">
      <div className="mx-auto mt-14 max-w-6xl px-4 py-14">
        <div className="flex justify-center" data-aos="fade-down" data-aos-delay="200">
          <SectionTitle title="Projects" />
        </div>
        <p
          className="section-p mt-10 px-4 sm:px-14 md:px-32"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          These projects highlight my diverse skills in company, personal, and freelance endeavors.
          They embody my expertise and passion developed over my career.
        </p>
      </div>
      <div className="mx-auto w-full max-w-6xl p-4" data-aos="fade-up" data-aos-delay={600}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMediumScreen ? 1 : 3}
          modules={[EffectCoverflow, Pagination]}
        >
          {myProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                {...{
                  project
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ProjectsSection
