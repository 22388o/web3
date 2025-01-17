import { Hero } from 'components/Home/Hero'
import { Latest } from 'components/Home/Latest'
import Features from 'components/Home/Features'
import Why from 'components/Home/Why'

export default function Home(props) {
  return (
    <>
      <Hero />
      <Latest />
      <Features />
      <Why />
    </>
  )
}

Home.layout = 'js'