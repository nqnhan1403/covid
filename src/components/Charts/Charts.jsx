import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.css'
import { fetchDailyData } from '../../api'

const Charts = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchData()
    })

    const lineChart = (
        dailyData.length ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'INFECTED',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'DEATHS',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, .4)',
                        fill: true
                    }]
                }}
            />) : null
    )

    return (
        <div className={styles.container}>
            {lineChart}
        </div>

    )
}

export default Charts