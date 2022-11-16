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
            改めましてご覧いただきありがとうございます。現在はネットワークエンジニアとして働いております。<br />とてもやりがいのある仕事ではあるのですが、より幅広い経験を通してテップアップしていきたいという気持ちと、元々興味のあったサーバーエンジニアの道に進みたく現在自己学習しております。セキュリティにも興味があったのでセキュリティについても自己学習をしていました。バーチャルボックスを使い複数ゲストを使用して勉強をしていたので多少は活かせる部分はあると思っています。常に意欲的に学べることが自分の強みの一つだと思っています。どうぞよろしくお願いいたします。<br />
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
