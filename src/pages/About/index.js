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
            </div>
        )
    }
}

export default About