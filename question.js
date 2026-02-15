// ==========================================
// QUESTION.JS - Question Flow & Logic
// ==========================================

const urlParams = new URLSearchParams(window.location.search);
const testType = urlParams.get('type') || 'iq';

let currentQIndex = 0;
let answers = [];
let selectedValue = null;
let quizData = null;
let timerInterval = null;
let timeRemaining = 0;

const els = {
    title: document.getElementById('header-title'),
    subtitle: document.getElementById('header-subtitle'),
    currentCount: document.getElementById('current-count'),
    totalCount: document.getElementById('total-count'),
    questionText: document.getElementById('question-text'),
    questionSubtitle: document.getElementById('question-subtitle'),
    optionsContainer: document.getElementById('options-container'),
    nextBtn: document.getElementById('next-btn'),
    backBtn: document.getElementById('back-btn'),
    timerContainer: document.getElementById('timer-container'),
    timerBar: document.getElementById('timer-bar'),
    timerText: document.getElementById('timer-text')
};

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    if (testType === 'iq') {
        quizData = IQ_TEST;
    } else if (testType === 'eq') {
        quizData = EQ_TEST;
    } else {
        alert('Invalid test type');
        return;
    }

    els.title.textContent = quizData.title;
    els.subtitle.textContent = quizData.subtitle || 'Assessment';
    els.totalCount.textContent = quizData.questions.length;

    if (testType === 'iq' && quizData.timePerQuestion) {
        els.timerContainer.classList.remove('hidden');
    }

    // Load saved answers if exist
    const savedAnswers = localStorage.getItem(testType + 'Answers');
    if (savedAnswers) {
        answers = JSON.parse(savedAnswers);
    } else {
        answers = new Array(quizData.questions.length).fill(null);
    }

    loadQuestion(0);
    els.backBtn.addEventListener('click', handleBack);
}

// ==========================================
// QUESTION RENDERING
// ==========================================

function loadQuestion(index) {
    currentQIndex = index;
    selectedValue = answers[index];

    if (index >= quizData.questions.length) {
        finishTest();
        return;
    }

    els.currentCount.textContent = index + 1;

    const q = quizData.questions[index];
    els.questionText.textContent = q.question;
    els.questionSubtitle.textContent = q.subtitle || '';

    // Render options
    renderOptions(q);

    // Update next button state
    updateNextButton();

    // Start timer if IQ test
    if (testType === 'iq' && quizData.timePerQuestion) {
        startTimer();
    }
}

function renderOptions(question) {
    els.optionsContainer.innerHTML = '';

    question.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn w-full text-left p-4 rounded-xl font-medium text-gray-700';
        btn.innerHTML = `
            <div class="flex items-center">
                <div class="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mr-3 flex-shrink-0">
                    <span class="text-sm font-semibold text-gray-500">${String.fromCharCode(65 + idx)}</span>
                </div>
                <span>${option.text}</span>
            </div>
        `;

        if (selectedValue === option.value) {
            btn.classList.add('selected');
        }

        btn.addEventListener('click', () => selectOption(option.value));
        els.optionsContainer.appendChild(btn);
    });
}

function selectOption(value) {
    selectedValue = value;
    answers[currentQIndex] = value;
    
    // Save to localStorage
    localStorage.setItem(testType + 'Answers', JSON.stringify(answers));

    // Update UI
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.option-btn').classList.add('selected');

    updateNextButton();

    // Auto advance for IQ test
    if (testType === 'iq') {
        setTimeout(() => {
            handleNext();
        }, 300);
    }
}

function updateNextButton() {
    if (selectedValue !== null) {
        els.nextBtn.disabled = false;
        els.nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        els.nextBtn.onclick = handleNext;
    } else {
        els.nextBtn.disabled = true;
        els.nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        els.nextBtn.onclick = null;
    }
}

// ==========================================
// NAVIGATION
// ==========================================

function handleNext() {
    if (selectedValue === null) return;

    stopTimer();

    if (currentQIndex < quizData.questions.length - 1) {
        loadQuestion(currentQIndex + 1);
    } else {
        finishTest();
    }
}

