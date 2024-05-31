const questionElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('btn--default'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const MAX_QUESTIONS = 10;
const CORRECT_BONUS = 1;

//Questions Arrays

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
 ];

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
 ];

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
 ];

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
 ];

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
 ];

 const guardQuestions = [
  {
    question: 'Carrot is from which species?',
      choice1: 'Dwarf', 
      choice2: 'Golem', 
      choice3: 'Vampire', 
      choice4: 'Werewolf',
      answer: 1
  },
  {
    question: 'In which book is the librarian made an honorary member of the watch?',
      choice1: 'Night Watch',
      choice2: 'Thud! ', 
      choice3: 'Snuff ', 
      choice4: 'Guards Guards', 
      answer: 4
    
  },
  {
      question: 'Which member of the Watch communicated with their wife via written notes??',
        choice1: 'Captain Angua von Uberwald', 
        choice2: 'Sergeant Fred Colon',
        choice3: 'Sergeant Cheery Littlebottom', 
        choice4: 'Corporal Buggy Swires', 
        answer: 2
      
    },
    {
      question: 'Who is Carrot staying with when he first moves to join the city watch?',
        choice1: 'Sam Vimes',
        choice2: 'Mrs. Cake', 
        choice3: 'Granny Weatherwax', 
        choice4: 'Mrs. Palm and her "daughters"',
      answer: 4
    },  
    {
      question: 'When the Watch House on Treacle Mine Road was destroyed, which building became the new Night Watch base?',
        choice1: 'Pseudopolis Yard', 
        choice2: 'The Mended Drum', 
        choice3: 'The Temple of Small Gods', 
        choice4: 'The Patricians Palace', 
      answer: 1
    },
    {
      question: 'The Watch were rewarded for protecting the city from a dragon. What did they ask for?',
        choice1: ' Gold chain mail and silver boots', 
        choice2: ' Ten barrels of beer and all the peanuts in Ankh-Morpork', 
        choice3: 'One million dollars', 
        choice4: 'A kettle, a dartboard, and a small pay raise', 
        answer: 4
    },
    {
        question: 'Which species did Commander Vimes have a particular hatred of?',
        choice1: 'Werewolves', 
        choice2: 'Gargoyles',
          choice3: 'Vampires ', 
          choice4: 'Dwarfsn', 
        answer: 3
      },
      {
        question: 'Whose wages consisted of five pigeons a week?',
          choice1: ' Captain Carrot', 
         choice2: 'Corporal Nobbs', 
          choice3: 'Sergeant Colon', 
          choice4: 'Constable Downspout', 
        answer: 4
      },    
      {
          question: 'Who did the guards that Vimes nicknamed Nobbski and Colonesque refuse to let into Bonk without a "pisspot"?',
            choice1: 'Detritus', 
            choice2: 'The Low King',
            choice3: 'Sam Vimes', 
            choice4: 'Captain Colon ', 
          answer: 1
        },
        {
          question: 'Which of these crimes was carrot not told not to enforce, but allowed to throw the book at?',
          choice1: 'Head of the Theives Guild for Conspiracy to Commit Crime, Section 14 (iii) of the General Felonies Act 1678', 
          choice2: 'Countless charges against the king of Ankh-Morpork', 
          choice3: 'Unsheathed edged weapons, Section 3 of Public Ale Houses (Opening) Act 1678',
          choice4: 'Licensed Premises (Hygiene) Acts of 1433', 
          answer: 2
        },  
 ];

 const litQuestions = [
  {
    question: 'Which of these is not one of the Science of Disk world Series?',
      choice1: 'The Globe', 
      choice2: 'Judgement Day', 
      choice3: 'Darwins Watch', 
      choice4: 'The Edge',
      answer: 4
  },
  {
    question: 'Which witch has a published cookbook?',
      choice1: 'Granny Weatherwax',
      choice2: 'Magrat Garlick', 
      choice3: 'Tiffany Aching', 
      choice4: 'Nanny Ogg', 
      answer: 4
    
  },
  {
      question: 'Which of these is not a recipe from a published cookbook?',
        choice1: 'Strawberry Wobbler', 
        choice2: 'Dried Frog Kebabs',
        choice3: 'Distressed Pudding', 
        choice4: 'Deep-Sea Blowfish', 
        answer: 2
      
    },
    {
      question: 'Mrs Georgina Bradshaw’s invaluable guide to the destinations and diversions of the railway gives suggestions for 3 of these which is not included?',
        choice1: 'Ticketing',
        choice2: 'Transporting your swamp dragon', 
        choice3: 'Elegant resorts and quaint inns', 
        choice4: 'Packing for your travels',
      answer: 4
    },  
    {
      question: 'Who authorised Mrs Bradshaw’s Handbook?',
        choice1: 'Mr Lipwig ', 
        choice2: 'Dick Simnel', 
        choice3: 'Harry king', 
        choice4: 'Lord Havelock Vetinari', 
      answer: 1
    },
    {
      question: 'In her book Nannny Ogg imparts her thoughts on?',
        choice1: 'Life', 
        choice2: 'Death', 
        choice3: 'Etiquette', 
        choice4: 'Royalty', 
        answer: 4
    },
    {
        question: 'At six o’clock every day, without fail, with no excuses, Sam Vimes must go home to read what book to his little boy.?',
        choice1: 'Where’s My pony?', 
        choice2: 'Where’s My Cat?',
          choice3: 'Where’s My Cow?', 
          choice4: 'Where’s My lamb?', 
        answer: 3
      },
      {
        question: 'Which is not a published map of DiskWorld?',
          choice1: 'THE COMPLEAT DISCWORLD ATLAS', 
         choice2: 'THE DISCWORLD MAPP', 
          choice3: 'THE COMPLEAT ANKH-MORPORK CITY GUIDE', 
          choice4: 'A TOORIST GUIDE TO STO LAT', 
        answer: 4
      },    
      {
          question: 'What is not described in DEATH’S DOMAIN?',
            choice1: 'A bottomless fishing pond', 
            choice2: 'A golf course that’s not so much crazy as insane',
            choice3: 'A useless maze', 
            choice4: 'The dark gardens ', 
          answer: 1
        },
        {
          question: 'Which  is not a real quote from The Wit And Wisdom Of Discworld?',
          choice1: 'A marriage is always made up of two people who are prepared to swear that only the other one snores.', 
          choice2: 'Life is short. Smile while you still have teeth.', 
          choice3: 'Inside every old person is a young person wondering what happened.',
          choice4: 'When the least they could do to you was everything, then the most they could do to you suddenly held no terror.', 
          answer: 2
        },  
 ];

 const diskQuestions = [
  {
    question: 'What was the famous battle between the Trolls and the Dwarves called?',
      choice1: 'The Battle of Koom Valley', 
      choice2: 'The Battle of Little Smegging', 
      choice3: 'The Battle of Sto Plains', 
      choice4: 'The Battle of Bad Ass',
      answer: 1
  },
  {
    question: 'Why does the Diskworld have so many stone circles?',
      choice1: 'Because its so hard to wash the blood off the altar slab after the first dozen or so human sacrifices.',
      choice2: 'No-one knows', 
      choice3: 'Because the gods demand it', 
      choice4: 'Because its always cheaper to buy a new 33-MegaLith circle than upgrade your old one.', 
      answer: 4
    
  },
  {
      question: 'Where does Twoflower come from?',
        choice1: 'The Sto Plains', 
        choice2: 'The Counterweight Continent',
        choice3: 'Klatch', 
        choice4: 'The Wyrmberg', 
        answer: 2
      
    },
    {
      question: 'What is Lord Vetinari’s first name?',
        choice1: 'Howard',
        choice2: 'Horatio', 
        choice3: 'Heathcliff', 
        choice4: 'Havelock',
      answer: 4
    },  
    {
      question: 'What does Om unexpectedly manifest as in Small Gods?',
        choice1: 'A tortoise', 
        choice2: 'A cow', 
        choice3: 'A mouse', 
        choice4: 'A hedgehog', 
      answer: 1
    },
    {
      question: 'Pteppic is a graduate of which guild?',
        choice1: 'Theives', 
        choice2: 'Merchants', 
        choice3: 'Alchemists', 
        choice4: ' Assassins', 
        answer: 4
    },
    {
        question: 'Before becoming Patritian, which guild did Lord Vetenari belong to?',
        choice1: 'Beggers', 
        choice2: 'Theives',
          choice3: 'Assasins', 
          choice4: 'Merchants', 
        answer: 3
      },
      {
        question: 'WWhat do the initials UU stand for?',
          choice1: 'Unusual University', 
         choice2: 'Undetectible University', 
          choice3: 'Underground University', 
          choice4: 'Unseen University', 
        answer: 4
      },    
      {
          question: 'Which of these is not the name of a place in Discworld?',
            choice1: 'Wyrmberg', 
            choice2: 'Klatch',
            choice3: 'Nimbusvale', 
            choice4: 'Quirm', 
          answer: 3
        },
        {
          question: 'What is Discworlds magic number?',
          choice1: '4', 
          choice2: '8', 
          choice3: '13',
          choice4: '7', 
          answer: 2
        },  
 ];


