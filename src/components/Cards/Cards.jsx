import React from 'react'
import {
    Card,
    CardContent,
    Typography,
    Grid
} from '@material-ui/core'
import cx from 'classnames'
import CountUp from 'react-countup'
import styles from './Cards.module.css'

const Cards = (props) => {
    const { confirmed, recovered, deaths, lastUpdate } = props.data
    if (!confirmed || !recovered || !deaths || !lastUpdate) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid
                spacing={3}
                justify='center'
                container>
                <Grid
                    component={Card}
                    item
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography
                            color='textSecondary'
                            gutterBottom>
                            INFECTED
                        </Typography>
                        <Typography
                            variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                            />
                        </Typography>
                        <Typography
                            color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography
                            variant='body2'>
                            Number of active case
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    component={Card}
                    item
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography
                            color='textSecondary'
                            gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography
                            variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                            />
                        </Typography>
                        <Typography
                            color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography
                            variant='body2'>
                            Number of recovered
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    component={Card}
                    item
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography
                            color='textSecondary'
                            gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography
                            variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                            />
                        </Typography>
                        <Typography
                            color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography
                            variant='body2'>
                            Number of deaths
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards