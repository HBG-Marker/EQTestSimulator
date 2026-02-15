// ==========================================
// EQ.JS - EQ Test Questions (Thai) - 20 Questions
// ==========================================

const EQ_TEST = {
    title: "แบบทดสอบ EQ",
    subtitle: "Emotional Intelligence Assessment",
    timePerQuestion: null,
    questions: [
        {
            question: "เมื่อคุณต้องการเข้าห้องน้ำ แต่มีคนต่อคิวจำนวนมาก คุณจะทำอย่างไร?",
            subtitle: "การจัดการสถานการณ์",
            type: "multiple-choice",
            options: [
                { text: "ต่อแถวด้วยความไม่พอใจ", value: "1", points: 1 },
                { text: "แอบขอเพื่อนที่อยู่ด้านหน้าต่อแถว", value: "2", points: 2 },
                { text: "อั้นไว้และไปทำอย่างอื่นก่อน รอให้คิวน้อยลง", value: "3", points: 5 }
            ]
        },
        {
            question: "เมื่อเพื่อนแกล้งเล่นขณะคุณกำลังจะเข้าห้องน้ำ คุณจะทำอย่างไร?",
            subtitle: "การควบคุมอารมณ์",
            type: "multiple-choice",
            options: [
                { text: "ใจเย็นและขอร้องเพื่อนให้หยุด", value: "1", points: 5 },
                { text: "ตะโกนด่าและทะเลาะกับเพื่อน", value: "2", points: 1 },
                { text: "พาเพื่อนไปเฝ้าก่อนที่จะเข้าห้องน้ำเพื่อความปลอดภัย", value: "3", points: 3 }
            ]
        },
        {
            question: "เมื่อมีคนมากวนคุณขณะกำลังกินอาหาร คุณจะทำอย่างไร?",
            subtitle: "การสื่อสาร",
            type: "multiple-choice",
            options: [
                { text: "ไม่พูดอะไรและกินต่อไป แม้จะรู้สึกรำคาญ", value: "1", points: 2 },
                { text: "บอกเพื่อนด้วยน้ำเสียงสุภาพว่าไม่อยากให้มากวน", value: "2", points: 5 },
                { text: "แกล้งกลับเพื่อเอาคืน", value: "3", points: 1 }
            ]
        },
        {
            question: "ถ้าเพื่อนทำผิดแล้วมาขอให้คุณช่วยปกปิด คุณจะทำอย่างไร?",
            subtitle: "การตัดสินใจเชิงจริยธรรม",
            type: "multiple-choice",
            options: [
                { text: "ช่วยปกปิดเพราะเป็นเพื่อนกัน", value: "1", points: 1 },
                { text: "บอกให้เพื่อนไปยอมรับผิด", value: "2", points: 5 },
                { text: "ไม่ยุ่ง เดินหนี", value: "3", points: 2 },
                { text: "ไปบอกครูทันทีโดยไม่คุยกับเพื่อน", value: "4", points: 3 }
            ]
        },
        {
            question: "เมื่อแผนพังหรือไปคนละทางกับที่ตั้งไว้ คุณจะทำอย่างไร?",
            subtitle: "ความยืดหยุ่น",
            type: "multiple-choice",
            options: [
                { text: "โกรธและหงุดหงิด", value: "1", points: 1 },
                { text: "ปล่อยมันไป ไม่สนใจ", value: "2", points: 2 },
                { text: "ยอมรับและปรับตัว", value: "3", points: 4 },
                { text: "ค่อยๆ ดูผลและยอมรับอย่างมีเหตุผล", value: "4", points: 5 }
            ]
        },
        {
            question: "เมื่อคุณทำผิดพลาดในที่สาธารณะ คุณรู้สึกอย่างไร?",
            subtitle: "การรับรู้อารมณ์ตนเอง",
            type: "multiple-choice",
            options: [
                { text: "อายมาก อยากหาที่ซ่อนตัว", value: "1", points: 2 },
                { text: "ไม่สนใจ ทำเป็นไม่มีอะไร", value: "2", points: 1 },
                { text: "อายเล็กน้อย แต่พยายามแก้ไข", value: "3", points: 4 },
                { text: "ยอมรับและหัวเราะกับตัวเอง", value: "4", points: 5 }
            ]
        },
        {
            question: "เมื่อคุณเห็นเพื่อนเสียใจ คุณจะทำอย่างไร?",
            subtitle: "ความเห็นอกเห็นใจ",
            type: "multiple-choice",
            options: [
                { text: "เดินผ่านไป ไม่อยากยุ่ง", value: "1", points: 1 },
                { text: "เข้าไปถามว่าเป็นอะไร", value: "2", points: 4 },
                { text: "นั่งอยู่ข้างๆ และฟังเพื่อน", value: "3", points: 5 },
                { text: "บอกให้เพื่อนเข้มแข็ง", value: "4", points: 2 }
            ]
        },
        {
            question: "เมื่อคุณโกรธมาก คุณมักจะทำอย่างไร?",
            subtitle: "การจัดการความโกรธ",
            type: "multiple-choice",
            options: [
                { text: "ระเบิดอารมณ์ทันที", value: "1", points: 1 },
                { text: "เก็บไว้ในใจ ไม่พูดอะไร", value: "2", points: 2 },
                { text: "หาที่สงบและสูดหายใจลึกๆ", value: "3", points: 5 },
                { text: "พูดออกมาทันทีด้วยน้ำเสียงดัง", value: "4", points: 1 }
            ]
        },
        {
            question: "เมื่อต้องทำงานกลุ่มกับคนที่ไม่ถูกกัน คุณจะทำอย่างไร?",
            subtitle: "การทำงานร่วมกับผู้อื่น",
            type: "multiple-choice",
            options: [
                { text: "ทำหน้าที่ของตัวเอง ไม่พูดกับเขา", value: "1", points: 2 },
                { text: "พยายามหาจุดร่วมและทำงานด้วยกัน", value: "2", points: 5 },
                { text: "บอกครูว่าไม่อยากอยู่กลุ่มเดียวกัน", value: "3", points: 1 },
                { text: "ทำงานคนเดียว แบ่งงานไม่ชัดเจน", value: "4", points: 3 }
            ]
        },
        {
            question: "เมื่อคุณล้มเหลวในสิ่งที่พยายามมานาน คุณจะทำอย่างไร?",
            subtitle: "ความยืดหยุ่นทางอารมณ์",
            type: "multiple-choice",
            options: [
                { text: "เสียใจมากและเลิกทำ", value: "1", points: 1 },
                { text: "โทษตัวเองอย่างหนัก", value: "2", points: 2 },
                { text: "เสียใจ แต่พร้อมลองใหม่", value: "3", points: 5 },
                { text: "ไม่สนใจ หาอย่างอื่นทำแทน", value: "4", points: 3 }
            ]
        },
        {
            question: "เมื่อเพื่อนประสบความสำเร็จ แต่คุณยังไม่สำเร็จ คุณรู้สึกอย่างไร?",
            subtitle: "การจัดการความอิจฉา",
            type: "multiple-choice",
            options: [
                { text: "อิจฉาและไม่อยากพูดกับเพื่อน", value: "1", points: 1 },
                { text: "ดีใจให้เพื่อน แต่รู้สึกเศร้าในใจ", value: "2", points: 3 },
                { text: "ดีใจให้เพื่อนจริงใจ และพยายามต่อไป", value: "3", points: 5 },
                { text: "แสดงความยินดี แต่อิจฉาในใจ", value: "4", points: 2 }
            ]
        },
        {
            question: "เมื่อมีคนวิพากษ์วิจารณ์คุณต่อหน้า คุณจะทำอย่างไร?",
            subtitle: "การรับฟังคำติชม",
            type: "multiple-choice",
            options: [
                { text: "โต้เถียงและป้องกันตัวเอง", value: "1", points: 1 },
                { text: "เงียบ แต่รู้สึกแย่มาก", value: "2", points: 2 },
                { text: "ฟังและถามว่ามีข้อเสนอแนะไหม", value: "3", points: 5 },
                { text: "ทำเป็นไม่สนใจ", value: "4", points: 2 }
            ]
        },
        {
            question: "เมื่อคุณรู้สึกเครียด คุณมักจะทำอย่างไร?",
            subtitle: "การจัดการความเครียด",
            type: "multiple-choice",
            options: [
                { text: "ระบายอารมณ์กับคนอื่น", value: "1", points: 2 },
                { text: "เก็บไว้คนเดียวจนเกินทน", value: "2", points: 1 },
                { text: "หาวิธีผ่อนคลายเช่น ออกกำลังกาย ฟังเพลง", value: "3", points: 5 },
                { text: "หนีปัญหา", value: "4", points: 1 }
            ]
        },
        {
            question: "เมื่อคนอื่นมีความเห็นต่างจากคุณ คุณจะทำอย่างไร?",
            subtitle: "การยอมรับความแตกต่าง",
            type: "multiple-choice",
            options: [
                { text: "ยืนยันว่าความคิดของคุณถูก", value: "1", points: 1 },
                { text: "ฟังและพยายามเข้าใจมุมมองของเขา", value: "2", points: 5 },
                { text: "ยอมรับแต่ไม่พอใจ", value: "3", points: 3 },
                { text: "เลี่ยงการพูดคุยเรื่องนั้นต่อ", value: "4", points: 2 }
            ]
        },
        {
            question: "เมื่อคุณได้รับคำชม คุณรู้สึกอย่างไร?",
            subtitle: "การรับคำชม",
            type: "multiple-choice",
            options: [
                { text: "ดีใจและรู้สึกภูมิใจ", value: "1", points: 5 },
                { text: "อายและปฏิเสธคำชม", value: "2", points: 2 },
                { text: "รู้สึกว่าเป็นเรื่องธรรมดา", value: "3", points: 3 },
                { text: "กลัวว่าจะทำไม่ได้ดีอีก", value: "4", points: 1 }
            ]
        },
        {
            question: "เมื่อคุณต้องพูดในที่ชุมชน คุณจะรู้สึกอย่างไร?",
            subtitle: "ความมั่นใจในตนเอง",
            type: "multiple-choice",
            options: [
                { text: "กลัวมากและพยายามหลีกเลี่ยง", value: "1", points: 1 },
                { text: "ประหม่าแต่พยายามทำให้ดีที่สุด", value: "2", points: 4 },
                { text: "มั่นใจและพร้อมพูด", value: "3", points: 5 },
                { text: "ไม่สนใจว่าคนอื่นคิดอย่างไร", value: "4", points: 2 }
            ]
        },
        {
            question: "เมื่อมีคนทำให้คุณผิดหวัง คุณจะทำอย่างไร?",
            subtitle: "การจัดการความผิดหวัง",
            type: "multiple-choice",
            options: [
                { text: "โกรธและตัดสัมพันธ์", value: "1", points: 1 },
                { text: "เก็บไว้ในใจและห่างเหิน", value: "2", points: 2 },
                { text: "คุยกันเพื่อเข้าใจ", value: "3", points: 5 },
                { text: "ทำเป็นไม่มีอะไร", value: "4", points: 3 }
            ]
        },
        {
            question: "เมื่อคุณต้องตัดสินใจสำคัญ คุณจะทำอย่างไร?",
            subtitle: "กระบวนการตัดสินใจ",
            type: "multiple-choice",
            options: [
                { text: "ตัดสินใจตามอารมณ์", value: "1", points: 1 },
                { text: "ถามคนอื่นและทำตามที่เขาบอก", value: "2", points: 2 },
                { text: "ชั่งใจ คิดให้รอบคอบ", value: "3", points: 5 },
                { text: "หลีกเลี่ยงการตัดสินใจ", value: "4", points: 1 }
            ]
        },
        {
            question: "เมื่อคุณรู้สึกโดดเดี่ยว คุณจะทำอย่างไร?",
            subtitle: "การจัดการความเหงา",
            type: "multiple-choice",
            options: [
                { text: "เศร้าและคิดว่าไม่มีใครสนใจ", value: "1", points: 1 },
                { text: "หาอะไรทำเพื่อไม่ให้คิดมาก", value: "2", points: 3 },
                { text: "ติดต่อเพื่อนหรือคนที่ใกล้ชิด", value: "3", points: 5 },
                { text: "ยอมรับและใช้เวลากับตัวเอง", value: "4", points: 4 }
            ]
        },
        {
            question: "เมื่อมีเรื่องดีเกิดขึ้นกับคุณ คุณจะทำอย่างไร?",
            subtitle: "การแสดงความสุข",
            type: "multiple-choice",
            options: [
                { text: "ดีใจและเล่าให้คนอื่นฟัง", value: "1", points: 4 },
                { text: "ดีใจแต่ไม่บอกใคร กลัวคนอิจฉา", value: "2", points: 2 },
                { text: "รู้สึกภูมิใจและขอบคุณคนที่ช่วย", value: "3", points: 5 },
                { text: "คิดว่าเป็นเรื่องธรรมดา", value: "4", points: 3 }
            ]
        }
    ]
};

