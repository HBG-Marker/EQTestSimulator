// ==========================================
// MAIN.JS - Navigation & State Management
// ==========================================

function startTest() {
    localStorage.setItem('testMode', 'both');
    localStorage.setItem('currentTest', 'iq');
    localStorage.removeItem('iqAnswers');
    localStorage.removeItem('eqAnswers');
    localStorage.removeItem('testResults');
    window.location.href = 'question.html?type=iq';
}

function resetTest() {
    localStorage.removeItem('testMode');
    localStorage.removeItem('currentTest');
    localStorage.removeItem('iqAnswers');
    localStorage.removeItem('eqAnswers');
    localStorage.removeItem('testResults');
    window.location.href = 'index.html';
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { startTest, resetTest };
}