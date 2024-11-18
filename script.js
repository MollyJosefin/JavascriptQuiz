document.addEventListener("DOMContentLoaded", () => {
  // Dölj "Nästa fråga"-knappen vid sidstart
  nextButton.classList.add("hidden");
  restartButton.classList.add("hidden");
  nextChapterButton.classList.add("hidden");
});

const chapters = {
  Pseudokod: [
    {
      question: "Vad används START och END till i pseudokod?",
      answers: [
        "För att markera början och slutet av programmet",
        "För att starta och stoppa programmet automatiskt",
        "För att markera funktioner i koden"
      ],
      correct: 0,
      explanation:
        "START och END används för att markera var pseudokoden börjar och slutar, vilket hjälper till att strukturera koden tydligt."
    },
    {
      question: "Vad gör en FUNCTION i pseudokod?",
      answers: [
        "Den beskriver en uppgift eller algoritm som kan anropas",
        "Den används för att sätta variabler",
        "Den används för att slumpa fram ett nummer"
      ],
      correct: 0,
      explanation:
        "En FUNCTION beskriver en specifik uppgift som kan anropas flera gånger i programmet."
    },
    {
      question: "Vilken syntax används för att skapa en loop i pseudokod?",
      answers: [
        "LOOP through 'start' to 'end'",
        "FOR i = 0 TO 10",
        "WHILE true THEN"
      ],
      correct: 0,
      explanation:
        "I pseudokod används ofta syntaxen 'LOOP through' följt av ett start- och slutvärde för att skapa en loop."
    },
    {
      question: "Vad gör villkorssatsen IF...THEN i pseudokod?",
      answers: [
        "Den kör en kodsnutt om villkoret är uppfyllt",
        "Den stoppar programmet om villkoret är falskt",
        "Den används för att definiera funktioner"
      ],
      correct: 0,
      explanation:
        "IF...THEN används för att kontrollera ett villkor och köra specifik kod om villkoret är sant."
    },
    {
      question: "Vilken pseudokod kan användas för att skapa FizzBuzz?",
      answers: [
        "Loopa från 1 till 100, kontrollera om ett tal är delbart med 3 och/eller 5",
        "Anropa en funktion som slumpmässigt genererar nummer mellan 1 och 100",
        "Sätt alla nummer mellan 1 och 100 till en lista och kontrollera alla samtidigt"
      ],
      correct: 0,
      explanation:
        "FizzBuzz kan implementeras genom att loopa från 1 till 100 och använda villkor för att skriva ut 'Fizz', 'Buzz' eller 'FizzBuzz'."
    }
  ],
  Datatypes: [
    {
      question: "Vilket av följande tecken visar ett kodblock?",
      answers: ["[]", "()", "{}"],
      correct: 2,
      explanation: "I JavaScript används {} för att definiera kodblock, till exempel inom funktioner eller if-satser."
    },
    {
      question: "Vilket av följande är ett korrekt sätt att skriva en sträng?",
      answers: ['"Hello World"', "'Hello World'", "`Hello World`"],
      correct: [0, 1, 2],
      explanation: "Trick Question! Alla svaren var rätt! I JavaScript kan strängar skapas med dubbla citattecken, enkla citattecken eller backticks."
    },
    {
      question: "Vad är resultatet av följande kod: let z; console.log(z);?",
      answers: ["undefined", "null", "ReferenceError"],
      correct: 0,
      explanation: "Om en variabel deklareras men inte tilldelas ett värde, kommer dess värde att vara 'undefined'."
    },
    {
      question: "Vilken av följande är en boolean?",
      answers: ["'true'", "true", "1"],
      correct: 1,
      explanation: "I JavaScript är 'true' en sträng, medan true är en boolean."
    },
    {
      question: "Vad är datatypen för följande uttryck: 5 && 8?",
      answers: ["number", "boolean", "undefined"],
      correct: 0,
      explanation: "'&&' operatorn returnerar det sista sanna värdet om båda är sanna, vilket i detta fall är ett tal (number)."
    }
  ],
  IfElse: [
    {
      question: "Vad gör en if-sats i JavaScript?",
      answers: [
        "Kör en kod om ett villkor är sant",
        "Kör alltid koden oavsett villkor",
        "Stoppar kod från att köras"
      ],
      correct: 0,
      explanation:
        "En if-sats används för att köra en kodblock endast om det angivna villkoret är sant."
    },
    {
      question: "Vilken syntax används för en if-sats i JavaScript?",
      answers: [
        "if (villkor) { // kod här }",
        "if villkor then { // kod här }",
        "if villkor: { // kod här }"
      ],
      correct: 0,
      explanation:
        "Den korrekta syntaxen för en if-sats i JavaScript är 'if (villkor) { // kod här }'."
    },
    {
      question: "Vad skrivs ut i följande kod? if (5 > 3) { console.log('Sant'); }",
      answers: ["Sant", "Falskt", "Inget skrivs ut"],
      correct: 0,
      explanation:
        "Eftersom villkoret 5 > 3 är sant, kommer 'Sant' att skrivas ut i konsolen."
    },
    {
      question: "Vad händer om villkoret i en if-sats inte är sant?",
      answers: [
        "Koden inuti if-satsen körs ändå",
        "Koden inuti if-satsen körs inte",
        "Programmet slutar köras"
      ],
      correct: 1,
      explanation:
        "Om villkoret inte är sant, kommer koden inuti if-satsen inte att köras."
    },
    {
      question: "Vad är en else-sats i JavaScript?",
      answers: [
        "Kör en kod om villkoret i if-satsen är sant",
        "Kör en kod om inget villkor är sant",
        "Kör alltid koden oavsett villkor"
      ],
      correct: 1,
      explanation:
        "En else-sats används för att köra en kodblock om inget av de tidigare villkoren är sant."
    },
    {
      question: "Vad skrivs ut av följande kod? let condition = true; if (condition) { console.log('Sant'); } else { console.log('Falskt'); }",
      answers: ["Sant", "Falskt", "SyntaxError"],
      correct: 0,
      explanation: "Eftersom condition är true, skrivs 'Sant' ut i konsolen."
    },
    {
      question: "Vad händer om följande kod körs? let length = 122; if (length >= 130) { console.log('Du får åka Balder!'); }",
      answers: [
        "'Du får åka Balder!' skrivs ut",
        "Inget skrivs ut",
        "Ett fel kastas"
      ],
      correct: 1,
      explanation: "Eftersom 122 inte är större än eller lika med 130, kommer inget att skrivas ut."
    },
    {
      question: "Vilken operator används för att kontrollera om två värden är lika i JavaScript?",
      answers: ["==", "===", "="],
      correct: 1,
      explanation: "'===' används för strikt likhet, vilket inkluderar både värde och datatyp."
    },
    {
      question: "Hur kan du skapa en if-sats som kontrollerar om ett nummer är både större än 10 och mindre än 20?",
      answers: [
        "if (num > 10 || num < 20)",
        "if (num > 10 && num < 20)",
        "if (num >= 10 && num <= 20)"
      ],
      correct: 1,
      explanation: "Operatorn '&&' används för att säkerställa att båda villkoren är uppfyllda."
    }
  ],  
  Variables: [
    {
      question: "Vad är en variabel i JavaScript?",
      answers: [
        "En behållare för att lagra data",
        "En funktion som kör kod",
        "Ett villkor som kontrollerar logik"
      ],
      correct: 0,
      explanation: "En variabel är en behållare för att lagra data som kan användas i programmet."
    },
    {
      question: "Vilket av följande är INTE ett sätt att deklarera en variabel i JavaScript?",
      answers: ["var", "let", "define"],
      correct: 2,
      explanation: "'define' är inte ett sätt att deklarera en variabel i JavaScript."
    },    
    {
      question: "Vilket av följande är ett giltigt sätt att deklarera en variabel i JavaScript?",
      answers: ["var x = 10;", "variable x = 10;", "int x = 10;"],
      correct: 0,
      explanation: "'var x = 10;' är korrekt syntax för att deklarera en variabel i JavaScript."
    },
    {
      question: "Vad används 'let' till i JavaScript?",
      answers: [
        "För att deklarera en variabel med blockscope",
        "För att definiera en konstant",
        "För att skapa en klass"
      ],
      correct: 0,
      explanation: "'let' används för att deklarera en variabel som är blockscope, vilket betyder att den bara är tillgänglig inom det block där den definieras."
    }
  ],
  LogicalOperators: [
    {
    question: "Vad är en logisk operator i JavaScript?",
    answers: [
      "En operator som kombinerar eller inverterar logiska värden",
      "En funktion som loopar igenom värden",
      "Ett verktyg för att skapa variabler"
    ],
    correct: 0,
    explanation: "Logiska operatorer som '&&', '||' och '!' används för att kombinera eller invertera logiska värden."
  },
  {
    question: "Vad returnerar operatorn '!' i JavaScript?",
    answers: [
      "Det logiska AND-värdet",
      "Det logiska OR-värdet",
      "Negationen av ett logiskt värde"
    ],
    correct: 2,
    explanation: "'!' är operatorn för negation och inverterar det logiska värdet, t.ex. '!true' blir 'false'."
  },  
    {
      question: "Vad returnerar uttrycket: true && false?",
      answers: ["true", "false", "undefined"],
      correct: 1,
      explanation: "'&&' returnerar false om någon operand är false."
    },
    {
      question: "Vad returnerar uttrycket: true || false?",
      answers: ["true", "false", "undefined"],
      correct: 0,
      explanation: "'||' returnerar true om minst en operand är true."
    }
  ],
  Arrays: [
    {
    question: "Vad är en array i JavaScript?",
    answers: [
      "En funktion för att skapa variabler",
      "En lista som lagrar flera värden",
      "Ett objekt som alltid lagrar siffror"
    ],
    correct: 1,
    explanation: "En array är en lista som kan lagra flera värden i en enda variabel, t.ex. ['äpple', 'banan', 'apelsin']."
  },
  {
    question: "Hur skapar man en tom array i JavaScript?",
    answers: ["let myArray = [];", "let myArray = {}; ", "let myArray = ();"],
    correct: 0,
    explanation: "En tom array skapas med hakparenteser, t.ex. 'let myArray = [];'."
  },  
    {
      question: "Vilken metod används för att lägga till ett element till en array?",
      answers: [".push()", ".add()", ".append()"],
      correct: 0,
      explanation: "Metoden '.push()' används för att lägga till ett eller flera element till slutet av en array."
    },
    {
      question: "Hur kan du iterera över en array?",
      answers: ["for loop", "forEach()", "Både för loop och forEach()"],
      correct: 2,
      explanation: "Både for loop och forEach() kan användas för att iterera över en array."
    }
  ],
  Loops: [
    {
      question: "Vad är en loop i programmering?",
      answers: [
        "Ett sätt att repetera kod flera gånger",
        "Ett sätt att deklarera variabler",
        "Ett villkor som kontrollerar logik"
      ],
      correct: 0,
      explanation: "En loop används för att repetera kod flera gånger tills ett villkor är uppfyllt."
    },
    {
      question: "Vilken loop upprepas medan ett villkor är sant?",
      answers: ["while-loop", "for-loop", "do-while-loop"],
      correct: 0,
      explanation: "'while'-loopen körs så länge som villkoret är sant."
    },    
    {
      question: "Vad är den korrekta syntaxen för en 'for'-loop i JavaScript?",
      answers: [
        "for (i in range(10)) {}",
        "for (let i = 0; i < 10; i++) {}",
        "loop (i = 0; i < 10; i++) {}"
      ],
      correct: 1,
      explanation: "'for (let i = 0; i < 10; i++) {}' är den korrekta syntaxen för en for-loop i JavaScript."
    },
    {
      question: "Vilken loop används bäst om antalet iterationer inte är känt i förväg?",
      answers: ["for-loop", "while-loop", "forEach"],
      correct: 1,
      explanation: "'while'-loopen används när du inte vet hur många iterationer som behövs."
    }
  ],
  LoopArrays: [
    {
      question: "Vad används en loop för när man arbetar med en array?",
      answers: [
        "För att iterera över alla element i arrayen",
        "För att skapa en ny array",
        "För att deklarera en variabel"
      ],
      correct: 0,
      explanation: "Loopar används ofta för att iterera över alla element i en array och utföra en operation för varje element."
    },
    {
      question: "Vilken metod används för att iterera över en array med en funktion för varje element?",
      answers: ["array.forEach()", "array.filter()", "array.reduce()"],
      correct: 0,
      explanation: "Metoden '.forEach()' används för att köra en funktion för varje element i arrayen."
    },    
    {
      question: "Hur itererar du över en array i JavaScript?",
      answers: [
        "for (let i = 0; i < array.length; i++) {}",
        "array.forEach(element => {})",
        "Båda ovanstående"
      ],
      correct: 2,
      explanation: "Både for-loopen och forEach-metoden kan användas för att iterera över en array."
    },
    {
      question: "Vilken metod används för att filtrera en array?",
      answers: [".map()", ".filter()", ".reduce()"],
      correct: 1,
      explanation: "Metoden '.filter()' används för att skapa en ny array med element som uppfyller ett villkor."
    }
  ],
  Switch: [
    {
      question: "Vad är en switch-sats i JavaScript?",
      answers: [
        "En sats som används för att jämföra ett värde med flera alternativ",
        "En loop som upprepar kod flera gånger",
        "Ett villkor som kontrollerar logik"
      ],
      correct: 0,
      explanation: "En switch-sats används för att jämföra ett värde med flera olika alternativ ('cases') och utföra kod baserat på vilket som matchar."
    },
    {
      question: "Vad är syftet med 'default' i en switch-sats?",
      answers: [
        "Att hantera alla värden som inte matchar något 'case'",
        "Att avsluta switch-satsen",
        "Att jämföra två värden"
      ],
      correct: 0,
      explanation: "'default' används för att hantera alla värden som inte matchar något av 'case'-blocken."
    },    
    {
      question: "Vad används 'switch'-satsen till i JavaScript?",
      answers: [
        "För att utföra olika block baserat på ett specifikt värde",
        "För att iterera över en array",
        "För att hantera asynkrona operationer"
      ],
      correct: 0,
      explanation: "'switch'-satsen används för att utföra olika kodblock baserat på ett specifikt värde."
    },
    {
      question: "Vad händer om 'break' saknas i ett 'case'-block i en 'switch'-sats?",
      answers: [
        "Koden hoppar till nästa 'case'",
        "Ett fel kastas",
        "Programmet avslutas"
      ],
      correct: 0,
      explanation: "Om 'break' saknas kommer koden att fortsätta till nästa 'case' tills ett 'break' hittas."
    }
  ],
  Functions: [
    {
      question: "Vad är en funktion i JavaScript?",
      answers: [
        "En block med kod som kan återanvändas",
        "En variabel som lagrar flera värden",
        "En operator som kombinerar logiska värden"
      ],
      correct: 0,
      explanation: "En funktion är ett block av kod som kan återanvändas flera gånger genom att anropas med sitt namn."
    },
    {
      question: "Hur anropar du en funktion i JavaScript?",
      answers: [
        "functionName();",
        "call functionName();",
        "function functionName();"
      ],
      correct: 0,
      explanation: "En funktion anropas genom att skriva dess namn följt av parenteser, t.ex. 'functionName();'."
    },    
    {
    question: "Hur deklarerar du en funktion i JavaScript?",
    answers: [
      "function myFunction() {}",
      "def myFunction() {}",
      "let myFunction = () => {}"
    ],
    correct: 0,
    explanation: "En funktion deklareras med nyckelordet 'function', t.ex. 'function myFunction() {}'."
  },
  {
    question: "Samt här, hur deklarerar du en funktion i JavaScript?",
    answers: [
      "function myFunction() { // kod här }",
      "let myFunction = function() { // kod här }",
      "Båda ovanstående"
    ],
    correct: 2,
    explanation: "Det finns flera sätt att deklarera funktioner i JavaScript, inklusive vanliga funktioner och funktioner tilldelade till variabler."
  },
  {
    question: "Vad returnerar en funktion om inget 'return'-uttalande finns?",
    answers: ["undefined", "null", "0"],
    correct: 0,
    explanation: "Om inget 'return'-uttalande finns returnerar en funktion 'undefined' som standard."
  },
  {
    question: "Vad är resultatet av följande kod: function add(a, b) { return a + b; } console.log(add(5, 3));",
    answers: ["8", "undefined", "Error"],
    correct: 0,
    explanation: "Funktionen 'add' returnerar summan av 5 och 3, vilket är 8."
  },
  {
    question: "Vilket är ett korrekt sätt att använda en arrow function?",
    answers: [
      "let add = (a, b) => a + b;",
      "function add(a, b) => a + b;",
      "let add = (a, b) a + b;"
    ],
    correct: 0,
    explanation: "Arrow functions har en specifik syntax som börjar med '=>' efter parametrarna."
  }
  ],
  GitGitHub: [
    {
      question: "Vad är Git?",
      answers: [
        "Ett programmeringsspråk",
        "Ett versionshanteringssystem",
        "En webbtjänst för att lagra kod"
      ],
      correct: 1,
      explanation:
        "Git är ett versionshanteringssystem som används för att spåra ändringar i kod och samarbeta med andra utvecklare."
    },
    {
      question: "Vad är GitHub?",
      answers: [
        "En molnbaserad plattform för att lagra Git-repositorier",
        "Ett operativsystem för utvecklare",
        "Ett programmeringsspråk"
      ],
      correct: 0,
      explanation:
        "GitHub är en molnbaserad plattform där utvecklare kan lagra sina Git-repositorier och samarbeta med andra."
    },
    {
      question: "Vad används kommandot `git init` till?",
      answers: [
        "För att initiera en ny Git-repository",
        "För att klona ett befintligt repository",
        "För att spara ändringar i ett repository"
      ],
      correct: 0,
      explanation:
        "`git init` används för att initiera en ny Git-repository i en mapp."
    },
    {
      question: "Vilket kommando används för att lägga till ändringar till staging-området?",
      answers: [
        "`git add`",
        "`git commit`",
        "`git push`"
      ],
      correct: 0,
      explanation:
        "`git add` används för att lägga till ändringar i staging-området innan de committas."
    },
    {
      question: "Vad gör kommandot `git commit`?",
      answers: [
        "Det sparar ändringar i staging-området permanent i historiken",
        "Det skickar ändringar till GitHub",
        "Det tar bort ändringar från staging-området"
      ],
      correct: 0,
      explanation:
        "`git commit` sparar ändringar i staging-området permanent i Git-repositoriets historik."
    },
    {
      question: "Hur kopierar man en befintlig repository från GitHub till sin dator?",
      answers: [
        "`git pull`",
        "`git clone`",
        "`git fork`"
      ],
      correct: 1,
      explanation:
        "`git clone` används för att kopiera en befintlig repository från GitHub till din dator."
    },
    {
      question: "Vad används kommandot `git push` till?",
      answers: [
        "För att skicka ändringar från den lokala repositoryn till en fjärrrepository",
        "För att ladda ner ändringar från en fjärrrepository",
        "För att initiera ett nytt repository"
      ],
      correct: 0,
      explanation:
        "`git push` används för att skicka lokala ändringar till en fjärrrepository, till exempel på GitHub."
    }
  ]
};

