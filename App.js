import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const buttons = [
    'AC',
    'DEL',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '.',
    '0',
    '+/-',
    '=',
  ];

  const [numCurrent, setNumCurrent] = useState('');

  const [lastNumber, setLastNum] = useState('');

  function handleInput(buttonPressed) {
    console.log(buttonPressed);
    if (
      (buttonPressed === '+') |
      (buttonPressed === '-') |
      (buttonPressed === '*') |
      (buttonPressed === '/')
    ) {
      setNumCurrent(numCurrent + ' ' + buttonPressed + ' ');
      return;
    }
    switch (buttonPressed) {
      case 'DEL':
        setNumCurrent(numCurrent.substring(0, numCurrent.length - 1));

        return;
      case 'AC':
        setLastNum(' ');
        setNumCurrent(' ');
        return;
      case '=':
        setLastNum(numCurrent + '=');
        calculator();
        return;
      case '+/-':
        return;

    }
    setNumCurrent(numCurrent + buttonPressed);
  }

    function calculator() {
      const splitNumbers = numCurrent.split('');
      const firstNumber = parseFloat(splitNumbers[0]);
      const lastNumber = parseFloat(splitNumbers[2]);
      const operator = splitNumbers[1];

      switch (operator) {
        case ' + ':
          setNumCurrent((firstNumber + lastNumber).toString());
          return;
        case '-':
          setNumCurrent((firstNumber - lastNumber).toString());
          return;

        case '*':
          setNumCurrent((firstNumber * lastNumber).toString());
          return;
        case '/':
          setNumCurrent((firstNumber / lastNumber).toString());
          return;
      }
    }
  
  return (
    <View>
      <View style={styles.results}>
        <Text style={{ fontSize: 30, margin: 10 }}>0</Text>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{numCurrent}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            onPress={() => handleInput(button)}
            key={button}
            style={[styles.button, { backgroundColor: '#AFEEEE' }]}>
            <Text style={[styles.textButton, { color: '#5F9EA0' , fontSize: 30 }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'flex-end',
    height: 300,
    backgroundColor: '#E0FFFF',
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80,
  },

  textButton: {
    color: '#5b5b5b',
    fontSize: 30,
  },
  resultText: {
    color: '#00FFFF',
    margin: 10,
    fontSize: 40,
  },
  historyText: {
    color: 'green',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});
