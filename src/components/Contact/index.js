import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_dqqmevg', 'template_kwoqzkf', form.current, 'KaeBFdik2tbllPFrc'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  };

  return (
    <>
      <div className="container-contact">
        <div className="text-zone">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
          />
        </div>
        <div className="contact-text">
          <div className="container-text">
            <p>
              サーバーエンジニアとなるべく努力をしてまいりました。これからも勉強を続け、常にスキルアップをするのは当然の事、常に意欲的に取り組みたいと思っております。お仕事のお話いただける場合はご連絡いただきたく思います。
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <ul className="contact-form">
              <li className="half">
                <input placeholder="お名前" type="text" name="name" required />
              </li>
              <li className="half">
                <input
                  placeholder="メールアドレス"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="subject">
                <input
                  placeholder="件名"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="textzone">
                <textarea
                  placeholder="内容"
                  name="message"
                  required
                ></textarea>
              </li>
              <li className="flat-button">
                <input type="submit" value="送る" />
              </li>
            </ul>
          </form>
        </div>
        <div className="info-map">
          大浦 生吹
          <br />
          奈良県
          <br />
          北葛城郡王寺町 <br />
          <br />
          <span>ibukioura@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[34.58187361047433, 135.69631186832999]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[34.58187361047433, 135.69631186832999]}>
              <Popup>奈良県、王寺町に住んでいます。</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="semi-circle-spin" />
    </>
  )
}

export default Contact
