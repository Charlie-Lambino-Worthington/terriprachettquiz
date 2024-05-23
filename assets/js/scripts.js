const authorQuestionElement = document.getElementById('authorquestion');
const deathQuestionElement = document.getElementById('deathquestion');
//const witchQuestionElement = document.getElementById('witchquestion');
//const wizardQuestionElement = document.getElementById('wizardquestion');
//const moistQuestionElement = document.getElementById('moistquestion');

const choices = Array.from(document.getElementsByClassName('btn--default'));
//const deathchoices = Array.from(document.getElementsByClassName('btn--death'));


let currentquestion = {};
let currentDeathQuestion = {};

let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
//let availableDeathQuesions = [];
let availableAuthorQuesions = [];
//let availableWitchQuesions = [];
//let availableWizardQuesions = [];
//let availableMoistQuesions = [];

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
    question: 'Which witch is the odd one out as she is technically a wizard?',
      choice1: 'Eskarina Smith', 
      choice2: 'Lily Weatherwax', 
      choice3: 'Agnes Nitt', 
      choice4: 'Perspicacia Tick',
      answer: 1
  },
  {
    question: 'Who is the witch in Equal Rites who sells things to stop things that shouldn not be and help things that should?',
      choice1: 'Lucy Tockley',
      choice2: 'Aminta DeVice', 
      choice3: 'Erzulie Gogil', 
      choice4: 'Hilta Goatfounder', 
      answer: 4
    
  },
  {
      question: 'The three witches, in their role as godmothers in Wyrd Sisters give Tomjon three gifts. Which is not one of them?',
        choice1: 'A good memory', 
        choice2: 'Wisdom',
        choice3: 'The ability to make friends easily', 
        choice4: 'To be whoever he thinks he is', 
        answer: 2
      
    },
    {
      question: 'Which witch trained Magrat Garlick?',
        choice1: 'Granny Weatherwax',
        choice2: 'Gammer Brevis', 
        choice3: 'Desiderata Hollow', 
        choice4: 'Goodie Whemper',
      answer: 4
    },  
    {
      question: 'In Wyrd Sisters what familiar does Magrat have?',
        choice1: 'Cat', 
        choice2: 'Miner bird', 
        choice3: 'Frog', 
        choice4: 'Tortoyse ', 
      answer: 1
    },
    {
      question: 'In Witches Abroad, what does the fairy godmother wand belonging to Desiderata Hollow tend to reset to?',
        choice1: 'Mice', 
        choice2: 'Frogs', 
        choice3: 'Carrots', 
        choice4: 'Pumpkins', 
        answer: 4
    },
    {
        question: 'What is the natural number of witches in a coven?',
        choice1: '5', 
        choice2: '7',
          choice3: '1', 
          choice4: '3', 
        answer: 3
      },
      {
        question: 'What animal does Nanny Ogg infamously sing about?',
          choice1: 'Foxes', 
         choice2: 'Ferrets', 
          choice3: 'Squirrels', 
          choice4: 'Hedgehogs', 
        answer: 4
      },    
      {
          question: 'What does Magrat, the new fairy godmother, wear for the journey that upsets Granny Weatherwax?',
            choice1: 'Baggy trousers', 
            choice2: 'Old poncho',
            choice3: 'Cowboy boots', 
            choice4: 'Backless dress', 
          answer: 1
        },
        {
          question: 'In Lords and ladies why is Esme able to capture the unicorn?',
          choice1: 'Luck', 
          choice2: 'She is a virgin', 
          choice3: 'She is a powerful witch',
          choice4: 'She was able to get into its head', 
          answer: 2
        },  
 ]

 const wizardQuestions = [
  {
    question: 'Who is the oldest wizard on the Disc?',
      choice1: 'Greyhald Spold', 
      choice2: 'Cohen', 
      choice3: 'Rincewind', 
      choice4: 'Greyhald Spold',
      answer: 1
  },
  {
    question: 'According to the Light fantastic, what is a Thaum?',
      choice1: 'The amount of giant turtles in the universe',
      choice2: 'The amount of light emitted from the disc sun', 
      choice3: 'A non humanoids intelligence quotient', 
      choice4: 'The basic unit of magical strength', 
      answer: 4
    
  },
  {
      question: 'What particular skill did Rincewind have that was useful to the tourist, Twoflower?',
        choice1: 'He had a treasure map', 
        choice2: 'He spoke Trob',
        choice3: 'He was able to beat up anyone who threatened Twoflower', 
        choice4: 'He owned a fast horse', 
        answer: 2
      
    },
    {
      question: 'In Sourcery Coin was the eighth son of Ipslore, a disgruntled wizard who had grand ambitions for his son. When Death came calling for Ipslore, what object did he merge with to avoid dying and to guide his son in the future?',
        choice1: 'A potato',
        choice2: 'A spoon', 
        choice3: 'A boot', 
        choice4: 'A staff',
      answer: 4
    },  
    {
      question: 'What happened to the librarian at the unseen University?',
        choice1: 'He was accidentally turned into an orangutan', 
        choice2: 'He was blown up by a spell gone wrong', 
        choice3: 'He was injured in an avalanche of books', 
        choice4: 'He disappeared without a trace', 
      answer: 1
    },
    {
      question: 'What do wizards need to do to summon death?',
        choice1: 'Elemental manipulation', 
        choice2: 'Create a sigil', 
        choice3: 'Baba Umer Durga', 
        choice4: 'Rite of AshkEnte', 
        answer: 4
    },
    {
        question: 'Who replaced Galder Weatherwax as Archchancellor of the unseen University?',
        choice1: 'Ponder Stibbons', 
        choice2: 'Dr. Hix',
        choice3: 'Mustrum Ridcully', 
        choice4: 'Windle Poons', 
        answer: 3
      },
      {
        question: 'Which of these is not a real role at the Unseen University?',
          choice1: 'Professor of Cruel and Unusual Geography', 
         choice2: 'Head of the Department of Post-Mortem Communications', 
          choice3: 'Lecturer in Recent Runes', 
          choice4: 'Professor of Ancient Runes', 
        answer: 4
      },    
      {
          question: 'In Unseen academicals "Traitor!" roared Ridcully. Whom did he mean?',
            choice1: 'The Dean - for leaving UU', 
            choice2: 'The Librarian - for being also an honorary member of the night watch',
            choice3: 'Vetinari - for being too smart by half', 
            choice4: 'Stibbons - for supporting the wrong team', 
          answer: 1
        },
        {
          question: 'Notable Wizards of our Time is a delight for card collectors of all ages! Which member of the UU Faculty is in it??',
          choice1: 'Dr Hix', 
          choice2: 'None of them', 
          choice3: 'Rincewind',
          choice4: 'Mustrum Ridcully', 
          answer: 2
        },  
 ]

 const moistQuestions = [
  {
    question: 'What crime is Moist Von Lipwig hung for at the start of going postal?',
      choice1: 'Con artist and fraud', 
      choice2: 'Murder', 
      choice3: 'Assault', 
      choice4: 'Treason',
      answer: 1
  },
  {
    question: 'Why did the golem acting as parole officer to Moist Von Lipwig change its name to Gladys and start to dress and act more feminine?',
      choice1: 'The post office staff made her a dress',
      choice2: 'To attract the attention/ affection of Moist Von Lipvig ', 
      choice3: 'To go undercover in the post office', 
      choice4: 'Miss Maccalariat would not allow the "male" golems into the Post Office womens toilets to clean', 
      answer: 4
    
  },
  {
      question: 'Who primarily works the clacks due to their amazing talent for reading and coding despite having no tradition of written language, and their small size is handy in the cramped towers and among the machinery?',
        choice1: 'Golems', 
        choice2: 'Goblins',
        choice3: 'Gargoyles', 
        choice4: 'Children', 
        answer: 2
      
    },
    {
      question: 'Who is head of the Golem Trust?',
        choice1: 'Sachrissa Cripslock',
        choice2: 'Tolliver Groat', 
        choice3: 'Reacher Gilt', 
        choice4: 'Adora belle Dearheart ',
      answer: 4
    },  
    {
      question: 'After the death of Topsy Lavish, who becomes the new chairman of the bank?',
        choice1: 'Mr Fusspot', 
        choice2: 'Moist Von Lipwig', 
        choice3: 'Malvolio Bent', 
        choice4: 'Marko Lavish', 
      answer: 1
    },
    {
      question: 'WWhen  Moist meets the chairman of the Bank, Mrs Topsy Lavish, What is not something that she describes him as?',
        choice1: 'A charlie artful', 
        choice2: 'A rogue', 
        choice3: 'An all-round bunco artist', 
        choice4: 'A jammy dodger', 
        answer: 4
    },
    {
        question: 'What is not true of the mite coin?',
        choice1: 'They have got a hole in the middle', 
        choice2: 'They are worth half a farthing, but cost sixpence to make',
          choice3: 'They are made of gold', 
          choice4: 'They are very small', 
        answer: 3
      },
      {
        question: 'At the beginning of the Making Money, what is Moist von Lipwig, Postmaster General, doing??',
          choice1: 'Trying to make money', 
         choice2: 'Trying to design a new Ankh-Morpork stamp', 
          choice3: 'Trying on his gold suit', 
          choice4: 'Trying to break into his own Post Office', 
        answer: 4
      },    
      {
          question: 'What terrible secret was Mr Bent hiding?',
            choice1: 'He was a clown', 
            choice2: 'He was a vampire',
            choice3: 'He was a bogeyman', 
            choice4: 'He was a werewolf', 
          answer: 1
        },
        {
          question: 'What is the name of the young self-taught engineer from Sto Lat who invented a locomotive, which he named Iron Girder??',
          choice1: 'Rhys Rhysson', 
          choice2: 'Dick Simnel', 
          choice3: 'Harry king',
          choice4: 'Samuel Vimes', 
          answer: 2
        },  
 ]

