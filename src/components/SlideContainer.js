import React from 'react';
import styles from "./SlideContainer.module.scss";

function SlideContainer({ children }) {
    return (
        <div className={styles.slide_container}>
            <div className={styles.header}>
                <img src='images/slide1/funfox-logo.png' alt='logo' />
            </div>
            <div className={styles.body}>
                <div className={styles.left_side_icons_container}>
                    <img src='images/slide1/pencil.png' width={40} alt='pencil icon' />
                    <img src='images/slide1/bag.png' width={40} alt='bag icon' />
                    <img src='images/slide1/open-book.png' width={40} alt='book icon' />

                </div>
                <div className={styles.content_container}>
                    {children}
                </div>
                <div className={styles.right_side_icons_container}>
                    <img src='images/slide1/scale.png' width={40} alt='scale icon' />
                    <img src='images/slide1/close-book.png' width={40} alt='book icon' />
                    <img src='images/slide1/cap.png' width={40} alt='cap icon' />

                </div>
            </div>
            <div className={styles.footer}>
                <img src='images/slide1/voice.png' alt='book icon' />
                <div className={styles.center_page_num_container}>
                    <img src='images/arrow-left.svg' width={30} />
                    <select>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <img src='images/arrow-right.svg' width={30} />
                </div>
                <img src='images/slide1/info.png' alt='book icon' />

            </div>
        </div>
    );
}

export default SlideContainer;
