import React from "react";
import { Card, CardContent, Typography, Grid, Paper } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";
import styles from "./Cards.module.css";

const Cards = (props) => {
    const { confirmed, recovered, deaths, lastUpdate } = props.data;
    if (!confirmed || !recovered || !deaths || !lastUpdate) {
        return "Loading...";
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                    <Paper className={cx(styles.infected)}>
                        <CardContent>
                        <Typography
                            color='textSecondary'
                            gutterBottom>
                            INFECTED
                        </Typography>
                        <Typography
                            variant='body2'>
                            Number of active case
                        </Typography>
                        <Typography
                            variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator='.'
                            />
                        </Typography>
                        <Typography
                            color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>                        
                    </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={cx(styles.recovered)}>
                        <CardContent>
                        <Typography
                            color='textSecondary'
                            gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography
                            variant='body2'>
                            Number of active case
                        </Typography>
                        <Typography
                            variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator='.'
                            />
                        </Typography>
                        <Typography
                            color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>                        
                    </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={cx(styles.deaths)}>
                        <CardContent>
                        <Typography
                            color='textSecondary'
                            gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography
                            variant='body2'>
                            Number of active case
                        </Typography>
                        <Typography
                            variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator='.'
                            />
                        </Typography>
                        <Typography
                            color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>                        
                    </CardContent>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
