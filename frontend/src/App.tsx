import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to our Full-Stack App</h1>
            <p>You've clicked the button {count} times.</p>
            <button className={styles.button} onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export default App;