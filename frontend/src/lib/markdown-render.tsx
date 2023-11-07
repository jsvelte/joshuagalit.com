import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import lua from 'react-syntax-highlighter/dist/cjs/languages/prism/lua'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'

import CustomCodeBlock from './custom-code-block'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('lua', lua)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('typescript', typescript)

type MarkdownRenderProps = {
  mdString: string
}

const MarkdownRender: FC<MarkdownRenderProps> = ({ mdString }): JSX.Element => {
  return (
    <ReactMarkdown
      components={{
        code: Code as any
      }}
    >
      {mdString}
    </ReactMarkdown>
  )
}

type CodeProps = {
  inline: boolean
  className?: string
  children: React.ReactNode
}

const Code: React.FC<CodeProps> = ({ inline, className, children }): JSX.Element => {
  const match = /language-(\w+)/.exec(className ?? '')
  if (!inline && match !== null) {
    // If it's a block code, extract language and pass it to CustomCodeBlock
    const language = className !== undefined ? className.replace(/language-/g, '') : ''
    const codeString = String(children).replace(/\n$/, '')
    return <CustomCodeBlock code={codeString} language={language} />
  } else {
    // If it's an inline code block, simply render the code without any styling
    return <code>{children}</code>
  }
}

export default MarkdownRender
