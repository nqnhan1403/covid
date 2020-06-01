import React from 'react'

import styles from './About.module.css'
import education from '../../assets/education.png'
import experience from '../../assets/experience.png'

class About extends React.Component {
    state = {
        nameActive: false
    }
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
                {/* <div className={styles.educationContainer}>
                    <div className={styles.educationIllustration}>
                        <img src={education} height={'70%'} width={'70%'} />
                    </div>
                    <div className={styles.educationList}>
                        <ul className={styles.educationTimeline}>
                            <li className={styles.event}>
                                <div className={styles.eventTime}>2015 - 2019</div>
                                <div className={styles.eventContent}>Study Computer Science at Ton Duc Thang University</div>
                            </li>                            

                        </ul> 
                    </div>
                </div>
                <div className={styles.experienceContainer}>
                    <div className={styles.experienceList}>                        
                        <p>aaaa</p>
                        <p>aaaa</p>
                        <p>aaaa</p>
                        <p>aaaa</p>
                        <p>aaaa</p>
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