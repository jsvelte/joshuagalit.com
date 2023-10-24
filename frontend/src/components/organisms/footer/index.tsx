import React, { FC } from 'react'
import { Facebook, Linkedin } from 'lucide-react'

import { cn } from '~/utils/cn'
import { nunito } from '~/utils/font'

const Footer: FC<Record<string, unknown>> = (): JSX.Element => {
  return (
    <footer data-aos="fade-up" data-aos-offset="0">
      <div className="mx-auto w-full max-w-6xl px-4 pb-10">
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
          <div className="text-orange flex gap-x-4 text-lg">
            <a
              href="https://www.facebook.com/acatzk"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white p-3 shadow-lg transition-colors duration-1000 hover:shadow-xl dark:bg-slate-800"
            >
              <Facebook fill="#6366f1" strokeWidth={0} />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-galit-7b6b84200/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white p-3 shadow-lg transition-colors duration-1000 hover:shadow-xl dark:bg-slate-800"
            >
              <Linkedin fill="#6366f1" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
