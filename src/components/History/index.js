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
                        派遣先では主にお客様のLAN環境の構築を通して、<br />
                        検証、構築、詳細設計等を経験する。<br />
                        ネットワークエンジニアとして働きつつも<br />
                        Web開発やセキュリティの勉強を個人学習をする。<br />
                        しかしインフラエンジニアとしてのキャリアパスや、<br />
                        興味はあったが勉強をしてこなかったサーバーについて<br />
                        勉強をするのが優先順位が高いと思ったので、現在は<br />
                        まずはAZ|900の資格取得を目指し個人学習をしています。<br />
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