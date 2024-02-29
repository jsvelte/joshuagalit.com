import Image from 'next/image'
import { Play } from 'lucide-react'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

import { SectionTitle } from '~/components/molecules/section-title'

export default function AboutSection(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleOpenVideo = (): void => {
    setOpen(!isOpen)
  }

  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        <div className="relative flex items-center justify-center" data-aos="fade-up">
          <Image
            src="/images/about/2.webp"
            width={390}
            height={390}
            className="rounded-lg"
            priority
            alt=""
          />
          {/* play btn */}
          <div
            role="button"
            onClick={handleOpenVideo}
            className="absolute cursor-pointer rounded-full bg-blue-500 p-7 text-6xl transition hover:scale-110 lg:text-[120px]"
          >
            <Play className="h-8 w-8 stroke-none" fill="#fff" absoluteStrokeWidth />
          </div>
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

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="uZdv-TtiMkg"
        onClose={handleOpenVideo}
      />
    </section>
  )
}
