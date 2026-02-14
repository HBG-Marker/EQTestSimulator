// ==========================================
// EQ.JS - EQ Test Questions & Data
// ==========================================

const EQ_TEST = {
    title: "EQ Test",
    subtitle: "Emotional Intelligence Assessment",
    timePerQuestion: null, // No time limit for EQ test
    questions: [
        // ========================================
        // SECTION 1: SELF-AWARENESS (4 questions)
        // ========================================
        {
            question: "I can easily identify and name my emotions when I'm feeling them.",
            subtitle: "Section 1/5: Self-Awareness",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-awareness",
            section: 1
        },
        {
            question: "When I'm upset, I know exactly what triggered my emotions.",
            subtitle: "Section 1/5: Self-Awareness",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-awareness",
            section: 1
        },
        {
            question: "I understand how my emotions affect my behavior and decisions.",
            subtitle: "Section 1/5: Self-Awareness",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-awareness",
            section: 1
        },
        {
            question: "I regularly reflect on my emotional responses to situations.",
            subtitle: "Section 1/5: Self-Awareness",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-awareness",
            section: 1
        },

        // ========================================
        // SECTION 2: SELF-REGULATION (4 questions)
        // ========================================
        {
            question: "I stay calm under pressure and manage stress effectively.",
            subtitle: "Section 2/5: Self-Regulation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-regulation",
            section: 2
        },
        {
            question: "I can control my impulses even when I'm frustrated or angry.",
            subtitle: "Section 2/5: Self-Regulation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-regulation",
            section: 2
        },
        {
            question: "I bounce back quickly from disappointments and setbacks.",
            subtitle: "Section 2/5: Self-Regulation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-regulation",
            section: 2
        },
        {
            question: "I can adapt my emotions to suit different situations appropriately.",
            subtitle: "Section 2/5: Self-Regulation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "self-regulation",
            section: 2
        },

        // ========================================
        // SECTION 3: MOTIVATION (4 questions)
        // ========================================
        {
            question: "I feel motivated to achieve my goals even when obstacles arise.",
            subtitle: "Section 3/5: Motivation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "motivation",
            section: 3
        },
        {
            question: "I set high standards for myself and work diligently to meet them.",
            subtitle: "Section 3/5: Motivation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "motivation",
            section: 3
        },
        {
            question: "I find inner drive and don't always need external rewards to stay motivated.",
            subtitle: "Section 3/5: Motivation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "motivation",
            section: 3
        },
        {
            question: "I remain optimistic and see opportunities even in challenging situations.",
            subtitle: "Section 3/5: Motivation",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "motivation",
            section: 3
        },

        // ========================================
        // SECTION 4: EMPATHY (4 questions)
        // ========================================
        {
            question: "I can easily sense when someone is feeling sad, angry, or anxious.",
            subtitle: "Section 4/5: Empathy",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "empathy",
            section: 4
        },
        {
            question: "I understand people's feelings even when they don't express them verbally.",
            subtitle: "Section 4/5: Empathy",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "empathy",
            section: 4
        },
        {
            question: "I genuinely care about other people's problems and concerns.",
            subtitle: "Section 4/5: Empathy",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "empathy",
            section: 4
        },
        {
            question: "I can put myself in others' shoes and see situations from their perspective.",
            subtitle: "Section 4/5: Empathy",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "empathy",
            section: 4
        },

        // ========================================
        // SECTION 5: SOCIAL SKILLS (4 questions)
        // ========================================
        {
            question: "I find it easy to make friends and maintain relationships.",
            subtitle: "Section 5/5: Social Skills",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "social-skills",
            section: 5
        },
        {
            question: "I can effectively communicate my thoughts and feelings to others.",
            subtitle: "Section 5/5: Social Skills",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "social-skills",
            section: 5
        },
        {
            question: "I handle conflicts constructively and find win-win solutions.",
            subtitle: "Section 5/5: Social Skills",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "social-skills",
            section: 5
        },
        {
            question: "I listen actively and give others my full attention in conversations.",
            subtitle: "Section 5/5: Social Skills",
            type: "likert",
            labels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
            category: "social-skills",
            section: 5
        }
    ]
};

// EQ Category Definitions
const EQ_CATEGORIES = {
    'self-awareness': { 
        name: 'Self-Awareness',
        icon: '🪞',
        description: 'Understanding your own emotions and their impact',
        color: 'purple'
    },
    'self-regulation': { 
        name: 'Self-Regulation',
        icon: '🎯',
        description: 'Managing emotions and staying in control',
        color: 'blue'
    },
    'motivation': { 
        name: 'Motivation',
        icon: '🚀',
        description: 'Inner drive and resilience to achieve goals',
        color: 'pink'
    },
    'empathy': { 
        name: 'Empathy',
        icon: '❤️',
        description: 'Understanding and sharing others\' feelings',
        color: 'green'
    },
    'social-skills': { 
        name: 'Social Skills',
        icon: '🤝',
        description: 'Building and maintaining relationships',
        color: 'cyan'
    }
};

// Export for use in question.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EQ_TEST, EQ_CATEGORIES };
}
