// ==========================================
// QUESTION.JS - Shared Logic for IQ & EQ Tests
// ==========================================

// Get test type from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const testType = urlParams.get('type') || 'iq'; // Default to 'iq' if not specified

// State Management
let currentQIndex = 0;
let answers = []; // Store all user answers
let selectedValue = null;
let hasAnswered = false;
let quizData = null;
let timerInterval = null;
let timeRemaining = 0;

// DOM Elements
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
    viewQuestion: document.getElementById('view-question'),
    viewResult: document.getElementById('view-result'),
    finalScoreDisplay: document.getElementById('final-score-display'),
    resultMessage: document.getElementById('result-message'),
    scoreLabel: document.getElementById('score-label'),
    progressContainer: document.getElementById('progress-container'),
    timerContainer: document.getElementById('timer-container'),
    timerBar: document.getElementById('timer-bar'),
    timerText: document.getElementById('timer-text'),
    viewReportBtn: document.getElementById('view-report-btn')
};

// ==========================================
// INITIALIZATION
// ==========================================

function init() {
    // Load appropriate test data
    if (testType === 'iq') {
        if (typeof IQ_TEST === 'undefined') {
            alert('Error: IQ test data not loaded');
            return;
        }
        quizData = IQ_TEST;
    } else if (testType === 'eq') {
        if (typeof EQ_TEST === 'undefined') {
            alert('Error: EQ test data not loaded');
            return;
        }
        quizData = EQ_TEST;
    } else {
        alert('Invalid test type');
        return;
    }

    // Set header
    els.title.textContent = quizData.title;
    els.subtitle.textContent = quizData.subtitle || 'Assessment';
    els.totalCount.textContent = quizData.questions.length;

    // Show timer only for IQ test
    if (testType === 'iq' && quizData.timePerQuestion) {
        els.timerContainer.classList.remove('hidden');
    }

    // Initialize answers array
    answers = new Array(quizData.questions.length).fill(null);

    // Load first question
    loadQuestion(0);

    // Setup back button
    els.backBtn.addEventListener('click', handleBack);
}

// ==========================================
// QUESTION RENDERING
// ==========================================

function loadQuestion(index) {
    currentQIndex = index;
    hasAnswered = answers[index] !== null; // Check if already answered
    selectedValue = answers[index]; // Restore previous answer if any

    // Check if finished
    if (index >= quizData.questions.length) {
        showResults();
        return;
    }

    // Update progress
    els.currentCount.textContent = index + 1;

    const q = quizData.questions[index];
    
    // Update question text
    els.questionText.textContent = q.question;
    els.questionSubtitle.textContent = q.subtitle || '';

    // Start timer for IQ test
    if (testType === 'iq' && quizData.timePerQuestion) {
        startTimer(quizData.timePerQuestion);
    }

    // Render options based on type
    renderOptions(q);

    // Update navigation buttons
    updateNavigationButtons();
}

function renderOptions(q) {
    els.optionsContainer.innerHTML = '';

    if (q.type === 'multiple-choice') {
        renderMultipleChoice(q);
    } else if (q.type === 'likert') {
        renderLikertScale(q);
    }
}

// Multiple Choice Rendering (for IQ)
function renderMultipleChoice(q) {
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = getOptionClasses(opt, idx) + ' option-btn';
        btn.onclick = () => handleSelect(opt.value, idx);

        btn.innerHTML = `
            <div class="flex items-center gap-4">
                <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-800 text-zinc-500 font-bold text-xs group-hover:bg-zinc-700 transition-colors">
                    ${String.fromCharCode(65 + idx)}
                </span>
                <span class="font-medium text-left">${opt.text}</span>
            </div>
            ${getIcon(opt, idx)}
        `;
        els.optionsContainer.appendChild(btn);
    });
}

