// ==========================================
// IQ.JS - IQ Test Questions (20 Questions)
// ==========================================

const IQ_TEST = {
    title: "แบบทดสอบ IQ",
    subtitle: "Cognitive Assessment",
    timePerQuestion: 60,
    questions: [
        {
            question: "หาตัวเลขที่ขาดหายไป: 3, 6, 12, 24, ?",
            subtitle: "ลำดับตัวเลข",
            type: "multiple-choice",
            options: [
                { text: "36", value: "36", correct: false },
                { text: "42", value: "42", correct: false },
                { text: "48", value: "48", correct: true },
                { text: "54", value: "54", correct: false }
            ]
        },
        {
            question: "ถ้า A=1, B=2, C=3 แล้ว 'CAB' = ?",
            subtitle: "การคิดเชิงตัวเลข",
            type: "multiple-choice",
            options: [
                { text: "312", value: "312", correct: true },
                { text: "123", value: "123", correct: false },
                { text: "321", value: "321", correct: false },
                { text: "213", value: "213", correct: false }
            ]
        },
        {
            question: "คำใดไม่เข้าพวก?",
            subtitle: "การจัดกลุ่ม",
            type: "multiple-choice",
            options: [
                { text: "แมว", value: "cat", correct: false },
                { text: "สุนัข", value: "dog", correct: false },
                { text: "โต๊ะ", value: "table", correct: true },
                { text: "ช้าง", value: "elephant", correct: false }
            ]
        },
        {
            question: "ถ้า 5 + 3 = 28, 9 + 1 = 810, 8 + 6 = 214 แล้ว 5 + 4 = ?",
            subtitle: "รูปแบบพิเศษ",
            type: "multiple-choice",
            options: [
                { text: "19", value: "19", correct: true },
                { text: "91", value: "91", correct: false },
                { text: "45", value: "45", correct: false },
                { text: "54", value: "54", correct: false }
            ]
        },
        {
            question: "หาตัวต่อไปในลำดับ: 2, 3, 5, 7, 11, ?",
            subtitle: "จำนวนเฉพาะ",
            type: "multiple-choice",
            options: [
                { text: "12", value: "12", correct: false },
                { text: "13", value: "13", correct: true },
                { text: "14", value: "14", correct: false },
                { text: "15", value: "15", correct: false }
            ]
        },
        {
            question: "ถ้าทุกคนที่ชอบกาแฟก็ชอบชา และคนที่ชอบชาก็ชอบนม ดังนั้นคนที่ชอบกาแฟต้องชอบนม",
            subtitle: "ตรรกะ",
            type: "multiple-choice",
            options: [
                { text: "ถูก", value: "true", correct: true },
                { text: "ผิด", value: "false", correct: false }
            ]
        },
        {
            question: "มะม่วง : ผลไม้ = กุหลาบ : ?",
            subtitle: "ความสัมพันธ์",
            type: "multiple-choice",
            options: [
                { text: "สวน", value: "garden", correct: false },
                { text: "ดอกไม้", value: "flower", correct: true },
                { text: "ต้นไม้", value: "tree", correct: false },
                { text: "หนาม", value: "thorn", correct: false }
            ]
        },
        {
            question: "ถ้านาฬิกาแสดงเวลา 3:15 มุมระหว่างเข็มสั้นและเข็มยาวคือกี่องศา?",
            subtitle: "คณิตศาสตร์เชิงพื้นที่",
            type: "multiple-choice",
            options: [
                { text: "0°", value: "0", correct: false },
                { text: "7.5°", value: "7.5", correct: true },
                { text: "15°", value: "15", correct: false },
                { text: "22.5°", value: "22.5", correct: false }
            ]
        },
        {
            question: "หาค่า X: 2X + 6 = 18",
            subtitle: "พีชคณิต",
            type: "multiple-choice",
            options: [
                { text: "4", value: "4", correct: false },
                { text: "5", value: "5", correct: false },
                { text: "6", value: "6", correct: true },
                { text: "7", value: "7", correct: false }
            ]
        },
        {
            question: "ในห้องมีแมว 4 ตัว แต่ละตัวนั่งอยู่มุมหนึ่ง แมวแต่ละตัวเห็นแมวอีก 3 ตัว รวมแมวทั้งหมดมีกี่ตัว?",
            subtitle: "ตรรกะเชิงภาพ",
            type: "multiple-choice",
            options: [
                { text: "4", value: "4", correct: true },
                { text: "8", value: "8", correct: false },
                { text: "12", value: "12", correct: false },
                { text: "16", value: "16", correct: false }
            ]
        },
        {
            question: "ถ้า 3 × 4 = 21, 5 × 6 = 41 แล้ว 7 × 8 = ?",
            subtitle: "รูปแบบคำนวณ",
            type: "multiple-choice",
            options: [
                { text: "56", value: "56", correct: false },
                { text: "61", value: "61", correct: true },
                { text: "71", value: "71", correct: false },
                { text: "65", value: "65", correct: false }
            ]
        },
        {
            question: "หาตัวเลขที่หายไป: 1, 4, 9, 16, 25, ?",
            subtitle: "กำลังสอง",
            type: "multiple-choice",
            options: [
                { text: "30", value: "30", correct: false },
                { text: "32", value: "32", correct: false },
                { text: "36", value: "36", correct: true },
                { text: "40", value: "40", correct: false }
            ]
        },
        {
            question: "ถ้าวันนี้เป็นวันจันทร์ แล้ว 100 วันข้างหน้าจะเป็นวันอะไร?",
            subtitle: "การคิดวันที่",
            type: "multiple-choice",
            options: [
                { text: "วันจันทร์", value: "monday", correct: false },
                { text: "วันอังคาร", value: "tuesday", correct: false },
                { text: "วันพุธ", value: "wednesday", correct: true },
                { text: "วันพระหฤ", value: "thursday", correct: false }
            ]
        },
        {
            question: "น้ำ : กระหาย = อาหาร : ?",
            subtitle: "ความสัมพันธ์เชิงตรรกะ",
            type: "multiple-choice",
            options: [
                { text: "หิว", value: "hungry", correct: true },
                { text: "อร่อย", value: "delicious", correct: false },
                { text: "ร้านอาหาร", value: "restaurant", correct: false },
                { text: "ทาน", value: "eat", correct: false }
            ]
        },
        {
            question: "ถ้า 1=3, 2=3, 3=5, 4=4, 5=4 แล้ว 6=?",
            subtitle: "รูปแบบตัวอักษร",
            type: "multiple-choice",
            options: [
                { text: "3", value: "3", correct: true },
                { text: "4", value: "4", correct: false },
                { text: "5", value: "5", correct: false },
                { text: "6", value: "6", correct: false }
            ]
        },
        {
            question: "คนที่สูงกว่าบ้าน 10% คือใคร? (บ้านสูง 160 ซม., อิน 176 ซม., เอก 168 ซม.)",
            subtitle: "เปอร์เซ็นต์",
            type: "multiple-choice",
            options: [
                { text: "บ้าน", value: "ban", correct: false },
                { text: "อิน", value: "in", correct: true },
                { text: "เอก", value: "ek", correct: false },
                { text: "ไม่มีใคร", value: "none", correct: false }
            ]
        },
        {
            question: "หาตัวต่อไปในลำดับ: Z, Y, X, W, ?",
            subtitle: "ลำดับตัวอักษร",
            type: "multiple-choice",
            options: [
                { text: "U", value: "U", correct: false },
                { text: "V", value: "V", correct: true },
                { text: "T", value: "T", correct: false },
                { text: "S", value: "S", correct: false }
            ]
        },
        {
            question: "ถ้าทุกคนในห้องเป็นผู้ชาย และมีคนบางคนที่สวมแว่นตา ข้อใดถูก?",
            subtitle: "ตรรกะเชิงประพจน์",
            type: "multiple-choice",
            options: [
                { text: "ทุกคนสวมแว่นตา", value: "all", correct: false },
                { text: "มีผู้ชายบางคนสวมแว่นตา", value: "some", correct: true },
                { text: "ไม่มีผู้หญิงสวมแว่นตา", value: "women", correct: false },
                { text: "ทั้งหมดถูก", value: "both", correct: false }
            ]
        },
        {
            question: "มีนก 5 ตัวอยู่บนต้นไม้ ถูกยิง 1 ตัว นกที่เหลือบนต้นไม้มีกี่ตัว?",
            subtitle: "ปัญหาเชิงตรรกะ",
            type: "multiple-choice",
            options: [
                { text: "0 ตัว", value: "0", correct: true },
                { text: "1 ตัว", value: "1", correct: false },
                { text: "4 ตัว", value: "4", correct: false },
                { text: "5 ตัว", value: "5", correct: false }
            ]
        },
        {
            question: "60 ÷ 5 × 3 + 8 - 4 = ?",
            subtitle: "ลำดับการคำนวณ",
            type: "multiple-choice",
            options: [
                { text: "40", value: "40", correct: true },
                { text: "44", value: "44", correct: false },
                { text: "36", value: "36", correct: false },
                { text: "32", value: "32", correct: false }
            ]
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = IQ_TEST;
}