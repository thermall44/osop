import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const questions = [
    {
      question: 'Какая ОС разработана компанией Apple?',
      options: ['Windows', 'Linux', 'macOS', 'Android'],
      correctAnswer: 'macOS'
    },
    {
      question: 'Какая ОС является открытым исходным кодом?',
      options: ['Windows', 'Linux', 'iOS', 'macOS'],
      correctAnswer: 'Linux'
    },
    {
      question: 'Какая ОС наиболее распространена на смартфонах?',
      options: ['iOS', 'Android', 'Windows Phone', 'Symbian'],
      correctAnswer: 'Android'
    },
    {
      question: 'Какая компания разработала Windows?',
      options: ['Apple', 'Microsoft', 'Google', 'IBM'],
      correctAnswer: 'Microsoft'
    },
    {
      question: 'Какая ОС основана на ядре Linux?',
      options: ['macOS', 'Windows', 'Android', 'iOS'],
      correctAnswer: 'Android'
    },
    {
      question: 'Какая ОС используется на iPhone?',
      options: ['Android', 'iOS', 'Windows Phone', 'Blackberry OS'],
      correctAnswer: 'iOS'
    },
    {
      question: 'Какая ОС не имеет графического интерфейса по умолчанию?',
      options: ['Windows Server', 'Ubuntu', 'macOS', 'FreeBSD'],
      correctAnswer: 'FreeBSD'
    },
    {
      question: 'Какая ОС разработана Linus Torvalds?',
      options: ['Unix', 'Linux', 'BSD', 'Solaris'],
      correctAnswer: 'Linux'
    },
    {
      question: 'Какая ОС используется в большинстве банкоматов?',
      options: ['Windows', 'Linux', 'macOS', 'OS/2'],
      correctAnswer: 'Windows'
    },
    {
      question: 'Какая ОС была предшественником macOS?',
      options: ['OS X', 'NeXTSTEP', 'Darwin', 'A/UX'],
      correctAnswer: 'OS X'
    },
    {
      question: 'Какая ОС разработана Google для IoT устройств?',
      options: ['Android Things', 'Chrome OS', 'Fuchsia', 'Wear OS'],
      correctAnswer: 'Android Things'
    },
    {
      question: 'Какая ОС используется в большинстве суперкомпьютеров?',
      options: ['Windows', 'Linux', 'Unix', 'macOS'],
      correctAnswer: 'Linux'
    },
    {
      question: 'Какая ОС была разработана Bell Labs?',
      options: ['Unix', 'Linux', 'DOS', 'CP/M'],
      correctAnswer: 'Unix'
    },
    {
      question: 'Какая ОС используется в PlayStation 4?',
      options: ['Windows', 'Linux', 'FreeBSD', 'Orbis OS'],
      correctAnswer: 'Orbis OS'
    },
    {
      question: 'Какая ОС была первой с графическим интерфейсом?',
      options: ['Windows', 'macOS', 'Xerox Alto', 'AmigaOS'],
      correctAnswer: 'Xerox Alto'
    },
    {
      question: 'Какая ОС разработана Canonical?',
      options: ['Fedora', 'Ubuntu', 'Debian', 'Arch Linux'],
      correctAnswer: 'Ubuntu'
    },
    {
      question: 'Какая ОС используется в большинстве серверов?',
      options: ['Windows Server', 'Linux', 'macOS Server', 'Solaris'],
      correctAnswer: 'Linux'
    },
    {
      question: 'Какая ОС разработана для Raspberry Pi?',
      options: ['Windows IoT', 'Raspbian', 'Ubuntu Core', 'Android Things'],
      correctAnswer: 'Raspbian'
    },
    {
      question: 'Какая ОС используется в Tesla автомобилях?',
      options: ['Linux', 'QNX', 'Android Auto', 'Windows Embedded'],
      correctAnswer: 'Linux'
    },
    {
      question: 'Какая ОС была разработана для повышенной безопасности?',
      options: ['Windows', 'macOS', 'Qubes OS', 'Ubuntu'],
      correctAnswer: 'Qubes OS'
    }
  ];

  const startGame = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(randomQuestion.question);
    setOptions(randomQuestion.options);
    setCorrectAnswer(randomQuestion.correctAnswer);
    setShowAnswer(false);
  };

  const checkAnswer = (selectedAnswer) => {
    const currentQuestion = questions.find(q => q.question === question);
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
    setTimeout(() => {
      startGame();
    }, 2000); // Показываем правильный ответ на 2 секунды
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Игра "Операционные системы"</Text>
      <Text style={styles.score}>Счет: {score}</Text>
      {question ? (
        <>
          <Text style={styles.question}>{question}</Text>
          {options.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.button,
                showAnswer && option === correctAnswer && styles.correctButton,
                showAnswer && option !== correctAnswer && styles.incorrectButton
              ]} 
              onPress={() => checkAnswer(option)}
              disabled={showAnswer}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
          {showAnswer && (
            <Text style={styles.answerText}>
              Правильный ответ: {correctAnswer}
            </Text>
          )}
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={startGame}>
          <Text style={styles.buttonText}>Начать игру</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  correctButton: {
    backgroundColor: '#4CAF50', // Зеленый цвет для правильного ответа
  },
  incorrectButton: {
    backgroundColor: '#F44336', // Красный цвет для неправильных ответов
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#4CAF50',
  },
});