const authorQuestionElement = document.getElementById('authorquestion');
const choices = Array.from(document.getElementsByClassName('btn--default'));

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

 const deathQuestions = [
  {
    question: 'Who is deaths apprentice?',
      choice1: 'Tod', 
      choice2: 'Nex', 
      choice3: 'Mort', 
      choice4: 'Sterben',
      answer: 3
  },
  {
    question: 'Who does deaths apprentice marry?',
      choice1: 'Ysabell',
      choice2: 'Isabelle', 
      choice3: 'Yasmine', 
      choice4: 'Ilsabet', 
      answer: 1
    
  },
  {
      question: ' What is deaths stallion called?',
        choice1: 'Dobin', 
        choice2: 'Shadow',
        choice3: 'Binky', 
        choice4: 'Sabre', 
        answer: 3
      
    },
    {
      question: 'Which of these is not a real Terry Prachett book from the death series?',
        choice1: 'Death and what comes next',
        choice2: 'Reaper man', 
        choice3: 'Soul music', 
        choice4: 'Echoes of Eternity',
      answer: 4
    },  
    {
      question: 'What colour do deaths eyes glow?',
        choice1: 'Blue', 
        choice2: 'Red', 
        choice3: 'Yellow', 
        choice4: 'Green', 
      answer: 1
    },
    {
      question: 'What kind of household pet is death particularly fond of?',
        choice1: 'Rabbits', 
        choice2: 'Fish', 
        choice3: 'Dogs', 
        choice4: 'Cats', 
        answer: 4
    },
    {
        question: 'What job did Albert do before becoming deaths manservant?',
        choice1: 'Assassin', 
        choice2: 'Barman',
          choice3: 'Wizard', 
          choice4: 'Theif', 
        answer: 3
      },
      {
        question: 'Who shoes deaths horse?',
          choice1: 'Throat Dibbler', 
         choice2: 'William Scuggins', 
          choice3: 'Stanley Howler', 
          choice4: 'Jason Ogg', 
        answer: 4
      },    
      {
          question: 'Where did death work when he had some free time when his apprentice was working for him?',
            choice1: 'Hargas house of ribs', 
            choice2: 'Assassins guild ',
            choice3: 'The mended drum', 
            choice4: 'The big oyster', 
          answer: 1
        },
        {
          question: 'When death is forced to retire who does he take a room with?',
          choice1: 'Miss Iodine Maccalariat', 
          choice2: 'Miss Renata Flitworth', 
          choice3: 'Lady Ysabell, Duchess of Sto Helit',
          choice4: 'Mr Salzella', 
          answer: 2
        },  
 ]

 const witchQuestions = [
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

 choices.forEach((choice) => {
  const number = choice.dataset['number'];
  choice.innerText = currentQuestion['choice' + number];
});
}


startAuthorQuiz()