import React from 'react'
import styles from "./styles/slide1.module.scss"
import SlideContainer from '../../components/SlideContainer'
function Slide1() {
    return (
        <SlideContainer>
            <div>
                <div className={styles.heading}></div>
            </div>
        </SlideContainer>
    )
}

export default Slide1