// EQ Scoring ranges with Thai animals (using total points system)
const EQ_RANGES = {
    'bear': { 
        min: 20, 
        max: 40, 
        name: 'หมีอารมณ์แรง',
        description: 'ควบคุมอารมณ์ยังไม่ค่อยได้ ใช้อารมณ์นำเหตุผลบ่อย ควรฝึกสติและการคิดก่อนตอบสนอง',
        color: '#ef4444',
        eqScore: 70
    },
    'tiger': { 
        min: 41, 
        max: 60, 
        name: 'เสืออารมณ์ชัด',
        description: 'มีความกล้า แสดงออกชัดเจน บางครั้งใจร้อนหรือคิดเร็วเกินไป ถ้าฝึกฟังและคิดให้รอบขึ้น จะดีมาก',
        color: '#f97316',
        eqScore: 85
    },
    'dolphin': { 
        min: 61, 
        max: 80, 
        name: 'โลมาเข้าใจคน',
        description: 'เข้าใจความรู้สึกตัวเองและคนอื่น แก้ปัญหาแบบใช้เหตุผล ควบคุมอารมณ์ได้ค่อนข้างดี',
        color: '#3b82f6',
        eqScore: 105
    },
    'owl': { 
        min: 81, 
        max: 100, 
        name: 'นกฮูกนักคิด',
        description: 'ใจเย็น มีเหตุผลสูง รับฟังและปรับตัวเก่ง EQ ดีมาก เหมาะกับการเป็นที่ปรึกษาเพื่อน',
        color: '#8b5cf6',
        eqScore: 125
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EQ_TEST, EQ_RANGES };
}