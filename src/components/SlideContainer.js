import React, { useEffect, useRef, useState } from 'react';
import styles from "./SlideContainer.module.scss";
import { useLocation, useNavigate } from 'react-router-dom';

function SlideContainer({ children }) {
    const [slideNumber, setSlideNumber] = useState(1)
    const totalSlides = useRef(2);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSlideSelect = (event) => {
        visitSlide(event.target.value)
        setSlideNumber(event.target.value);
    };
    useEffect(() => {
        const slide = location.pathname == '/' ? 1 : location.pathname.split("/")[1];
        setSlideNumber(slide);
    }, [location.pathname]);

    const handleArrowButtonClick = (direction) => {
        if (direction === 'previous') {
            const slide = slideNumber - 1;
            visitSlide(slide)
        } else if (direction === 'next') {
            navigate(`/${parseInt(slideNumber) + 1}`);
        }
    };
    const visitSlide = (slide) => {
        if (slide == 1) {
            navigate(`/`);
        } else if (slide <= totalSlides.current) {
            navigate(`/${slide}`);
        }
    }
    return (
        <div className={styles.slide_container}>
            <div className={styles.content_wrapper}>
                <div className={styles.header}>
                    <img className={styles.logo} src='images/slide1/funfox-logo.png' alt='logo' />
                    {slideNumber == 1 && <div className={styles.week_label_wrapper}>
                        <div className={styles.week_text}>Week1</div>
                        <img src='images/slide1/weeklabel.svg' alt='week1' />
                    </div>}
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
                        <img src='images/arrow-left.svg' width={30}
                            onClick={() => handleArrowButtonClick('previous')}
                            style={{ opacity: slideNumber === 1 ? 0.5 : 1, pointerEvents: slideNumber === 1 ? 'none' : 'auto' }}
                        />
                        <select value={slideNumber} onChange={handleSlideSelect}>
                            {[...Array(totalSlides.current).keys()].map((page) => (
                                <option key={page + 1} value={page + 1}>
                                    {page + 1}
                                </option>
                            ))}
                        </select>
                        <img src='images/arrow-right.svg' width={30}
                            onClick={() => handleArrowButtonClick('next')}
                            style={{ opacity: slideNumber == totalSlides.current ? 0.5 : 1, pointerEvents: slideNumber === totalSlides.current ? 'none' : 'auto' }}
                        />
                    </div>
                    <img src='images/slide1/info.png' alt='book icon' />

                </div>
            </div>
        </div>
    );
}

export default SlideContainer;
