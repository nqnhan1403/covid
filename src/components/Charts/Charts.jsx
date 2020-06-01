import React, { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2"
import { Button } from "@material-ui/core"

import styles from "./Charts.module.css"
import {
    fetchTop10Infected,
    fetchTop10Recovered,
    fetchTop10Deaths,
} from "../../api"

const Charts = (props) => {
    const [top10Infected, setTop10Infected] = useState([])
    const [top10Recovered, setTop10Recovered] = useState([])
    const [top10Deaths, setTop10Deaths] = useState([])
    const [currentTop10Chart, setCurrentTop10Chart] = useState("")
    const {
        data: { confirmed, recovered, deaths },
        country,
    } = props

    useEffect(() => {
        if (!country) {
            const fetchData = async () => {
                let topInfected = await fetchTop10Infected()
                let topRecovered = await fetchTop10Recovered()
                let topDeaths = await fetchTop10Deaths()
                setTop10Infected(topInfected)
                setTop10Recovered(topRecovered)
                setTop10Deaths(topDeaths)
            }
            fetchData()
        } else {
            setCurrentTop10Chart('COUNTRY')
        }
    }, [country])    
    
    const switchChart = (chart) => {  
        setCurrentTop10Chart(chart)
    }
    const top10InfectedChart = top10Infected.length ? (
        <Bar
            data={{
                labels: top10Infected.map((country) => country.countryRegion),
                datasets: [
                    {
                        label: "People",
                        backgroundColor: [
                            "rgb(252, 82, 3)",
                            "rgb(95, 176, 63)",
                            "rgb(57, 66, 97)",
                            "rgb(114, 71, 179)",
                            "rgb(142, 37, 148)",
                            "rgb(184, 55, 111)",
                            "rgb(176, 196, 116)",
                            "rgb(82, 29, 13)",
                            "rgb(40, 150, 156)",
                            "rgb(237, 100, 230)",
                        ],
                        data: top10Infected.map((country) => country.confirmed),
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: "TOP 10 INFECTED COUNTRY" },
            }}
            animation
        />
    ) : null
    const top10RecoveredChart = top10Recovered.length ? (
        <Bar
            data={{
                labels: top10Recovered.map((country) => country.countryRegion),
                datasets: [
                    {
                        label: "People",
                        backgroundColor: [
                            "rgb(252, 82, 3)",
                            "rgb(95, 176, 63)",
                            "rgb(57, 66, 97)",
                            "rgb(114, 71, 179)",
                            "rgb(142, 37, 148)",
                            "rgb(184, 55, 111)",
                            "rgb(176, 196, 116)",
                            "rgb(82, 29, 13)",
                            "rgb(40, 150, 156)",
                            "rgb(237, 100, 230)",
                        ],
                        data: top10Recovered.map(
                            (country) => country.recovered
                        ),
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: "TOP 10 RECOVERED COUNTRY" },
            }}
            animation
        />
    ) : null
    const top10DeathsChart = top10Deaths.length ? (
        <Bar
            data={{
                labels: top10Deaths.map((country) => country.countryRegion),
                datasets: [
                    {
                        label: "People",
                        backgroundColor: [
                            "rgb(252, 82, 3)",
                            "rgb(95, 176, 63)",
                            "rgb(57, 66, 97)",
                            "rgb(114, 71, 179)",
                            "rgb(142, 37, 148)",
                            "rgb(184, 55, 111)",
                            "rgb(176, 196, 116)",
                            "rgb(82, 29, 13)",
                            "rgb(40, 150, 156)",
                            "rgb(237, 100, 230)",
                        ],
                        data: top10Deaths.map((country) => country.deaths),
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: "TOP 10 DEATHS COUNTRY" },
            }}
            animation
        />
    ) : null

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ["INFECTED", "RECOVERED", "DEATHS"],
                datasets: [
                    {
                        label: "People",
                        backgroundColor: [
                            "rgb(255, 158, 110)",
                            "rgb(153, 204, 51)",
                            "rgb(252, 0, 0)",
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: country.toUpperCase() },
            }}
            animation
        />
    ) : null
    return (
        <div className={styles.container}>
            <div className={styles.containerTop10Switch}>
                <Button
                    className={styles.chartSwitch}
                    onClick={() => switchChart('INFECTED')}
                >
                    TOP 10 INFECTED
                </Button>
                <Button
                    className={styles.chartSwitch}
                    onClick={() => switchChart('RECOVERED')}
                >
                    TOP 10 RECOVERED
                </Button>
                <Button
                    className={styles.chartSwitch}
                    onClick={() => switchChart('DEATHS')}
                >
                    TOP 10 DEATHS
                </Button>
            </div>                   
            <div className={styles.containerChart}>{currentTop10Chart == 'COUNTRY' ? barChart : currentTop10Chart == 'INFECTED' ? top10InfectedChart : currentTop10Chart == 'RECOVERED' ? top10RecoveredChart : currentTop10Chart == 'DEATHS'? top10DeathsChart : top10InfectedChart }</div>
        </div>
    )
}

export default Charts
