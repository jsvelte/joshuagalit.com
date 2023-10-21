import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import { testimonials } from '~/utils/constant/testimonials'
import SectionTitle from '~/components/molecules/section-title'
import TestimonialCard from '~/components/molecules/testimonial-card'

const TestimonialSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <div
      id="testimonial"
      className="bg-section py-12 transition-colors duration-1000 dark:bg-dark-section"
    >
      <div className="mx-auto mt-14 max-w-6xl px-4 py-4">
        <div className="flex justify-center" data-aos="fade-down" data-aos-delay="200">
          <SectionTitle title="What People Say" />
        </div>

        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mt-8 px-8 py-28"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {testimonials.map((testimony, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                {...{
                  testimony
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TestimonialSection
