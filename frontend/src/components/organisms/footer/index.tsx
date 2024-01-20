import React from 'react'
import { Facebook, Linkedin } from 'lucide-react'

import { cn } from '~/utils/cn'
import { nunito } from '~/utils/font'

export const Footer = (): JSX.Element => {
  return (
    <footer data-aos="fade-up" data-aos-offset="0" className="mb-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
          {/* logo */}
          <a href="#" className="outline-indigo-500">
            <span className={cn(nunito.className, 'font-extrabold sm:text-xl')}>
              JoshG<span className="text-indigo-500">.</span>
            </span>
          </a>
          {/* copyright */}
          <p className="text-sm text-slate-500">&copy; 2023. All rights reserved.</p>
          {/* social icons */}
          <div className="flex gap-x-4 text-lg">
            <a
              href="https://www.facebook.com/acatzk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white p-3 shadow-lg transition-colors duration-700 hover:shadow-xl dark:bg-slate-800"
            >
              <span className="sr-only">Visit my Facebook profile</span>
              <Facebook fill="#6366f1" strokeWidth={0} />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-galit-7b6b84200/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white p-3 shadow-lg transition-colors duration-700 hover:shadow-xl dark:bg-slate-800"
            >
              <span className="sr-only">Visit my LinkedIn profile</span>
              <Linkedin fill="#6366f1" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
