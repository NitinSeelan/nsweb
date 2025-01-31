'use client'
import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [result, setResult] = useState('');

    // Map of key values to calculator buttons
    const keyMap = {
        '7': '7',
        '8': '8',
        '9': '9',
        '/': '/',
        '4': '4',
        '5': '5',
        '6': '6',
        '*': '*',
        '1': '1',
        '2': '2',
        '3': '3',
        '-': '-',
        '0': '0',
        '.': '.',
        '=': '=',
        '+': '+',
        'Enter': '=',
        'Backspace': 'CE',
        'c': 'C',
    };

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(result) || ''); // Eval is for simplicity here, but use caution
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === 'CE') {
            setResult(result.slice(0, -1)); // Remove last character
        } else {
            setResult(result + value);
        }
    };

    // Keyboard event listener
    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if (keyMap[key]) {
                event.preventDefault();  // Prevent default action (like scrolling for arrow keys)
                handleClick(keyMap[key]);
            }
        };

        // Add event listener when component mounts
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [result]);

    // Inline styles for various parts of the calculator
    const styles = {
        calculator: {
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            fontSize: '24px',
            textAlign: 'right',
            border: 'none',
            borderBottom: '1px solid #ccc',
            outline: 'none',
            backgroundColor: '#fff',
        },
        buttons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
        },
        button: {
            padding: '15px',
            fontSize: '20px',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            backgroundColor: '#f0f0f0',
        },
        operatorButton: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#f0f0f0',
            color: '#f0a500',
        },
        wideButton: {
            gridColumn: 'span 2',
        },
        clearButton: {
            gridColumn: 'span 2',
            backgroundColor: '#f0a500',
            color: 'white',
        },
        clearButtonHover: {
            backgroundColor: '#d18d00',
        },
        heading: {
            textAlign: 'center',
            color: 'green',
        },
        subheading: {
            textAlign: 'center',
        },
    };

    return (
        <>
            <h1 style={styles.heading}>GeeksForGeeks</h1>
            <h2 style={styles.subheading}>Calculator App</h2>
            <div className="calculator" style={styles.calculator}>

                <input
                    type="text"
                    value={result}
                    readOnly
                    style={styles.input}
                />
                <div className="buttons" style={styles.buttons}>
                    <button onClick={() => handleClick('7')} style={styles.button}>7</button>
                    <button onClick={() => handleClick('8')} style={styles.button}>8</button>
                    <button onClick={() => handleClick('9')} style={styles.button}>9</button>
                    <button
                        className="operator"
                        onClick={() => handleClick('CE')}
                        style={{ ...styles.button, ...styles.operatorButton }}
                    >
                        CE
                    </button>

                    <button onClick={() => handleClick('4')} style={styles.button}>4</button>
                    <button onClick={() => handleClick('5')} style={styles.button}>5</button>
                    <button onClick={() => handleClick('6')} style={styles.button}>6</button>
                    <button
                        className="operator"
                        onClick={() => handleClick('/')}
                        style={{ ...styles.button, ...styles.operatorButton }}
                    >
                        /
                    </button>

                    <button onClick={() => handleClick('1')} style={styles.button}>1</button>
                    <button onClick={() => handleClick('2')} style={styles.button}>2</button>
                    <button onClick={() => handleClick('3')} style={styles.button}>3</button>
                    <button
                        className="operator"
                        onClick={() => handleClick('*')}
                        style={{ ...styles.button, ...styles.operatorButton }}
                    >
                        *
                    </button>

                    <button onClick={() => handleClick('0')} style={styles.button}>0</button>
                    <button onClick={() => handleClick('.')} style={styles.button}>.</button>
                    <button onClick={() => handleClick('00')} style={styles.button}>00</button>
                    <button
                        className="operator"
                        onClick={() => handleClick('-')}
                        style={{ ...styles.button, ...styles.operatorButton }}
                    >
                        -
                    </button>
                    <button
                        className="operator"
                        onClick={() => handleClick('C')}
                        style={{ ...styles.button, ...styles.clearButton }}
                    >
                        C
                    </button>

                    <button
                        className="operator"
                        onClick={() => handleClick('=')}
                        style={{ ...styles.button, ...styles.operatorButton }}
                    >
                        =
                    </button>

                    <button
                        className="operator"
                        onClick={() => handleClick('+')}
                        style={{ ...styles.button, ...styles.operatorButton }}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
};

export default Calculator;
