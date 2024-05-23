const authorQuestionElement = document.getElementById('authorquestion');
const answerButtons = Array.from(document.getElementsByClassName('btn--default'));

let currentquestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableAuthorQuesions = [];

const authorQuestions = [
  {
    question: 'What year was Terry Prachett born?',
      choice1: '1948', 
      choice2: '1946', 
      choice3: '1950', 
      choice4: '1944',
      answer: 1
  },
  {
    question: 'In what year did Terry Prachett publish his first story in a magazine?',
      choice1: '1964',
      choice2: '1962', 
      choice3: '1970', 
      choice4: '1968', 
      answer: 4
    
  },
  {
      question: 'In 1998 what honour did Pratchett receive for services to literature?',
        choice1: 'CBE', 
        choice2: 'OBE',
        choice3: 'MBE', 
        choice4: 'KBE', 
        answer: 2
      
    },
    {
      question: 'What was Terry Prachett Diagnosed with in 2007?',
        choice1: 'Frontal variant Alzheimer’s disease ',
        choice2: 'Huntington’s disease', 
        choice3: 'Acromesomelic Dysplasia', 
        choice4: 'Posterior Cortical Atrophy',
      answer: 4
    },  
    {
      question: 'What was the last book written by Terry Prachett which was published poshumously?',
        choice1: 'The Shepherd’s Crown', 
        choice2: 'The Amazing Maurice and His Educated Rodents.', 
        choice3: 'The Colour of Magic', 
        choice4: 'Raising Steam', 
      answer: 1
    },
    {
      question: 'In what year did Terry Prachett die?',
        choice1: '2018', 
        choice2: '2012', 
        choice3: '2020', 
        choice4: '2015', 
        answer: 4
    },
    {
        question: 'What apprenticeship job did Terry Prachett drop out of school for?',
        choice1: 'Plumber', 
        choice2: 'Copy Writer',
          choice3: 'Journalist', 
          choice4: 'Electrition', 
        answer: 3
      },
      {
        question: 'What did a young Terry Prachett want to be when he grew up?',
          choice1: 'Scientist', 
         choice2: 'Editor', 
          choice3: 'Journalist', 
          choice4: 'Astronomer', 
        answer: 4
      },    
      {
          question: 'How much did Pratchett receive for his first published story The Hades Business?',
            choice1: '£14', 
            choice2: '£140',
            choice3: '£50', 
            choice4: '£500', 
          answer: 1
        },
        {
          question: 'Who did Terry Pratchett marry in 1968?',
          choice1: 'Linn Pembroke', 
          choice2: 'Lyn Purves', 
          choice3: 'Lynette Purvell',
          choice4: 'Lynora Percy', 
          answer: 2
        },  
 ]
const MAX_AUTHOR_QUESTIONS = authorQuestions.length;
//constants
const Correct_Bonus = 1;
Max_Questions = 10;

 startAuthorQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableAuthorQuesions = [...authorQuestions];
  console.log(availableAuthorQuesions);
  getNewAuthorQuestion();
}
getNewAuthorQuestion = () => {
  questionCounter++;
 const authorQuestionIndex = Math.floor(Math.random() * availableAuthorQuesions.length);
 currentQuestion =availableAuthorQuesions[authorQuestionIndex];
 authorQuestionElement.innerText = currentQuestion.question;
}


startAuthorQuiz()