import Image from 'next/image'
import About from '../../components/About'
import Main from '../../components/Main'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Main/>
      <About/>
    </main>
  )
}
