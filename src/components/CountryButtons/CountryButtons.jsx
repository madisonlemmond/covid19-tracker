import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

import styles from './CountryButtons.module.css';

//import { fetchCountryData } from '../../api';

/*{ countries.map((country) => (
    <Button className={styles.button} value={country.value} onClick={(e) => handleCountryChange(e.target.value)}>{country.title}</Button>
))
}*/

const CountryButtons = ({ handleCountryChange }) => {
    const [country, setCountry] = useState('Global');

    useEffect(() => {
        setCountry(country);
    }, [country])

    const countries = [
        {
            value: 'Global',
            title: 'Global'
        },
        {
            value: 'US',
            title: 'US'
        },
        {
            value: 'China',
            title: 'China'
        },
        {
            value: 'Italy',
            title: 'Italy'
        },
        {
            value: 'South Korea',
            title: 'South Korea'
        },
        {
            value: 'United Kingdom',
            title: 'UK'
        }
    ];

    return (
        <div className={styles.container}>
            <ButtonGroup className={styles.buttonGroup} variant="contained" size="large" aria-label="contained primary button group">
                <Button className={styles.button} value="Global" onClick={(e) => handleCountryChange(e.target.value)}>Global</Button>
                <Button className={styles.button} value="US" onClick={(e) => handleCountryChange(e.target.value)}>USA</Button>
                <Button className={styles.button} value="China" onClick={(e) => handleCountryChange(e.target.value)}>China</Button>
                <Button className={styles.button} value="Italy" onClick={(e) => handleCountryChange(e.target.value)}>Italy</Button>
                <Button className={styles.button} value="South Korea" onClick={(e) => handleCountryChange(e.target.value)}>South Korea</Button>
                <Button className={styles.button} value="United Kingdom" onClick={(e) => handleCountryChange(e.target.value)}>UK</Button>               
            </ButtonGroup>
        </div>
    );
}

export default CountryButtons;