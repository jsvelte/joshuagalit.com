import { Nunito, Oleo_Script, Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })
const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: '400'
})

export { openSans, nunito, oleoScript }
