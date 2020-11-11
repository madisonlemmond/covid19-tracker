import React, { useState, useEffect } from 'react';
import { Card, Grid, Typography, CardContent} from '@material-ui/core';
import { Spring } from 'react-spring/renderprops';
import cx from 'classnames';

import styles from './TimeSinceOutbreak.module.css';

const TimeSinceOutbreak = () => {

    const daysPassedCalculator = () => {
        const currentDate = new Date();
        const originDate = new Date("12/30/2019");
        const difference = currentDate.getTime() - originDate.getTime();
        const timePassed = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
        return timePassed;
    }
    
    const [timePassed, setTimePassed] = useState(daysPassedCalculator());

    useEffect(() => {
        setTimeout(() => {
            setTimePassed(daysPassedCalculator());
          }, 1000);
    });

    const clockComponents = [];

    Object.keys(timePassed).forEach(interval => {
        if (interval === "seconds") {
            if (timePassed[interval] <= 9){
                clockComponents.push(
                    <span>
                        {0}{timePassed[interval]}
                    </span>
                );
            }
            else {
                clockComponents.push(
                    <span>
                        {timePassed[interval]}
                    </span>
                );
            }
        }
        else {
            if (timePassed[interval] <= 9) {
                clockComponents.push(
                    <span>
                        {0}{timePassed[interval]}
                    </span>
                );
            }
            else {
                clockComponents.push(
                    <span>
                        {timePassed[interval]}
                    </span>
                );
            }
        }
    });

    return(
        <Spring from={{opacity:0}} to={{opacity:1}} config={{duration:2000}}>
                {props => (
                    <div style={props}>
                        <div className={styles.container}>
                            <Typography variant="p">Days since COVID-19 outbreak:</Typography>
                            <div className={styles.clock}>
                                <Grid container spacing={3}  justify="center">
                                    <div className={styles.wrapper}>
                                        <CardContent className={styles.cardContent}>
                                            <Grid item component={Card} className={cx(styles.card, styles.time)}>
                                                <Typography variant="p">{clockComponents[0]}</Typography>
                                            </Grid>
                                        </CardContent>
                                        <Typography variant="p">Days</Typography>
                                    </div>
                                    <div className={styles.space}>
                                        <span>:</span>
                                    </div>
                                    <div className={styles.wrapper}>
                                        <CardContent className={styles.cardContent}>
                                            <Grid item component={Card} className={cx(styles.card, styles.time)}>
                                                <Typography variant="p">{clockComponents[1]}</Typography>
                                            </Grid>
                                        </CardContent>
                                        <Typography variant="p">Hours</Typography>
                                    </div>
                                    <div className={styles.space}>
                                        <span>:</span>
                                    </div>
                                    <div className={styles.wrapper}>
                                        <CardContent className={styles.cardContent}>
                                            <Grid item component={Card} className={cx(styles.card, styles.time)}>
                                                <Typography variant="p">{clockComponents[2]}</Typography>
                                            </Grid>
                                        </CardContent>
                                        <Typography variant="p">Minutes</Typography>
                                    </div>
                                    <div className={styles.space}>
                                        <span>:</span>
                                    </div>
                                    <div className={styles.wrapper}>
                                        <CardContent className={styles.cardContent}>
                                            <Grid item component={Card} className={cx(styles.card, styles.time)}>
                                                <Typography variant="p">{clockComponents[3]}</Typography>
                                            </Grid>
                                        </CardContent>
                                        <Typography variant="p">Seconds</Typography>
                                    </div>
                                </Grid> 
                            </div>
                        </div>
                    </div>
                )}
        </Spring>

    );
}

export default TimeSinceOutbreak;