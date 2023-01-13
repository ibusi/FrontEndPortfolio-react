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
                        東京のプログラミングスクールに通い、<br />
                        JavaScriptやブロックチェーンを勉強する。<br />
                        未経験からブロックチェーンに関わるのは壁が高く、<br />
                        他の選択肢を含め就職活動を始め、<br />
                        ネットワークエンジニアとして採用される。<br />
                    </p>
                    <p>
                        <span>現在<br /></span>
                        2021年 IT派遣の会社に就職。<br />
                        研修を通してネットワークの知識を身に着ける。<br />
                        無線LAN環境の構築や機器の更改案件の中で、<br />
                        詳細設計、検証、構築等を担当する。<br />
                        業務を通してネットワークは設計や設定次第で<br />
                        とても脆いものだと理解し、セキュリティに興味をもつ。<br />
                        セキュリティエンジニアとして働く事が目標となり、<br />
                        現在就職活を行っている。<br />
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