import React from 'react';
import { TimeSinceOutbreak } from './components';

import styles from './App.module.css';

class App extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <TimeSinceOutbreak />
            </div>
        );
    }
}

export default App;