let currentChapter = null;
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const resultContainer = document.getElementById("result");
const nextChapterButton = document.getElementById("next-chapter-button");
const homeButton = document.getElementById("home-button");

// Fisher-Yates-algoritm för att blanda svar
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Kapitelval
document.querySelectorAll(".chapter-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentChapter = button.getAttribute("data-chapter");
    currentQuestionIndex = 0;
    score = 0;

    // Markera aktiv knapp
    document.querySelectorAll(".chapter-button").forEach((btn) => {
      btn.classList.remove("active-chapter"); // Ta bort från andra knappar
    });
    button.classList.add("active-chapter"); // Lägg till på vald knapp

    document.getElementById("chapter-menu").classList.add("hidden");
    document.getElementById("quiz-area").classList.remove("hidden");
    showQuestion();
  });
});

// Startsida-knapp
homeButton.addEventListener("click", () => {
  // Visa kapitelmenyn
  document.getElementById("chapter-menu").classList.remove("hidden");

  // Dölj quizområdet och resultatdelen
  document.getElementById("quiz-area").classList.add("hidden");
  resultContainer.classList.add("hidden");

  // Dölj onödiga knappar
  nextButton.classList.add("hidden");
  restartButton.classList.add("hidden");

  // Ta bort "active-chapter"-klassen från alla knappar
  document.querySelectorAll(".chapter-button").forEach((btn) => {
    btn.classList.remove("active-chapter");
  });

  // Rensa frågetext och svar
  questionText.textContent = "";
  answerButtons.innerHTML = "";
  explanationBox.classList.add("hidden");
  explanationText.textContent = "";

  // Rensa poängtexten
  document.getElementById("score").textContent = "";
});