// Likert Scale Rendering (for EQ)
function renderLikertScale(q) {
    const container = document.createElement('div');
    container.className = 'likert-scale';

    const labels = q.labels || ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
    const values = [1, 2, 3, 4, 5];

    values.forEach((value, idx) => {
        const btn = document.createElement('button');
        btn.className = getLikertClasses(value);
        btn.onclick = () => handleSelect(value, idx);

        btn.innerHTML = `
            <div class="text-2xl mb-2">${value}</div>
            <div class="text-[10px] text-zinc-500 font-medium text-center leading-tight">${labels[idx]}</div>
        `;
        container.appendChild(btn);
    });

    els.optionsContainer.appendChild(container);
}

// ==========================================
// STYLING
// ==========================================

function getOptionClasses(opt, idx) {
    let base = "w-full p-4 rounded-xl border flex items-center justify-between group transition-all duration-200 ";
    
    if (!hasAnswered) {
        return base + "bg-transparent border-zinc-800 hover:bg-zinc-800/40 hover:border-zinc-700 text-zinc-300 cursor-pointer";
    }

    // If answered in IQ test (show correct/incorrect)
    if (testType === 'iq' && hasAnswered) {
        const isSelected = selectedValue === opt.value;
        const isCorrect = opt.correct === true;

        if (isCorrect) {
            return base + "bg-green-500/10 border-green-500/50 text-green-200 glow-green";
        }
        if (isSelected && !isCorrect) {
            return base + "bg-red-500/10 border-red-500/50 text-red-200 glow-red";
        }
        return base + "bg-transparent border-zinc-800 text-zinc-500 opacity-50";
    }

    // EQ test (just highlight selected)
    if (selectedValue === opt.value) {
        return base + "bg-purple-600/10 border-purple-500 text-purple-200 glow-purple";
    }
    
    return base + "bg-transparent border-zinc-800 opacity-50 text-zinc-500";
}

function getLikertClasses(value) {
    let base = "likert-btn border-2 ";
    
    if (selectedValue === value) {
        return base + "bg-purple-600 border-purple-400 text-white font-bold glow-purple";
    }
    
    return base + "bg-transparent border-zinc-700 text-zinc-400 hover:bg-zinc-800/50 hover:border-zinc-600";
}

function getIcon(opt, idx) {
    if (!hasAnswered || testType !== 'iq') return "";
    
    if (opt.correct === true) {
        return `<span class="text-green-500">${document.getElementById('icon-check').outerHTML}</span>`;
    }
    if (selectedValue === opt.value && opt.correct !== true) {
        return `<span class="text-red-500">${document.getElementById('icon-x').outerHTML}</span>`;
    }
    return "";
}

// ==========================================
// USER INTERACTION
// ==========================================

function handleSelect(value, idx) {
    if (hasAnswered && testType === 'iq') return; // IQ: lock after first answer
    
    selectedValue = value;
    answers[currentQIndex] = value;
    hasAnswered = true;

    // Stop timer for IQ
    if (testType === 'iq' && timerInterval) {
        clearInterval(timerInterval);
    }

    // Re-render options to show selection
    const q = quizData.questions[currentQIndex];
    renderOptions(q);

    // Enable next button
    updateNavigationButtons();
}

function handleNext() {
    if (!hasAnswered) return;
    
    loadQuestion(currentQIndex + 1);
}

function handleBack() {
    if (currentQIndex > 0) {
        loadQuestion(currentQIndex - 1);
    }
}

function updateNavigationButtons() {
    // Back button
    els.backBtn.disabled = currentQIndex === 0;
    els.backBtn.style.opacity = currentQIndex === 0 ? '0.5' : '1';
    els.backBtn.style.cursor = currentQIndex === 0 ? 'not-allowed' : 'pointer';

    // Next button
    if (hasAnswered) {
        els.nextBtn.disabled = false;
        els.nextBtn.className = "px-8 py-3 rounded-xl font-semibold text-sm bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30 glow-purple cursor-pointer transform hover:-translate-y-0.5 transition-all";
        els.nextBtn.onclick = handleNext;
        
        // Change to "Finish" on last question
        if (currentQIndex === quizData.questions.length - 1) {
            els.nextBtn.textContent = 'Finish Test';
        } else {
            els.nextBtn.textContent = 'Next Question';
        }
    } else {
        els.nextBtn.disabled = true;
        els.nextBtn.className = "px-8 py-3 rounded-xl font-semibold text-sm bg-zinc-800 text-zinc-600 cursor-not-allowed transition-all";
    }
}

