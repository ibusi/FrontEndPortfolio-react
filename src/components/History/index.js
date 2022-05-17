import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'




const History = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container-history">
                <div className="text-zone">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['H', 'I', 'S', 'T', 'O', 'R', 'Y']}
                    />
                </div>
                <div className="text-history">
                    <p>
                        <span>鉄道会社職員時代</span><br />
                        2012年 高校卒業後 鉄道会社に就職。<br />
                        駅係員と車掌を経験。<br />
                        6年間働いたが、海外に興味があったので退職。<br />
                    </p>
                    <p>
                        <span>カナダ留学時代<br /></span>
                        2018年 カナダにワーキングホリデーを使い留学。<br />
                        英語は全く話せなかったので語学学校に通う。<br />
                        カフェや学校の受付としてアルバイトをする。<br />
                        現地のセミナーでエンジニアの話を聞き興味を持つ。<br />
                        一年半の海外生活も終わり日本に帰国。<br />
                    </p>
                    <p>
                        <span>東京時代</span><br />
                        2020年 知り合いに進められた<br />
                        東京のプログラミングスクールに通う。<br />
                        一か月スクールに通いJavaScriptを勉強するが、<br />
                        スクールが終わると勉強をやめてしまう。<br />
                        エンジニア以外の道も含めて将来の事を迷っていたが<br />
                        グダグダしていてもしょうがないので、<br />
                        思い切ってエンジニアとなるべく就職活動を開始する。<br />
                        就職先が決まりネットワークエンジニアとなる。<br />
                    </p>
                    <p>
                        <span>現在<br /></span>
                        2021年 IT派遣の会社に就職。<br />
                        研修を通してネットワークの知識を身に着ける。<br />
                        派遣先が決まりサーバーや、ルーター、スイッチ、APの<br />
                        設定や検証を経験する。<br />
                        研修の時はあまり感じなかったがいざ仕事として、<br />
                        ネットワークに携わるとその魅力にはまる。<br />
                        友達から一緒にプログラミングを勉強しないかと誘いを受け、<br />
                        ネットワークに還元できることもあるだろうと思い<br />
                        再度プログラミングの勉強を始める。<br />
                        再度勉強を始めるとその魅力を感じ、<br />
                        リモートワークにも憧れがあったので、<br />
                        適しているフロントエンドエンジニアを目指す。<br />
                        フロントエンドエンジニアとなるべく就職活動中。<br />
                        <Link to="/Contact" className="Contact-button">
                            Contact
                        </Link>
                    </p>
                </div>
            </div>
            <Loader type="semi-circle-spin" />
        </>
    )
}

export default History