//category select function

const selectCategory = (category) => {
  switch(category) {
      case "author":
        availableQuestions = [...authorQuestions];
        document.getElementById("name").innerText = "Terry Prachett Author Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Author Quiz";
        document.getElementById("img").src = "assets/images/tmotp_web_0.jpg";
        loadQuiz();
        break;
      case "death":
        availableQuestions = [...deathQuestions];
        document.getElementById("name").innerText = "Terry Prachett Death Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Death Quiz";
        document.getElementById("img").src = "assets/images/discworld_death.jpg";
        loadQuiz();
        break;
      case "witch":
        availableQuestions = [...witchQuestions];
        document.getElementById("name").innerText = "Terry Prachett Witches Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Witches Quiz";
        document.getElementById("img").src = "assets/images/nannyogg.webp";
        loadQuiz();
        break;
      case "wizard":
        availableQuestions = [...wizardQuestions];
        document.getElementById("name").innerText = "Terry Prachett Wizards Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Wizards Quiz";
        document.getElementById("img").src = "assets/images/wizards-faculty-kidby.jpg";
        loadQuiz();
        break;
      case "moist":
        availableQuestions = [...moistQuestions];
        document.getElementById("name").innerText = "Terry Prachett Industrial Revolution Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Industrial Revolution Quiz";
        document.getElementById("img").src = "assets/images/raisingsteam.jpg";
        loadQuiz();
        break;
      case "disk":
        availableQuestions = [...diskQuestions];
        document.getElementById("name").innerText = "Terry Prachett DiskWorld Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Diskworld Quiz";
        document.getElementById("img").src = "assets/images/Discworld.jpg";
        loadQuiz();
        break;
      case "literature":
        availableQuestions = [...litQuestions];
        document.getElementById("name").innerText = "Terry Prachett Literature Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Literature Quiz";
        document.getElementById("img").src = "assets/images/products-1515.jpg";
        loadQuiz();
        break;
      case "guards":
        availableQuestions = [...guardQuestions];
        document.getElementById("name").innerText = "Terry Prachett Guards Quiz";
        document.getElementById("quizname").innerText = "Terry Prachett Guards Quiz";
        document.getElementById("img").src = "assets/images/guards.jpg";
        loadQuiz();
        break;
      }
  };

// quiz


const loadQuiz = () => {
  questionCounter = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hide");
  document.getElementById("category").classList.add("hide");
  getNewQuestion();
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // Go to the end page
    displayFinalScore();
  }

  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionElement.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS); 
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

//display final score 
function displayFinalScore() {
  document.getElementById("end").classList.remove("hide");
  document.getElementById("quiz").classList.add("hide");
  let finalScore = score;
  document.getElementById("finalscore").innerText = `${finalScore}/${MAX_QUESTIONS}`;
}

//play again function
const playAgain = () => {
  questionCounter = 0;
    score = 0;
    document.getElementById("end").classList.add("hide");
    document.getElementById("category").classList.remove("hide");
    document.getElementById("score").innerText = 0;
};