// ==========================================
// TIMER (for IQ test)
// ==========================================

function startTimer(seconds) {
    clearInterval(timerInterval);
    timeRemaining = seconds;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            // Auto-submit as wrong if time runs out
            if (!hasAnswered) {
                handleSelect(null, -1);
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    els.timerText.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    const percentage = (timeRemaining / (quizData.timePerQuestion || 60)) * 100;
    els.timerBar.style.width = percentage + '%';
    
    // Change color when time is running low
    if (timeRemaining <= 10) {
        els.timerBar.className = 'timer-bar h-full bg-gradient-to-r from-red-500 to-orange-500';
    }
}

// ==========================================
// RESULTS
// ==========================================

function showResults() {
    // Clear timer
    clearInterval(timerInterval);

    // Check if we're in "both" mode
    const testMode = localStorage.getItem('testMode');
    const currentTestStorage = localStorage.getItem('currentTest');

    // If in "both" mode and just finished IQ, transition to EQ
    if (testMode === 'both' && testType === 'iq' && currentTestStorage === 'iq') {
        // Store IQ results
        const iqScore = calculateIQScore(answers);
        localStorage.setItem('iqResults', JSON.stringify({
            type: 'iq',
            score: iqScore,
            answers: answers,
            timestamp: new Date().toISOString()
        }));

        // Show brief transition message
        els.viewQuestion.classList.add('hidden');
        els.progressContainer.classList.add('hidden');
        els.timerContainer.classList.add('hidden');
        els.viewResult.classList.remove('hidden');
        els.viewResult.classList.add('flex');

        els.viewResult.innerHTML = `
            <div class="flex flex-col items-center justify-center space-y-6">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mb-2 shadow-lg animate-pulse">
                    ✅
                </div>
                <h2 class="text-3xl font-bold text-white">IQ Test Completed!</h2>
                <p class="text-zinc-400">Preparing EQ Assessment...</p>
                <div class="flex gap-2 mt-4">
                    <div class="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                    <div class="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
            </div>
        `;

        // Transition to EQ test
        setTimeout(() => {
            localStorage.setItem('currentTest', 'eq');
            window.location.href = 'question.html?type=eq';
        }, 2000);
        return;
    }

    // If in "both" mode and just finished EQ, combine results
    if (testMode === 'both' && testType === 'eq') {
        const eqScore = calculateEQScore(answers);
        const iqResults = JSON.parse(localStorage.getItem('iqResults') || '{}');
        
        // Store combined results
        localStorage.setItem('testResults', JSON.stringify({
            type: 'both',
            iqScore: iqResults.score,
            eqScore: eqScore,
            iqAnswers: iqResults.answers,
            eqAnswers: answers,
            timestamp: new Date().toISOString()
        }));

        // Clear mode flags
        localStorage.setItem('currentTest', 'complete');
    } else {
        // Single test mode (shouldn't happen with new UI, but keeping for compatibility)
        // Calculate score based on test type
        let score;
        if (testType === 'iq') {
            score = calculateIQScore(answers);
        } else if (testType === 'eq') {
            score = calculateEQScore(answers);
        }

        // Store results
        localStorage.setItem('testResults', JSON.stringify({
            type: testType,
            score: score,
            answers: answers,
            timestamp: new Date().toISOString()
        }));
    }

    // Hide question view
    els.viewQuestion.classList.add('hidden');
    els.progressContainer.classList.add('hidden');
    els.timerContainer.classList.add('hidden');

    // Show result view
    els.viewResult.classList.remove('hidden');
    els.viewResult.classList.add('flex');

    // Display appropriate message
    const testMode2 = localStorage.getItem('testMode');
    if (testMode2 === 'both') {
        els.viewResult.innerHTML = `
            <div class="flex flex-col items-center justify-center space-y-6">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mb-2 shadow-lg">
                    🎉
                </div>
                <h2 class="text-3xl font-bold text-white">All Tests Completed!</h2>
                <p class="text-zinc-400">Preparing your comprehensive report...</p>
                <button onclick="window.location.href='result.html'" class="px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg transition-all mt-4">
                    View Full Report
                </button>
            </div>
        `;
    } else {
        // Single test completion (legacy)
        let scoreDisplay = '';
        let message = '';
        
        if (testType === 'iq') {
            const iqScore = JSON.parse(localStorage.getItem('testResults')).score.iqScore;
            scoreDisplay = iqScore;
            message = 'IQ Test Completed';
        } else {
            const eqScore = JSON.parse(localStorage.getItem('testResults')).score.eqScore;
            scoreDisplay = eqScore;
            message = 'EQ Test Completed';
        }

        els.viewResult.innerHTML = `
            <div class="flex flex-col items-center justify-center space-y-6">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mb-2 shadow-lg">
                    🎉
                </div>
                <h2 class="text-3xl font-bold text-white">${message}</h2>
                <div class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    ${scoreDisplay}
                </div>
                <button onclick="window.location.href='result.html'" class="px-8 py-3 rounded-xl font-semibold text-sm bg-purple-600 hover:bg-purple-500 text-white shadow-lg transition-all">
                    View Full Report
                </button>
            </div>
        `;
    }
}

// IQ Scoring
function calculateIQScore(answers) {
    let correct = 0;
    quizData.questions.forEach((q, idx) => {
        const correctOption = q.options.find(opt => opt.correct === true);
        if (correctOption && answers[idx] === correctOption.value) {
            correct++;
        }
    });

    // Convert to IQ scale (mean=100, sd=15)
    const percentage = correct / quizData.questions.length;
    const iqScore = Math.round(85 + (percentage * 30)); // Maps 0-100% to 85-115 range
    
    return { correct, total: quizData.questions.length, iqScore };
}

// EQ Scoring with Category Breakdown
function calculateEQScore(answers) {
    let total = 0;
    let categoryScores = {};
    let categoryCounts = {};
    
    // Initialize categories
    Object.keys(EQ_CATEGORIES).forEach(cat => {
        categoryScores[cat] = 0;
        categoryCounts[cat] = 0;
    });
    
    // Calculate scores per category
    quizData.questions.forEach((q, idx) => {
        if (answers[idx] !== null) {
            total += answers[idx];
            
            const category = q.category;
            if (category && categoryScores[category] !== undefined) {
                categoryScores[category] += answers[idx];
                categoryCounts[category]++;
            }
        }
    });

    // Calculate percentages for each category
    let categoryBreakdown = {};
    Object.keys(categoryScores).forEach(cat => {
        const maxForCategory = categoryCounts[cat] * 5; // Max is 5 per question
        const percentage = (categoryScores[cat] / maxForCategory) * 100;
        categoryBreakdown[cat] = {
            score: categoryScores[cat],
            max: maxForCategory,
            percentage: Math.round(percentage),
            name: EQ_CATEGORIES[cat].name,
            icon: EQ_CATEGORIES[cat].icon,
            description: EQ_CATEGORIES[cat].description,
            color: EQ_CATEGORIES[cat].color
        };
    });

    // Normalize to 0-100 scale
    const maxScore = quizData.questions.length * 5;
    const eqScore = Math.round((total / maxScore) * 100);
    
    return { 
        total, 
        maxScore, 
        eqScore,
        categoryBreakdown 
    };
}

// ==========================================
// START
// ==========================================

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
