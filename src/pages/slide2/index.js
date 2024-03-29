import React from 'react'
import styles from "./slide2.module.scss"
import SlideContainer from '../../components/SlideContainer'
function Slide2() {
    return (
        <SlideContainer>
            <div className={styles.container}>

                <div className={styles.paragraph1}>
                    Can you figure out the definition of setting from the following examples?
                </div>
                <div className={styles.sentence}>
                    (take a minute to think about this)
                </div>
                <div className={styles.images_wrapper}>
                    <div className={styles.left_img}>
                        <img src='images/slide2/beach.svg' />
                        <div className={styles.img_caption}>Sunny day at a beach </div>
                    </div>
                    <div className={styles.right_img}>
                        <img src='images/slide2/night_house.svg' />
                        <div className={styles.img_caption}>A cold rainy night in a haunted house in October</div>
                    </div>
                </div>
                <div className={styles.suggestion_wrapper}>
                    <div className={styles.guess_txt}>So, what do you think the definition of setting is?</div>
                    <div className={styles.suggestion_container}>
                        <div className={styles.guess_txt}>Any guesses?</div>
                        <div className={styles.guess_dotted_area}>________________________________________</div>
                        <div className={styles.guess_hint_wrapper}>
                            <div className={styles.guess_txt}>Hint:</div>
                            <img src='images/slide2/clock.svg' />
                            <img src='images/slide2/home.svg' />
                        </div>
                    </div>
                </div>
                <div className={styles.paragraph2}>
                    <div className={styles.p2_text}>
                        Setting is the time <img src='images/slide2/clock.svg' width={34} /> and place <img src='images/slide2/home.svg' width={34} /> of a story. It often answers the questions: when? and where?</div>
                </div>
                <div className={styles.normal_text}>
                    The time of the story could be in the past, future, day, night, summer or winter.
                    A story may take place in a school, a mall, a desert, an airplane or in a variety
                    of other places.  </div>

            </div>
        </SlideContainer>
    )
}

export default Slide2