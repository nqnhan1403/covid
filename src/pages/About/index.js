import React from 'react'

import styles from './About.module.css'
import education from '../../assets/education.png'
import experience from '../../assets/experience.png'

class About extends React.Component {
    state = {
        nameActive: false
    }

    componentDidMount() {
        this.prev = window.scrollY;
        window.addEventListener('scroll', e => this.handleNavigation(e));
    }

    handleNavigation = (e) => {
        const window = e.currentTarget;

        if (this.prev > window.scrollY) {
            console.log("scrolling up");
        } else if (this.prev < window.scrollY) {
            console.log("scrolling down");
        }
        this.prev = window.scrollY;
    };

    render() {
        return (
            <div className={styles.aboutContainer}>
                <div className={styles.briefContainer}>
                    <div className={styles.nameActive}>
                        NHAN NGUYEN
                    </div>
                    <div className={styles.skillActive}>
                        &lt; Web Developer /&gt;
                    </div>
                </div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>
                <div className={styles.frame}></div>                
                {/* <div className={styles.educationContainer}>
                    <div className={styles.educationIllustration}>
                        <img src={education} height={'70%'} width={'70%'} />
                    </div>
                    <div className={styles.educationList}>
                        <h2>STUDY</h2>
                        <ul className={styles.educationTimeline}>
                            <li className={styles.event}>
                                <div className={styles.time}>2015 - 2019</div>
                                <div className={styles.dot}></div>
                                <h2 className={styles.content}>Ton Duc Thang University</h2>
                                <span className={styles.description}>Computer Science</span>
                            </li>
                            <li className={styles.event}>
                                <div className={styles.time}>2018 - Present</div>
                                <div className={styles.dot}></div>
                                <h2 className={styles.content}>DXC Technology Vietnam</h2>
                                <span className={styles.description}>Node JS Developer</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.experienceContainer}>
                    <div className={styles.experienceList}>
                        <h2>PROJECT</h2>
                        <ul className={styles.educationTimeline}>
                            <li className={styles.event}>
                                <div className={styles.time}>2015 - 2019</div>
                                <div className={styles.dot}></div>
                                <h2 className={styles.content}>Ton Duc Thang University</h2>
                                <span className={styles.description}>Computer Science</span>
                            </li>
                            <li className={styles.event}>
                                <div className={styles.time}>2018 - Present</div>
                                <div className={styles.dot}></div>
                                <h2 className={styles.content}>DXC Technology Vietnam</h2>
                                <span className={styles.description}>Node JS Developer</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.experienceIllustration}>
                        <img src={experience} height={'90%'} width={'90%'} />
                    </div>
                </div> */}
            </div>
        )
    }
}

export default About