// Visa fråga
function showQuestion() {
  const questions = chapters[currentChapter];
  const currentQuestion = questions[currentQuestionIndex];

  questionText.textContent = currentQuestion.question;
  answerButtons.innerHTML = "";

  // Blanda svaren och skapa en referens för rätt svar
  const shuffledAnswers = shuffle(
    currentQuestion.answers.map((answer, index) => ({
      text: answer,
      index: index // Spårar det ursprungliga indexet
    }))
  );

  shuffledAnswers.forEach((answerObj) => {
    const button = document.createElement("button");
    button.textContent = answerObj.text;
    button.classList.add("answer-button");
    button.setAttribute("data-index", answerObj.index); // Spara originalindex
    button.addEventListener("click", () =>
      selectAnswer(answerObj.index)
    );
    answerButtons.appendChild(button);
  });

  // Dölj förklaringar och navigeringsknappar
  nextButton.classList.add("hidden");
  explanationBox.classList.add("hidden");
  explanationText.textContent = "";
}





 // Se till att "Startsida"-knappen alltid är synlig
 homeButton.classList.remove("hidden");


// När användaren väljer ett svar
function selectAnswer(originalIndex) {
  const questions = chapters[currentChapter];
  const currentQuestion = questions[currentQuestionIndex];

  // Kontrollera om correct är en array eller en siffra
  const correctAnswers = Array.isArray(currentQuestion.correct)
    ? currentQuestion.correct // Om det är en array, använd den direkt
    : [currentQuestion.correct]; // Om det är en siffra, skapa en array med ett element

  // Markera rätt och fel svar
  Array.from(answerButtons.children).forEach((button) => {
    const buttonIndex = parseInt(button.getAttribute("data-index"));
    if (correctAnswers.includes(buttonIndex)) {
      button.classList.add("correct"); // Markera rätt svar
    } else if (buttonIndex === originalIndex) {
      button.classList.add("incorrect"); // Markera fel svar
    }
    button.disabled = true; // Inaktivera alla svarsknappar efter val
  });

  // Uppdatera poäng endast om svaret är korrekt
  if (correctAnswers.includes(originalIndex)) {
    score++;
  }

  // Visa förklaring
  explanationText.textContent = currentQuestion.explanation;
  explanationBox.classList.remove("hidden");
  nextButton.classList.remove("hidden");
}






// "Nästa fråga"-knappen
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  const questions = chapters[currentChapter];

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Visa resultat
function showResult() {
  document.getElementById("quiz-area").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  document.getElementById(
    "score"
  ).textContent = `Du fick ${score} av ${chapters[currentChapter].length} poäng!`;


  // Visa "Starta om detta kapitel"-knappen
  restartButton.classList.remove("hidden");
}

// Starta om kapitlet
restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  showQuestion();
});



