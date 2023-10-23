import React, { FC } from 'react'
import { Button } from '~/components/atoms/button'
import SectionTitle from '~/components/molecules/section-title'
import { cn } from '~/utils/cn'

const ContactSection: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <section id="contact" className="section">
      <div
        className="flex min-h-[600px] flex-col bg-contact bg-cover bg-no-repeat py-24 dark:bg-none lg:flex-row lg:gap-x-[74px]"
        data-aos="zoom"
        data-aos-offset="400"
      >
        {/* text */}
        <div
          className="flex flex-1 flex-col justify-center pl-24"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-offset="300"
        >
          <div>
            <SectionTitle title="Contact Me" />
          </div>
          <p className="section-p mt-4 max-w-xs">
            Send me a message and I will get back to you within 24 hours.
          </p>
        </div>
        {/* form */}
        <form
          className={cn(
            'flex max-h-[500px] flex-1 flex-col gap-y-5 rounded-[20px] border border-slate-200',
            'bg-white p-5 text-white shadow-md shadow-slate-200 dark:border-slate-700',
            'dark:bg-slate-900 dark:shadow-slate-700 lg:-mt-20'
          )}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="500"
        >
          <input
            className="form-control"
            placeholder="First name"
            required
            name="user_firstname"
            type="text"
          />
          <input
            className="form-control"
            placeholder="Last name"
            required
            name="user_lastname"
            type="text"
          />
          <input className="form-control" placeholder="Email" required name="email" type="email" />
          <textarea
            name="message"
            id=""
            cols={30}
            rows={10}
            className="form-control h-[165px] resize-none py-5"
            placeholder="Message"
          ></textarea>
          <div className="ml-auto">
            <Button variant="primary" className="mt-auto block rounded-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
