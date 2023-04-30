import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import firebase from 'firebase/app';
import 'firebase/firestore';

function UserQuestions({ firebase }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsRef = firebase.firestore().collection('questions');
      const snapshot = await questionsRef.get();
      const questionsData = snapshot.docs.map(doc => doc.data());
      setQuestions(questionsData);
    };
    fetchQuestions();
  }, [firebase]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  }

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  }

  const handleAddQuestion = () => {
    if (question && answer) {
      firebase.firestore().collection('questions').add({
        question: question,
        answer: answer
      });
      setQuestion('');
      setAnswer('');
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Question"
        value={question}
        onChange={handleQuestionChange}
      />
      <TextField
        label="Answer"
        value={answer}
        onChange={handleAnswerChange}
      />
      <Button variant="contained" onClick={handleAddQuestion}>Submit</Button>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <h3>{q.question}</h3>
            <p>{q.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserQuestions;
