import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import { testimonials } from '~/utils/constant/testimonials'
import SectionTitle from '~/components/molecules/section-title'
import TestimonialCard from '~/components/molecules/testimonial-card'

const TestimonialSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section id="testimonial" className="section-block transition-colors duration-700">
      <div className="section">
        <div className="flex justify-center" data-aos="fade-down" data-aos-delay="200">
          <SectionTitle title="What People Say" />
        </div>

        <Swiper
          pagination={{
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mt-32 overflow-visible px-8 py-8"
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
    </section>
  )
}

export default TestimonialSection
