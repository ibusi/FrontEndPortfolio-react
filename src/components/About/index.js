import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container-about">
        <div className="text-zone">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          />
        </div>
        <div className="text-about">
          <p>
            改めましてご覧いただきありがとうございます。現在はネットワークエンジニアとして働いております。<br />ネットワークの業務や勉強をする中でセキュリティにも興味をもちました。お互いが密接に関係しているので、ネットワークエンジニアとして成長することがセキュリティの理解にもつながると思い業務にも取り組んできました。同時にセキュリティの勉強も個人的に行っていました。それもあり会社のCTFの競技会で3位になれたときは成長を感じました。セキュリティエンジニアになるべく、引き続き勉強や業務を怠らず励みたいと思います。<br />どうぞよろしくお願いいたします。<br />
            <Link to="/History" className="history-button">
              History
            </Link>
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={LogoS} alt="Logo" />
            </div>
            <div className="face2">
              <img src={LogoS} alt="Logo" />
            </div>
            <div className="face3">
              <img src={LogoS} alt="Logo" />
            </div>
            <div className="face4">
              <img src={LogoS} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="semi-circle-spin" />
    </>
  )
}

export default About
