import React, { FC } from 'react'
import toast from 'react-hot-toast'
import { Clipboard } from 'lucide-react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import { cn } from '~/utils/cn'

type CustomCodeBlockProps = {
  code: string
  language: string
}

const CustomCodeBlock: FC<CustomCodeBlockProps> = ({ code, language }): JSX.Element => {
  return (
    <div className="relative overflow-x-hidden text-slate-400 dark:text-slate-500">
      <button className="absolute right-0 z-40 mr-2 mt-5">
        <CopyToClipboard
          text={code}
          onCopy={() => {
            toast.success('Copied')
          }}
        >
          <Clipboard className="h-5 w-5 cursor-pointer hover:text-blue-600" />
        </CopyToClipboard>
      </button>
      <span className="absolute top-2 rounded-lg p-1 text-xs uppercase backdrop-blur-sm">
        {language}
      </span>
      <SyntaxHighlighter
        style={oneDark}
        language={language}
        PreTag="div"
        className={cn(
          'scrollbar-thin scrollbar-track-[#282c34] scrollbar-thumb-[#4b5264]',
          'z-10 scrollbar-track-rounded-md scrollbar-thumb-rounded'
        )}
        showLineNumbers={true}
        useInlineStyles={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CustomCodeBlock
