import React from 'react';

import styles from './App.module.css';

class App extends React.Component {

    daysPassedCalculator = () => {
        const originDate = new Date("12/30/2019");
        let currentDate = new Date();
        let differenceInTime = currentDate.getTime() - originDate.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return Math.floor(differenceInDays);
    }

    render() {
        return (
            <div>
                <h2>Days since COVID-19 outbreak: {this.daysPassedCalculator()}</h2>
            </div>
        );
    }
}

export default App;