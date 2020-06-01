import React, { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./TabNavigate.module.css"

const TabNavigate = ({ path }) => {
    const [currentTab, setCurrentTab] = useState(
        path == "/about" ? "ABOUT" : "COVID"
    )

    const handleTabClick = (tab) => {
        setCurrentTab(tab)
    }

    return (
        <div className={styles.TabNavigate}>
            <Link
                className={
                    currentTab == "COVID" ? styles.linkFocus : styles.link
                }
                onClick={() => {
                    handleTabClick("COVID")
                }}
                to="/"
            >
                COVID 19
            </Link>
            <Link
                className={
                    currentTab == "ABOUT" ? styles.linkFocus : styles.link
                }
                onClick={() => {
                    handleTabClick("ABOUT")
                }}
                to="/about"
            >
                ABOUT ME
            </Link>
        </div>
    )
}

export default TabNavigate
