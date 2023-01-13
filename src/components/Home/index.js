import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../../assets/images/logo.png'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['と', '申', 'し', 'ま', 'す', '。']
  const nameArray2 = ['セ', 'キ', 'ュ', 'リ', 'テ', 'ィ']
  const jobArray = ['エ', 'ン', 'ジ', 'ニ', 'ア']
  const jobArray2 = ['目', '指', 'し', 'て', 'い', 'ま', 'す', '。']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container-home">
        <div className="home">
          <div className="name">
            <span className={letterClass} >大</span>
            <span className={letterClass}>浦</span>
            <span className={letterClass}>生</span>
            <span className={letterClass}>吹</span>
          </div>
          <div className="sub-text">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray2}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray2}
            />
            <br />
            <Link to="/About" className="flat-button">
              About Me
            </Link>
          </div>
        </div>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <Loader type="semi-circle-spin" />
    </>
  )
}

export default Home
