const authorQuestionElement = document.getElementById('authorquestion');
const answerButtons = document.getElementsByClassName('btn--default')

function setAuthorQuestion() {
  let currentquestion = authorQuestions[0];
  document.getElementById(authorQuestionElement).innerHTML = currentQuestion.question;
}

const authorquestions = [
   
    {
      question: 'What year was Terry Prachett born?',
      answers: [
        { text: '1948', correct: true },
        { text: '1946', correct: false },
        { text: '1950', correct: false},
        { text: '1944', correct: false }
      ]
    },
    {
      question: 'In what year did Terry Prachett publish his first story in a magazine?',
      answers: [
        { text: '1964', correct: false },
        { text: '1962', correct: true },
        { text: '1970', correct: false },
        { text: '1968', correct: false }
      ]
    },
    {
        question: 'In 1998 what honour did Pratchett receive for services to literature?',
        answers: [
          { text: 'CBE', correct: false },
          { text: 'OBE', correct: true },
          { text: 'MBE', correct: false },
          { text: 'KBE', correct: false }
        ]
      },
      {
        question: 'What was Terry Prachett Diagnosed with in 2007?',
        answers: [
          { text: 'Frontal variant Alzheimer’s disease ', correct: false },
          { text: 'Huntington’s disease', correct: false },
          { text: 'Acromesomelic Dysplasia', correct: false },
          { text: 'Posterior Cortical Atrophy', correct: true }
        ]
      },  
      {
        question: 'What was the last book written by Terry Prachett which was published poshumously?',
        answers: [
          { text: 'The Shepherd’s Crown', correct: true },
          { text: 'The Amazing Maurice and His Educated Rodents.', correct: false },
          { text: 'The Colour of Magic', correct: false},
          { text: 'Raising Steam', correct: false }
        ]
      },
      {
        question: 'In what year did Terry Prachett die?',
        answers: [
          { text: '2018', correct: false },
          { text: '2012', correct: false },
          { text: '2020', correct: false },
          { text: '2015', correct: true }
        ]
      },
      {
          question: 'What apprenticeship job did Terry Prachett drop out of school for?',
          answers: [
            { text: 'Plumber', correct: false },
            { text: 'Copy Writer', correct: false },
            { text: 'Journalist', correct: true },
            { text: 'Electrition', correct: false }
          ]
        },
        {
          question: 'What did a young Terry Prachett want to be when he grew up?',
          answers: [
            { text: 'Scientist', correct: false },
            { text: 'Editor', correct: false },
            { text: 'Journalist', correct: false },
            { text: 'Astronomer', correct: true }
          ]
        },    
        {
            question: 'How much did Pratchett receive for his first published story The Hades Business?',
            answers: [
              { text: '£14', correct: true },
              { text: '£140', correct: false },
              { text: '£50', correct: false },
              { text: '£500', correct: false }
            ]
          },
          {
            question: 'Who did Terry Pratchett marry in 1968?',
            answers: [
              { text: 'Linn Pembroke', correct: false },
              { text: 'Lyn Purves', correct: true },
              { text: 'Lynette Purvell', correct: false },
              { text: 'Lynora Percy', correct: false }
            ]
          },  
  ]