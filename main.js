// ==========================================
// MAIN.JS - Menu Navigation
// ==========================================

function startTest(type) {
    // Only "both" (full test) is available now
    if (type === 'both') {
        // Store the intention in localStorage
        localStorage.setItem('testMode', 'both');
        localStorage.setItem('currentTest', 'iq');
        // Start with IQ test
        window.location.href = 'question.html?type=iq';
    }
}

// Handle transition from IQ to EQ in "both" mode
window.addEventListener('DOMContentLoaded', () => {
    // This runs on question.html and result.html pages
    const testMode = localStorage.getItem('testMode');
    
    if (testMode === 'both' && window.location.pathname.includes('result.html')) {
        const currentTest = localStorage.getItem('currentTest');
        
        // If we just finished IQ, redirect to EQ
        if (currentTest === 'iq') {
            localStorage.setItem('currentTest', 'eq');
            // Small delay to show IQ results, then redirect
            setTimeout(() => {
                window.location.href = 'question.html?type=eq';
            }, 2000);
        }
        // If we finished EQ, we're done - show final results
        else if (currentTest === 'eq') {
            localStorage.setItem('currentTest', 'complete');
        }
    }
});

// Clear test mode when going back to menu
function resetTest() {
    localStorage.removeItem('testMode');
    localStorage.removeItem('currentTest');
    window.location.href = 'index.html';
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { startTest, resetTest };
}
