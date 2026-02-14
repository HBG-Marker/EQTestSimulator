// ==========================================
// IQ.JS - IQ Test Questions & Data
// ==========================================

const IQ_TEST = {
    title: "IQ Test",
    subtitle: "Cognitive Assessment",
    timePerQuestion: 60, // 60 seconds per question
    questions: [
        {
            question: "Complete the sequence: 2, 4, 8, 16, ?",
            subtitle: "Pattern recognition",
            type: "multiple-choice",
            options: [
                { text: "24", value: "24", correct: false },
                { text: "28", value: "28", correct: false },
                { text: "32", value: "32", correct: true },
                { text: "36", value: "36", correct: false }
            ]
        },
        {
            question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
            subtitle: "Logical reasoning",
            type: "multiple-choice",
            options: [
                { text: "True", value: "true", correct: true },
                { text: "False", value: "false", correct: false }
            ]
        },
        {
            question: "What comes next in the pattern: A, C, F, J, ?",
            subtitle: "Letter sequences",
            type: "multiple-choice",
            options: [
                { text: "M", value: "M", correct: false },
                { text: "N", value: "N", correct: false },
                { text: "O", value: "O", correct: true },
                { text: "P", value: "P", correct: false }
            ]
        },
        {
            question: "Which word does NOT belong in the group?",
            subtitle: "Word: Cat, Dog, Lion, Table, Horse",
            type: "multiple-choice",
            options: [
                { text: "Cat", value: "cat", correct: false },
                { text: "Dog", value: "dog", correct: false },
                { text: "Table", value: "table", correct: true },
                { text: "Horse", value: "horse", correct: false }
            ]
        },
        {
            question: "12 + 15 × 3 - 8 = ?",
            subtitle: "Mathematical operations",
            type: "multiple-choice",
            options: [
                { text: "49", value: "49", correct: true },
                { text: "73", value: "73", correct: false },
                { text: "53", value: "53", correct: false },
                { text: "69", value: "69", correct: false }
            ]
        },
        {
            question: "Find the missing number: 3, 9, 27, 81, ?",
            subtitle: "Geometric progression",
            type: "multiple-choice",
            options: [
                { text: "162", value: "162", correct: false },
                { text: "216", value: "216", correct: false },
                { text: "243", value: "243", correct: true },
                { text: "324", value: "324", correct: false }
            ]
        },
        {
            question: "Mirror is to Reflection as Water is to ?",
            subtitle: "Analogical reasoning",
            type: "multiple-choice",
            options: [
                { text: "River", value: "river", correct: false },
                { text: "Ripple", value: "ripple", correct: true },
                { text: "Ocean", value: "ocean", correct: false },
                { text: "Lake", value: "lake", correct: false }
            ]
        },
        {
            question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
            subtitle: "Spatial reasoning",
            type: "multiple-choice",
            options: [
                { text: "0°", value: "0", correct: false },
                { text: "7.5°", value: "7.5", correct: true },
                { text: "15°", value: "15", correct: false },
                { text: "22.5°", value: "22.5", correct: false }
            ]
        },
        {
            question: "Complete: ACE, BDF, CEG, ?",
            subtitle: "Letter pattern",
            type: "multiple-choice",
            options: [
                { text: "DFH", value: "DFH", correct: true },
                { text: "DEF", value: "DEF", correct: false },
                { text: "EFG", value: "EFG", correct: false },
                { text: "DGH", value: "DGH", correct: false }
            ]
        },
        {
            question: "Which number should replace the question mark? 7, 14, 21, 28, ?",
            subtitle: "Arithmetic sequence",
            type: "multiple-choice",
            options: [
                { text: "32", value: "32", correct: false },
                { text: "35", value: "35", correct: true },
                { text: "36", value: "36", correct: false },
                { text: "42", value: "42", correct: false }
            ]
        }
    ]
};

// Export for use in question.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = IQ_TEST;
}
