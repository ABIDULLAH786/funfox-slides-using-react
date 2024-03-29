import React from 'react'
import styles from "./slide1.module.scss"
import SlideContainer from '../../components/SlideContainer'

const cloud_text = [
    {
        text: "SETTING",
        img_src: "images/slide1/clouds/cloud_1.svg"
    },
    {
        text: "CHARACTERS",
        img_src: "images/slide1/clouds/cloud_2.svg"
    },
    {
        text: "PLOT",
        img_src: "images/slide1/clouds/cloud_3.svg"
    },
    {
        text: "PROBLEM OR CONFLICT",
        img_src: "images/slide1/clouds/cloud_4.svg"
    },
    {
        text: "RESOLUTION",
        img_src: "images/slide1/clouds/cloud_5.svg"
    },
]
function Slide1() {
    return (
        <SlideContainer>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <span className={styles.text}>Elements of Story Writing</span>
                </div>
                <div className={styles.paragraph1}>
                    Welcome to term 2 of Writers Club. Are you excited for this amazing journey? <br />
                    Over the next week, we will be practicing the different elements of story writing.
                    Ouraim is to make stories more interesting and exciting.
                </div>
                <div className={styles.paragraph2}>
                    <div className={styles.p2_text}>
                        There are five elements which make the foundation for story writing.
                        An element is an essential part of something and every fiction story has the same key elements:
                    </div>
                    <img src='images/girl_avatar.svg' />
                </div>
                <div className={styles.clouds_wrapper}>
                    {cloud_text?.map((item, index) => <CloudComponent key={index} text={item.text} imageSrc={item.img_src} />)}
                </div>
                <div className={styles.paragraph3}>
                    You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
                </div>
                <div className={styles.paragraph4}>
                    <div className={styles.p4_text}>
                        For today’s lesson, we will try to understand and practice writing the setting for our stories.<br />
                        The setting is an important element of every fiction story.
                    </div>
                    <img src='images/para4_bg.svg' />
                </div>
            </div>
        </SlideContainer>
    )
}
const CloudComponent = ({ key, text, imageSrc }) => {
    return (
        <div key={key} className={styles.cloud_container}>
            <div className={styles.cloud_text}>{text}</div>
            <img src={imageSrc} alt="cloud" />
        </div>
    );
};
export default Slide1