function handleBack() {
    if (currentQIndex > 0) {
        stopTimer();
        loadQuestion(currentQIndex - 1);
    } else {
        if (confirm('ต้องการกลับไปหน้าเมนูหรือไม่?')) {
            window.location.href = 'index.html';
        }
    }
}

// ==========================================
// TIMER (IQ TEST)
// ==========================================

function startTimer() {
    stopTimer();
    timeRemaining = quizData.timePerQuestion;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            stopTimer();
            // Auto submit null answer
            answers[currentQIndex] = selectedValue || null;
            localStorage.setItem(testType + 'Answers', JSON.stringify(answers));
            handleNext();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    els.timerText.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    const percentage = (timeRemaining / quizData.timePerQuestion) * 100;
    els.timerBar.style.width = percentage + '%';
}

// ==========================================
// TEST COMPLETION
// ==========================================

function finishTest() {
    stopTimer();

    const testMode = localStorage.getItem('testMode');

    if (testType === 'iq') {
        // Calculate IQ score
        const score = calculateIQScore();
        localStorage.setItem('iqScore', JSON.stringify(score));

        if (testMode === 'both') {
            // Transition to EQ test
            localStorage.setItem('currentTest', 'eq');
            alert('เสร็จสิ้นแบบทดสอบ IQ\nต่อไปจะเป็นแบบทดสอบ EQ');
            window.location.href = 'question.html?type=eq';
        } else {
            window.location.href = 'result.html';
        }
    } else if (testType === 'eq') {
        // Calculate EQ score
        const score = calculateEQScore();
        localStorage.setItem('eqScore', JSON.stringify(score));

        // Show final results
        window.location.href = 'result.html';
    }
}

// ==========================================
// SCORING
// ==========================================

function calculateIQScore() {
    let correct = 0;
    
    quizData.questions.forEach((q, idx) => {
        const answer = answers[idx];
        const correctOption = q.options.find(opt => opt.correct);
        if (correctOption && answer === correctOption.value) {
            correct++;
        }
    });

    const percentage = correct / quizData.questions.length;
    
    // Standard IQ scoring: mean=100, SD=15
    // Map percentage to IQ score with realistic distribution
    let iqScore;
    if (percentage >= 0.95) iqScore = 140;      // 19-20 correct
    else if (percentage >= 0.85) iqScore = 130; // 17-18 correct
    else if (percentage >= 0.75) iqScore = 120; // 15-16 correct
    else if (percentage >= 0.65) iqScore = 110; // 13-14 correct
    else if (percentage >= 0.50) iqScore = 100; // 10-12 correct
    else if (percentage >= 0.35) iqScore = 90;  // 7-9 correct
    else if (percentage >= 0.20) iqScore = 85;  // 4-6 correct
    else iqScore = 80;                          // 0-3 correct

    return {
        correct: correct,
        total: quizData.questions.length,
        percentage: Math.round(percentage * 100),
        iqScore: iqScore
    };
}

function calculateEQScore() {
    let totalPoints = 0;
    const maxPoints = 100; // 20 questions × 5 points max

    quizData.questions.forEach((q, idx) => {
        const answer = answers[idx];
        const selectedOption = q.options.find(opt => opt.value === answer);
        if (selectedOption && selectedOption.points) {
            totalPoints += selectedOption.points;
        }
    });

    // Find personality type based on total points
    let personality = null;
    let eqScore = 70; // default
    
    for (let key in EQ_RANGES) {
        const range = EQ_RANGES[key];
        if (totalPoints >= range.min && totalPoints <= range.max) {
            personality = {
                type: key,
                name: range.name,
                description: range.description,
                color: range.color
            };
            eqScore = range.eqScore; // Use the standardized EQ score from the range
            break;
        }
    }

    return {
        totalPoints: totalPoints,
        maxPoints: maxPoints,
        percentage: Math.round((totalPoints / maxPoints) * 100),
        eqScore: eqScore, // Standardized EQ score (70-130 scale)
        personality: personality
    };
}

// ==========================================
// START
// ==========================================

window.addEventListener('DOMContentLoaded', init);