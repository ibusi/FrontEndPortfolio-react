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
            改めましてご覧いただきありがとうございます。現在はネットワークエンジニアとして働いております。<br />とてもやりがいのある仕事ではあるのですが場所にとらわれない働き方や元々興味のあったフロントエンジニアとして働きたく勉強を始めました。いざ勉強を始めるとわかってはいましたがとても難しく苦戦の日々でした。しかし同時に楽しさも感じ、どんどんはまっていきました。まだまだ勉強中の身ではありますがフロントエンドエンジニアとしてのスタートを一日でも早く切りたいと思っています。どうぞよろしくお願いいたします。<br />
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