const MAX_AUTHOR_QUESTIONS = authorQuestions.length;
//const MAX_DEATH_QUESTIONS = deathQuestions.length;
//const MAX_WITCH_QUESTIONS = witchQuestions.length;
//const MAX_WIZARD_QUESTIONS = wizardQuestions.length;
//const MAX_MOIST_QUESTIONS = moistQuestions.length;
//constants
const Correct_Bonus = 1;
Max_Questions = 10;


//author quiz
 startAuthorQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableAuthorQuesions = [...authorQuestions];
  getNewAuthorQuestion();
}
getNewAuthorQuestion = () => {
  questionCounter++;
 const authorQuestionIndex = Math.floor(Math.random() * availableAuthorQuesions.length);
 currentQuestion = availableAuthorQuesions[authorQuestionIndex];
 authorQuestionElement.innerText = currentQuestion.question;

 choices.forEach((choice) => {
  const number = choice.dataset['number'];
  choice.innerText = currentQuestion['choice' + number];
});
availableAuthorQuesions.splice(authorQuestionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
      if (!acceptingAnswers) return;

      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
  
      const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
  
      selectedChoice.parentElement.classList.add(classToApply);
  
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewAuthorQuestion();
      }, 1000);
  });
});


startAuthorQuiz()

//death quiz
//startDeathQuiz = () => {
 // questionCounter = 0;
 // score = 0;
 // availableDeathQuesions = [...deathQuestions];
 // console.log(availabledeathQuesions);
//  getNewDeathQuestion();
//}
//getNewDeathQuestion = () => {
 // questionCounter++;
 //const deathQuestionIndex = Math.floor(Math.random() * availableDeathQuesions.length);
 //currentDeathQuestion =availableDeathQuesions[deathQuestionIndex];
 //deathQuestionElement.innerText = currentDeathQuestion.question;

//});

//availableDeathQuesions.splice(deathQuestionIndex, 1);
//acceptingAnswers = true;



//startDeathQuiz()