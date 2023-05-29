const questions = [
    {
        question: "What does CPU stand for?",
        answers: [
            {text: "Central Processing Unit", correct: true},
            {text: "Computer Processing Unit", correct: false},
            {text: "Control Processing Unit", correct: false},
            {text: "Centralized Programming Unit", correct: false},
        ]
    },
    {
        question: "What is the primary function of RAM in a computer?",
        answers: [
            {text: "Storing files and documents", correct: false},
            {text: "Executing program instructions", correct: true},
            {text: "Displaying graphics", correct: false},
            {text: "Connecting to the internet", correct: false},
        ]   
    },
    {
        question: "Which type of computer memory is non-volatile and retains data even when powered off?",
        answers: [
            {text: "RAM", correct: false},
            {text: "ROM", correct: true},
            {text: "Cache", correct: false},
            {text: "Virtual Memory", correct: false},
        ] 
    },
    {
        question: "What is the purpose of an operating system?",
        answers: [
            {text: "Running software applications", correct: false},
            {text: "Connecting to the internet", correct: false},
            {text: "Displaying images and videos", correct: false},
            {text: "Managing computer resources", correct: true},
        ]
    },
    {
        question: "Which technology is used to connect devices wirelessly over short distances?",
        answers: [
            {text: "Bluetooth", correct: true},
            {text: "Ethernet", correct: false},
            {text: "Wi-Fi", correct: false},
            {text: "Fiber optic", correct: false},
        ]    
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Hypertext Markup Language", correct: true},
            {text: "Hyperlink and Text Markup Language", correct: false},
            {text: "Home Tool Markup Language", correct: false},
            {text: "Hyper Terminal Markup Language", correct: false},
        ] 
    },
    {
        question: "Which programming language is commonly used for web development?",
        answers: [
            {text: "Python", correct: false},
            {text: "Java", correct: false},
            {text: "C++", correct: false},
            {text: "JavaScript", correct: true},
        ]
    },
    {
        question: "What is the function of a router in a computer network?",
        answers: [
            {text: "Sending and receiving emails", correct: false},
            {text: "Transferring data between networks", correct: true},
            {text: "Running software applications", correct: false},
            {text: "Providing power to devices", correct: false},
        ]
    },
    {
        question: "Which technology is used to convert digital signals to analog and vice versa for transmission over telephone lines?",
        answers: [
            {text: "Ethernet", correct: false},
            {text: "Modem", correct: true},
            {text: "Router", correct: false},
            {text: "Switch", correct: false},
        ] 
    },
    {
        question: "What is the purpose of a firewall in network security?",
        answers: [
            {text: "Blocking unwanted websites", correct: false},
            {text: "Encrypting data transmissions", correct: false},
            {text: "Preventing unauthorized access", correct: true},
            {text: "Scanning for viruses", correct: false},
        ]
    },
    {
        question: "Which type of storage device provides the fastest access to data?",
        answers: [
            {text: "Hard disk drive (HDD)", correct: false},
            {text: "Solid-state drive (SSD)", correct: true},
            {text: "Optical disc drive (ODD)", correct: false},
            {text: "USB flash drive", correct: false},
        ]
    },
    {
        question: "What is the full form of URL?",
        answers: [
            {text: "Uniform Resource Locator", correct: true},
            {text: "Universal Reference Link", correct: false},
            {text: "Unified Routing Language", correct: false},
            {text: "User Requested Link", correct: false},
        ]
    },
    {
        question: "Which technology allows multiple users to simultaneously access a single computer or server remotely?",
        answers: [
            {text: "Virtual Private Network (VPN)", correct: true},
            {text: "Remote Desktop Protocol (RDP)", correct: false},
            {text: "File Transfer Protocol (FTP)", correct: false},
            {text: "Secure Shell (SSH)", correct: false},
        ]
    },
    {
        question: "What is the purpose of an antivirus software?",
        answers: [
            {text: "Blocking unwanted websites", correct: false},
            {text: "Encrypting data transmissions", correct: false},
            {text: "Preventing unauthorized access", correct: false},
            {text: "Detecting and removing malware", correct: true},
        ]
    },
    {
        question: "Which technology is used to store and retrieve data over the internet?",
        answers: [
            {text: "Cloud computing", correct: true},
            {text: "Virtual reality", correct: false},
            {text: "Artificial intelligence", correct: false},
            {text: "Blockchain", correct: false},
        ]
    },
    {
        question: "What is the purpose of a graphic processing unit (GPU)?",
        answers: [
            {text: "Running software applications", correct: false},
            {text: "Displaying images and videos", correct: true},
            {text: "Transferring data between networks", correct: false},
            {text: "Providing power to devices", correct: false},
        ]
    },
    {
        question: "Which technology is used for wireless communication between devices in close proximity?",
        answers: [
            {text: "Near Field Communication (NFC)", correct: true},
            {text: "Radio Frequency Identification (RFID)", correct: false},
            {text: "Global Positioning System (GPS)", correct: false},
            {text: "Universal Serial Bus (USB)", correct: false},
        ]
    },
    {
        question: "What is the purpose of a domain name?",
        answers: [
            {text: "Identifying a website's IP address", correct: true},
            {text: "Storing website files and databases", correct: false},
            {text: "Encrypting website traffic", correct: false},
            {text: "Hosting email services", correct: false},
        ]
    },
    {
        question: "Which programming language is often used for data analysis and scientific computing?",
        answers: [
            {text: "Python", correct: true},
            {text: "Java", correct: false},
            {text: "C++", correct: false},
            {text: "Ruby", correct: false},
        ]
    },
    {
        question: "What is the purpose of a cache in computer systems?",
        answers: [
            {text: "Storing frequently accessed data for faster retrieval", correct: true},
            {text: "Running software applications", correct: false},
            {text: "Displaying graphical user interfaces", correct: false},
            {text: "Connecting to the internet", correct: false},
        ]
    },
    {
        question: "Which technology is used for long-distance communication using pulses of light?",
        answers: [
            {text: "Fiber optic", correct: true},
            {text: "Ethernet", correct: false},
            {text: "Bluetooth", correct: false},
            {text: "Wi-Fi", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); 
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
         showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();