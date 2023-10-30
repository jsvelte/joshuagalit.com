const calculateReadTime = (content: string, wordsPerMinute: number): number => {
  const wordCount = content.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return readTime
}

export default calculateReadTime
