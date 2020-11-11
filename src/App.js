import React from 'react';
import { TimeSinceOutbreak, Chart, CountryButtons } from './components';
import { fetchData, fetchDailyData } from './api'

import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        country: 'Global'
    }

    async componentDidMount() {
        const fetchedData = await fetchDailyData();

        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        if (country !== 'Global') {
            const countryData = await fetchData(country);
            this.setState({
                data: countryData,
                country: country
            });
        } else {
            const fetchedData = await fetchDailyData();
            this.setState({
                data: fetchedData,
                country: country
            })
        }
    }

    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <TimeSinceOutbreak />
                <Chart data={data} country={country} />
                <CountryButtons handleCountryChange={this.handleCountryChange} />
            </div>
        );
    }
}

export default App;