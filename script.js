/* ==========================================================
   Egyptian Baccalaureate Course Interactive JavaScript
   Complete 74-Slide Deck, Zoom Controls, Fullscreen,
   and 8 Sections × 10 MCQs (80 Total) with Instant Green/Red Feedback
   ========================================================== */

let currentSlideIndex = 0;
let currentZoom = 1.0;

// All 74 Slides extracted directly from the training PDF
const SLIDES_DATA = [
    { id: 1, category: "Title & Cover", title: "Egyptian Baccalaureate System", subtitle: "A New Vision for Secondary Education Development (2026/2027)", text: "Official Professional Development Program on the New Secondary Curriculum Philosophy, Pedagogical Framework, and Teaching Methodology.", bullets: ["Ministry of Education & Technical Education", "Academic Year 2026 / 2027", "National Center for Examinations & Educational Evaluation (NCEEE)"] },
    { id: 2, category: "Leadership & Sponsorship", title: "Program Patronage & Supervision", subtitle: "Under the Auspices of Ministerial & Educational Leadership", text: "The training program is conducted with high-level institutional endorsement:", bullets: ["H.E. Dr. Mohamed Abdel-Latif – Minister of Education & Technical Education", "Dr. Hala Abdel Salam – First Undersecretary / Head of Central Administration for General Education", "Prof. Dr. Alaa Gouda – Undersecretary of the Ministry of Education in Kafr El-Sheikh", "General English Supervision Department – Kafr El-Sheikh"] },
    { id: 3, category: "Supervision", title: "General English Supervision & Directorate", subtitle: "Leadership Team & Curriculum Coordinators", text: "Dedicated pedagogical leadership driving educational reform and communicative teacher training across secondary institutions.", bullets: ["Supervision Leadership & National Curriculum Coordinators", "Focus: Transforming classroom teaching from rote transmission to student-centered inquiry."] },
    { id: 4, category: "Session Introduction", title: "Session One (الجلسة الأولى)", subtitle: "Curriculum Philosophy and Pedagogical Foundations", text: "Orientation to the fundamental conceptual shift underpinning the 2nd Year Secondary Egyptian Baccalaureate English curriculum.", bullets: ["Session Goal: Deconstruct the pedagogical intent behind textbook architecture.", "Key Question: How does teaching English differ from teaching *through* English?"] },
    { id: 5, category: "Orientation", title: "Day 1 – Session 1: Icebreaker & Introduction", subtitle: "Duration: 5 Minutes (زمن التنفيذ: 5 ق)", text: "Establishing mutual pedagogical rapport and setting professional expectations.", bullets: ["Participant introductions & teaching context exchange", "Identifying current classroom challenges in secondary English classrooms"] },
    { id: 6, category: "Orientation", title: "Ground Rules & Participant Expectations", subtitle: "Duration: 5 Minutes (قواعد العمل وتوقعات المشاركين)", text: "Collaborative agreements for an interactive, communicative professional workshop.", bullets: ["Active engagement and equal speaking time", "Collaborative problem solving and evidence-based debate", "Openness to pedagogical transformation and innovative practice"] },
    { id: 7, category: "Strategic Vision", title: "EGYPT VISION 2030 – Education Sector", subtitle: "رؤية مصر 2030 - قطاع التعليم قبل الجامعي", text: "Targeting accessible, high-quality education without discrimination, nurturing an innovative, creative citizen capable of global competition.", bullets: ["1. Quality of Education: Upgrading education systems to meet international benchmarks.", "2. Inclusion & Equity: Guaranteeing equal learning opportunities across all societal segments.", "3. Digital Transformation: Integrating educational technology into classroom practices.", "4. Teacher Development: Continuous professional development and capacity building."] },
    { id: 8, category: "Curriculum Philosophy", title: "The New Baccalaureate: A Paradigm Shift in Thinking", subtitle: "Learning Philosophy over Unit Quantity", text: "The new Baccalaureate... doesn't require more memorization, it requires a different way of thinking.", bullets: ["The real transformation is not merely altering the number of units...", "...but fundamentally revolutionizing the philosophy of learning itself.", "Language is treated as a cognitive tool for inquiry, analysis, and global communication."] },
    { id: 9, category: "Curriculum Philosophy", title: "10 Holistic Modules across the Academic Year", subtitle: "Fewer Units, Deeper Holistic Competence", text: "The curriculum consists of only 10 modules throughout the academic year. But don't think fewer modules means the curriculum will be easier!", bullets: ["Each module is built upon a overarching theme or global issue.", "Students acquire language holistically, not as isolated, fragmented skills.", "Integrates reading, listening, speaking, writing, and critical reasoning around core concepts."] },
    { id: 10, category: "Pedagogical Philosophy", title: "Integrated Skills & Theme-Based Learning", subtitle: "Vocabulary through Context and Deep Understanding", text: "Reflecting the Integrated Skills philosophy used in elite international curricula.", bullets: ["The question is no longer 'What is the translation of word X?'", "The new question is: 'How did you deduce its meaning from the context?'", "_ Vocabulary through Context", "_ Vocabulary through Conceptual Understanding (Not memorization or word-for-word translation)."] },
    { id: 11, category: "Pedagogical Philosophy", title: "Real-World Language & Grammar in Context", subtitle: "Linguistic Structure as a Vehicle for Meaning", text: "The student learns words from their real-world usage, connects them to context, and uses them productively in speaking and writing.", bullets: ["Even with grammar... you won't find an isolated traditional lesson titled 'Present Perfect' or 'Passive Voice'.", "The student observes linguistic structures within authentic texts and begins to ask:", "👉 'Why did the writer choose this specific grammatical structure?'"] },
    { id: 12, category: "Pedagogical Philosophy", title: "Grammar in Context & Evidence-Based Writing", subtitle: "Rule Discovery & Argumentative Formulation", text: "Grammar in Context means the rule is discovered inductively through usage, not rote memorization.", bullets: ["As for writing... it is no longer about memorizing template paragraphs.", "The student is now required to:", "✨ Analyze • Evaluate • Justify • Support with Evidence.", "This means formulating an authentic opinion, justifying it, and supporting it with textual proof."] },
    { id: 13, category: "Instructional Strategies", title: "Core 21st-Century Pedagogical Strategies", subtitle: "Frameworks Embedded throughout the Textbook", text: "Through pedagogical analysis, the curriculum relies on cutting-edge instructional strategies:", bullets: ["✓ Contextualized Learning", "✓ Inquiry-Based Learning (IBL)", "✓ Critical Thinking & Evaluative Analysis", "✓ Higher Order Thinking Skills (HOTS - Bloom's Taxonomy)", "✓ Process Writing & Analytical Paragraphing", "✓ Performance-Based Assessment", "✓ Self-Reflection & Metacognition"] },
    { id: 14, category: "Teacher Mindset", title: "Teaching English vs. Teaching Through English", subtitle: "The Role of the Outstanding Educator", text: "English is no longer a subject to be memorized... but rather an instrument for thinking, analyzing, and communicating.", bullets: ["Any good teacher can teach any curriculum provided they understand its underlying philosophy first.", "Teachers must evolve their tools and align their classroom practices with the textbook's instructional design.", "Critical distinction: Teaching English (mechanics) vs. Teaching Through English (inquiry & cognition)."] },
    { id: 15, category: "Teacher Mindset", title: "The Inquiry-Driven Educator", subtitle: "Building Understanding & Guiding Thinking", text: "The new curriculum requires a teacher who constructs understanding, guides inquiry, and applies tailored instructional strategies.", bullets: ["Key Reflective Questions for Teachers Before Every Lesson:", "1. Why did the curriculum designer begin with this visual/inquiry activity?", "2. Why isn't there a decontextualized separate grammar lecture?", "3. Why did evidence become an essential requirement for every response?", "4. Why does writing conclude the learning journey, after reading, discussion, and reflection?"] },
    { id: 16, category: "Teacher Mindset", title: "Understanding Philosophy = Student Success", subtitle: "The Prerequisite for Effective Instruction", text: "Because when we deeply grasp the philosophy of the curriculum... only then can we teach it with fidelity and efficacy.", bullets: ["Understanding the curriculum's philosophy is the indispensable first step to student academic and personal success."] },
    { id: 17, category: "Core Strategies: JRE", title: "The JRE & IBL Dual Strategies in Unit 1", subtitle: "Moving from Passive Reception to Academic Reasoning", text: "Strategy 1: JRE (Justify – Reason – Evidence).", bullets: ["Employed to construct rigorous logical arguments during speaking debates and analytical writing.", "Ensures the formulation of coherent, well-structured, evidence-based discourse."] },
    { id: 18, category: "Core Strategies: JRE", title: "JRE Operational Components: Justify & Reason", subtitle: "Formulating Defensible Positions & Causes", text: "Deconstructing the first two pillars of the JRE Triad:", bullets: ["• Justify (Claim/Position): Formulate a clear, unambiguous position on the issue under discussion without ambiguity (e.g., 'Personal habits are the single most critical factor in determining long-term health').", "• Reason (Logical Explanation): Provide a rational explanation for why this position is valid, focusing on cause-and-effect mechanisms."] },
    { id: 19, category: "Core Strategies: JRE", title: "JRE Operational Components: Evidence & Classroom Application", subtitle: "Anchoring Claims in Verifiable Proof", text: "• Evidence (Proof): Support the reasoning with concrete data, research studies, or statistics from the text (e.g., citing WHO data or sleep medicine research).", bullets: ["Classroom Application Tip:", "Guide students not to rely exclusively on unsupported personal opinions.", "Ensure that the complete triad (Claim + Reason + Evidence) is present in every analytical paragraph or oral contribution."] },
    { id: 20, category: "Core Strategies: IBL", title: "Inquiry-Based Learning (IBL) Strategy", subtitle: "From Solving Questions to Critical Investigation", text: "Drives exploratory reading and analytical listening, transforming the text into a subject for critical evaluation.", bullets: ["Formulating Big Driving Questions:", "Begin with open-ended, contestable questions prior to reading or listening (e.g., 'To what extent are we truly in control of our well-being in a digital world?')."] },
    { id: 21, category: "Core Strategies: IBL", title: "Media Literacy, Bias Analysis & Solution Evaluation", subtitle: "Critical Thinking in the Information Age", text: "Training students to navigate complex modern information landscapes:", bullets: ["• Analyzing Media & Bias: Detect bias, distinguish established facts from opinions, and decode the 'Highlight Reel Effect'.", "• Evaluating Solutions: Balancing individual agency with societal/governmental roles (Richard Thaler's Nudge Theory) in daily life."] },
    { id: 22, category: "Core Strategies: IBL", title: "IBL Classroom Facilitation Tip", subtitle: "Scaffolding Discovery through Guiding Questions", text: "Classroom Application Tip for Teachers:", bullets: ["Use 'guiding questions' rather than providing immediate direct answers.", "Encourage students to independently extract contradictory or supporting evidence from textual and audio sources."] },
    { id: 23, category: "Lesson Plan Template", title: "Lesson Plan: Master Template (Page 1)", subtitle: "Inquiry & Pedagogical Foundations", text: "Standardized planning template aligning IB pedagogical principles with Egyptian national educational standards:", bullets: ["Unit: ___________ | Lesson: ___________ | Time: _______ | Transferable Concept: ___________", "Driving Inquiry Question: ____________________________________________", "I. Pedagogical Foundations: 1. Learner Profile Attributes | 2. Contextual Relevance", "II. Learning Outcomes: 1. Content Objective | 2. Language Objective (Receptive) | 3. Language Objective (Productive)", "III. JRE+ Inquiry Sequence - Phase 1: Justification (Engage & Inquire)"] },
    { id: 24, category: "Lesson Plan Template", title: "Lesson Plan: Master Template (Page 2)", subtitle: "JRE+ Four Phases Sequence", text: "Structured flow through the four interconnected inquiry phases:", bullets: ["PHASE 2: REASONING – EXPLORE & ANALYZE (3. Explore: Info Gathering | 4. Think & Analyze: Evaluating Perspectives)", "PHASE 3: EVIDENCE – SYNTHESIZE & SUPPORT (5. JRE Application: Justify, Reason & Evidence)", "PHASE 4: REFLECT & ACT (+) (6. Communicate: Present & Defend Ideas | 7. Reflect & Act: Transfer & Application)"] },
    { id: 25, category: "Lesson Plan Template", title: "Lesson Plan: Master Template (Page 3)", subtitle: "Assessment, Differentiation & Reflection", text: "Ensuring holistic evaluation, scaffolding, and teacher self-improvement:", bullets: ["IV. Formative Assessment: Conceptual Understanding, Critical Thinking, Use of Evidence (JRE), Communication, Academic Integrity", "V. Resources & Materials | VI. Differentiation & Support (Scaffolding & Extension) | VII. Reflection & Follow-up"] },
    { id: 26, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Unit 1 'Living Well in a Complex World'", subtitle: "Lesson 1.1: Social Media and Self-Image", text: "Authentic lesson plan demonstration from the curriculum development team:", bullets: ["Transferable Concept: Perspective, Media Literacy, and Self-Perception", "Driving Inquiry Question: 'How does daily screen time on image-based apps directly affect a teenager’s self-esteem, and how can media literacy protect us from biased representations?'", "Learner Profile: Thinkers (evaluating bias & statistics) & Reflective (assessing digital consumption)."] },
    { id: 27, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Learning Outcomes (Lesson 1.1)", subtitle: "Content & Balanced Language Objectives", text: "Explicit alignment between receptive decoding and productive academic output:", bullets: ["1. Content Objective: Analyze how social media impacts adolescent self-esteem and identify media bias techniques (intensifiers, generalizations).", "2. Language Objective (Receptive): Comprehend cyberpsychology audio broadcast, extract metrics, and identify rhetorical devices.", "3. Language Objective (Productive): Rewrite biased statements using academic hedging language and articulate JRE arguments."] },
    { id: 28, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Phase 1 (Activate & Inquire)", subtitle: "Engage & Inquire Implementation", text: "1. Engage (Problem / Situation): Think-Pair-Share on social media bias.", bullets: ["2. Inquire (Question Formulation): Pose driving question regarding screen time effects on self-esteem; students brainstorm initial assumptions."] },
    { id: 29, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Phases 2 & 3 (Reasoning & Evidence)", subtitle: "Explore, Analyze & JRE Application", text: "3. Explore: 1st & 2nd listening pass of 'The Impossible Standard'.", bullets: ["4. Think & Analyze: 3rd listening pass evaluating statistical validity and exploring hedging vs. absolute tone.", "5. JRE Application: Students complete 'Rewrite the Bias' and compose a mini-JRE paragraph addressing: 'Does social media have a net negative effect on teenagers' self-image?'"] },
    { id: 30, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Phase 4 (Reflect & Act +)", subtitle: "Communication, Defense & Real-World Habit Transfer", text: "6. Communicate (Present & Defend Ideas): Pair debate / small-group sharing of rewritten neutral/hedged sentences.", bullets: ["7. Reflect & Act (Transfer & Application): Personal digital reflection commitment to one concrete media-literacy habit over the coming week."] },
    { id: 31, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Formative Assessment Rubric", subtitle: "Observable Indicators across 5 Dimensions", text: "Systematic formative evaluation criteria across Conceptual Understanding, Critical Thinking, JRE Evidence, Communication, and Academic Integrity.", bullets: ["Evaluates student transition from emotive reaction to scientific evaluation."] },
    { id: 32, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Resources & Differentiation", subtitle: "Scaffolding & Advanced Extensions", text: "Resources: Audio Broadcast Script, Student Worksheet Section A, Whiteboard / Projector for sentence modeling.", bullets: ["Scaffolding: Word bank of hedging verbs (suggests, implies, may).", "Extension: Analyze a real social media post and rewrite its caption objectively."] },
    { id: 33, category: "Lesson Plan Exemplar", title: "Exemplar Plan: Teacher Reflection & Follow-up", subtitle: "Metacognitive Educator Growth", text: "Teacher Self-Reflection Checklist to monitor instructional effectiveness and student grasp of academic hedging.", bullets: ["Follow up in next session on student personal digital habits reflection."] },
    { id: 34, category: "5-Period Model", title: "Approaching Lessons in Unit 1 (2nd Secondary)", subtitle: "Inquiry-Based Unit Framework", text: "How to transform static textbook pages into an interactive, high-engagement learning experience in the secondary classroom?", bullets: ["Shifting from linear page-by-page reading to cyclical inquiry and evidence synthesis."] },
    { id: 35, category: "5-Period Model", title: "Five-Lesson Implementation Plan & Cognitive Progression", subtitle: "Methodological Shifts & Bloom's Taxonomy", text: "Cognitive Progression: Identification ➔ Explanation ➔ Analysis ➔ Evaluation ➔ Justification ➔ Creativity.", bullets: ["From Traditional to Inquiry-Based; from Explanation to Facilitation; from Giving Answers to Evidence Extraction."] },
    { id: 36, category: "5-Period Model", title: "Distribution of the 5 Sessions: Lesson 1", subtitle: "Lesson 1: Introduction & Inquiry (Engage & Inquire)", text: "Objective: Stimulate intellectual curiosity about the impact of technology on self-image.", bullets: ["Activities: Brainstorming using Think-Pair-Share, formulating driving question, Bias Discovery."] },
    { id: 37, category: "5-Period Model", title: "Distribution of the 5 Sessions: Lessons 2 & 3", subtitle: "Listening for Evidence & Language / Media Analysis", text: "Lesson 2 (Listening for Evidence): Progressive listening via 'Evidence Hunt' strategy & Evidence Board.", bullets: ["Lesson 3 (Language & Media Analysis): Explore hedging and rhetorical devices without traditional grammar lectures."] },
    { id: 38, category: "5-Period Model", title: "Distribution of the 5 Sessions: Lessons 3 & 4", subtitle: "Sentence Rewriting & JRE Speaking Debates", text: "Lesson 3 (cont.): Rewriting absolute sentences into hedged claims.", bullets: ["Lesson 4 (JRE Model & Speaking): Construct and defend arguments (Claim – Reason – Evidence) through Evidence Card games and structured debate language."] },
    { id: 39, category: "5-Period Model", title: "Distribution of the 5 Sessions: Lesson 5 & Golden Tip", subtitle: "Writing, Peer Assessment & Continuous Cycle", text: "Lesson 5 (Writing & Reflection): Write a structured analytical paragraph, complete peer review with CRE checklist, and fill out self-reflection cards.", bullets: ["🌟 Golden Practice Tip: Keep the driving question open throughout the week so students gather evidence period by period!"] },
    { id: 40, category: "5-Period Model", title: "5-Period Classroom Implementation Guide", subtitle: "Period 1: Engagement + Inquiry", text: "Transform teaching from lecturing into an inquiry-driven cycle.", bullets: ["Period 1: Engagement + Inquiry", "Student Role: Explore, predict, question", "Strategies: Inquiry-Based Learning (IBL), Think-Pair-Share"] },
    { id: 41, category: "5-Period Model", title: "5-Period Breakdown: Periods 2 & 3", subtitle: "Student Roles & Strategies", text: "Period 2 (Listening + Evidence): Student Role = Listen, identify, extract | Strategies = Active Listening, Evidence Hunt.", bullets: ["Period 3 (Language + Media Analysis): Student Role = Analyze, transform | Strategies = Discovery Learning, Scaffolding."] },
    { id: 42, category: "5-Period Model", title: "5-Period Breakdown: Periods 4 & 5", subtitle: "Speaking & Writing Production", text: "Period 4 (JRE + Speaking): Student Role = Build & defend arguments | Strategies = JRE Framework, Collaborative Learning, Debate.", bullets: ["Period 5 (Writing + Reflection): Student Role = Synthesize, evaluate, self-reflect | Strategies = Process Writing, Metacognitive Card."] },
    { id: 43, category: "Unit Analysis", title: "Unit 1: Content & Skills Analysis Matrix", subtitle: "Visual Roadmap of Living Well in a Complex World", text: "Comprehensive thematic and linguistic breakdown:", bullets: ["• Core Topics: Mental Health, Digital Balance, Physical Health, Media Literacy & Bias", "• Key Vocabulary: Mindfulness, Sedentary, Locus of Control, Nudge, Hedging, Highlight-reel effect", "• Language & Grammar: Participial Phrases, Relative Clauses, If Conditionals for Hedging", "• Target Skills: Analytical Writing (JRE), Critical Reading & Bias Detection, Controlled Speaking"] },
    { id: 44, category: "Unit Analysis", title: "Unit 1: Language Skills Roadmap", subtitle: "Interconnected 4-Skill Journey", text: "1. Reading ➔ 2. Listening ➔ 3. Speaking ➔ 4. Writing.", bullets: ["Organic progression from input decoding to critical output."] },
    { id: 45, category: "Teacher Comparison", title: "Classical vs. Modern Teacher: Mindset & Vocabulary", subtitle: "Comparing Pedagogical Approaches", text: "The Classical Mindset: 'I have content that I need to explain ➔ students need to know it ➔ work through questions together.'", bullets: ["Classical Vocabulary: Focuses on isolated word lists, translation, and memorizing words for the exam."] },
    { id: 46, category: "Teacher Comparison", title: "The Pitfall of Classical Vocabulary Instruction", subtitle: "Rote Drills vs. Contextual Fluency", text: "Traditional Flow: Teacher explains ➔ Students listen ➔ Students write ➔ Teacher drills ➔ Students memorize.", bullets: ["The student may know the abstract meaning of a word, but cannot use it accurately in a new context."] },
    { id: 47, category: "Teacher Comparison", title: "Classical vs. Modern Teacher: Reading", subtitle: "From Passive Translation to Active Investigation", text: "Traditional: Pre-reading ➔ Reading aloud ➔ Translation ➔ Explanation ➔ Questions.", bullets: ["Modern Approach: Predict ➔ Read ➔ Find Evidence ➔ Infer ➔ Answer ➔ Discuss."] },
    { id: 48, category: "Teacher Comparison", title: "Classical vs. Modern Teacher: Grammar", subtitle: "Deductive Lectures vs. Inductive Discovery", text: "Classical Approach: Rule ➔ Examples ➔ Explanation ➔ Exercises.", bullets: ["Modern Approach: Example ➔ Notice ➔ Discover ➔ Explain ➔ Practice ➔ Use (Inductive)."] },
    { id: 49, category: "Teacher Comparison", title: "Classical vs. Modern Teacher: Listening", subtitle: "Progressive Auditory Scaffolding", text: "Classical Approach: Listen ➔ Choose answer ➔ Correct.", bullets: ["Modern Approach: Before listening anticipation ➔ While listening for gist & details ➔ After listening evidence justification."] },
    { id: 50, category: "Teacher Comparison", title: "Classical vs. Modern Teacher: Speaking", subtitle: "Student-to-Student Interactive Flow", text: "Classical: Teacher asks ➔ Student answers ➔ Teacher moves to next student.", bullets: ["Modern: Student A ➔ Student B ➔ Student C debate and collaborative idea defense."] },
    { id: 51, category: "Teacher Comparison", title: "Classical vs. Modern Teacher: Writing", subtitle: "Text Architecture over Model Memorization", text: "Classical: Memorize model essay ➔ Reproduce in exam.", bullets: ["Modern: Teach text architecture (Claim ➔ Reason ➔ Evidence ➔ Explanation ➔ Conclusion)."] },
    { id: 52, category: "Teacher Comparison", title: "Classroom Time Allocation (Teacher Talk Ratio)", subtitle: "Maximizing Student Talking Time (STT)", text: "Traditional: Teacher Talk (50–60%), Student Practice (30–40%), Interaction (10%).", bullets: ["Modern Balance: Teacher Guidance (30%), Guided Practice (25%), Student-Led Production (45%)."] },
    { id: 53, category: "Skills Framework", title: "Four Core Skills Structured Framework", subtitle: "Visual Guide for Teachers and Learners", text: "Organizing Reading, Listening, Writing, and Speaking into a coherent structural roadmap.", bullets: ["Ensures balanced pedagogical execution across all lesson sequences."] },
    { id: 54, category: "Skills Framework", title: "Reading Strategy Roadmap", subtitle: "Pre-Reading, While-Reading & Context Clues", text: "• Pre-Reading: Visual Clues, Brainstorming topic & expected keywords.", bullets: ["• While-Reading: Skimming (gist), Scanning (specific data), Context Clues (inferring unfamiliar vocabulary)."] },
    { id: 55, category: "Skills Framework", title: "Listening Mastery & Post-Reading Guide", subtitle: "Purpose Setting & Script Analysis", text: "• Post-Reading: Critical Thinking and real-world transfer.", bullets: ["• Listening: Set Purpose ➔ Active Listening ➔ Comprehension Check via audio scripts."] },
    { id: 56, category: "Skills Framework", title: "Writing Skill Builder", subtitle: "Paragraph Architecture & Cohesive Devices", text: "Structuring Analytical Paragraphs & Essays:", bullets: ["• Topic Sentence (Claim)", "• Supporting Details (Reason & Evidence)", "• Concluding Sentence", "• Cohesive Devices & Self-Editing Checklist"] },
    { id: 57, category: "Skills Framework", title: "Speaking & Production Framework", subtitle: "Language Functions & Fluency vs. Accuracy", text: "• Language Functions: Expressing opinions, accepting/rejecting, hedging, suggesting.", bullets: ["• Discussion Prompts for pair work; balancing communicative fluency with grammatical accuracy."] },
    { id: 58, category: "Infographics", title: "JRE & IBL Strategies Master Infographic", subtitle: "From Passive Reception to Active Thinking", text: "Visual synthesis comparing JRE and iBL.", bullets: ["JRE Formula: Justify + Reason + Evidence.", "Golden Rule: WHAT is my position? WHY do I believe it? WHERE is the evidence? SO WHAT?"] },
    { id: 59, category: "Novel Literature", title: "Extensive Reading Approach: Teaching Novels", subtitle: "Teacher Role vs. Student Role in Literature", text: "Core Philosophy: Reading for Pleasure, Thinking for Meaning, Discussing for Understanding.", bullets: ["Teacher: Facilitator, Guide, Moderator. Student: Read at home, discuss in class, think critically."] },
    { id: 60, category: "Novel Literature", title: "Teacher's Implementation Guide: The Novel", subtitle: "Teaching 'The Lost World' through Extensive Reading", text: "Arthur Conan Doyle's classic adventure adapted for Grade 11 secondary learners.", bullets: ["Promoting reading enjoyment, contextual vocabulary inference, and ethical character analysis."] },
    { id: 61, category: "Novel Literature", title: "Class Structure for 45-50 Minute Novel Lesson", subtitle: "3-Stage Literature Framework", text: "Stage 1: Reviewing (10 mins) ➔ Stage 2: Viewing & Discussion (25-30 mins) ➔ Stage 3: Pre-Viewing (10 mins).", bullets: ["Students read at home; students interact and discuss in class; teacher facilitates."] },
    { id: 62, category: "Novel Literature", title: "Recommended Novel Lesson Flowchart", subtitle: "Maximizing STT & Character Hot-Seating", text: "Stage 1: Retrieval questions, One-minute retell. Stage 2: Maximize STT, quotation analysis, character hot-seating. Stage 3: Written consolidation & cliffhanger prediction.", bullets: ["READ ➔ INTERPRET ➔ PREDICT ➔ RESPOND ➔ ENJOY."] },
    { id: 63, category: "Novel Literature", title: "Contextual Vocabulary & Interaction Model", subtitle: "Step-by-Step Novel Flowcharts", text: "Contextual Vocabulary: 1. Identify ➔ 2. Infer ➔ 3. Discuss ➔ 4. Verify.", bullets: ["Classroom Model: Recall ➔ Observe ➔ Infer ➔ Discuss ➔ Justify ➔ Respond ➔ Read next."] },
    { id: 64, category: "Novel Literature", title: "Extensive Reading: Best Practices vs. Pitfalls", subtitle: "What Teachers Should Avoid & Essential Checklist", text: "❌ Avoid: Translating word-for-word, dominating discussions, lecturing at length.", bullets: ["✅ Do: Maximize STT, ask thinking questions, use context clues, promote predictions."] },
    { id: 65, category: "Novel Literature", title: "Novel Literature Lesson Plan Template (Page 1)", subtitle: "Reader-Response & Inquiry-Based Framework", text: "Teacher Name | Date/Class | Novel: The Lost World | Chapter | Theme.", bullets: ["1. Hook & Thematic Connection (5m)", "2. Context & Student Recap (5m)", "3. Active Exploration (20m)", "4. Synthesis & Critical Reaction (10m)"] },
    { id: 66, category: "Novel Literature", title: "Novel Literature Lesson Plan Template (Page 2)", subtitle: "Bridge, Foreshadowing & Teacher Reflection", text: "5. Bridge & Foreshadowing (5 Mins): High-interest prediction question.", bullets: ["Post-Lesson Teacher Reflection: Textual evidence citation, student participation, pacing adjustments."] },
    { id: 67, category: "Novel Summaries", title: "The Lost World: Chapters 1 & 2 Summaries", subtitle: "Ch 1: A Dream of Adventure | Ch 2: Challenger's Secret", text: "Ch 1: Malone rejected by Gladys; seeks dangerous assignment from McArdle; tricks Challenger.", bullets: ["Ch 2: Challenger exposes Malone; street brawl; impressed by integrity, Challenger reveals Maple White sketchbook and pterodactyl bone."] },
    { id: 68, category: "Novel Summaries", title: "The Lost World: Chapters 3 & 4 Summaries", subtitle: "Ch 3: Expedition Chosen | Ch 4: Into the Unknown", text: "Ch 3: Summerlee challenges Challenger; Malone & Roxton volunteer; Challenger appears in Manaos.", bullets: ["Ch 4: Amazon trek; fell tree bridge; Gomez destroys bridge for revenge, trapping explorers; Zambo stays loyal below."] },
    { id: 69, category: "Novel Summaries", title: "The Lost World: Chapters 5 & 6 Summaries", subtitle: "Ch 5: Trapped | Ch 6: Malone's Night Adventure", text: "Ch 5: Fort Challenger built; Iguanodons spotted; pterodactyl swamp ambush; human smoke seen.", bullets: ["Ch 6: Malone's night solo trek; Allosaurus chase; pit trap; camp destroyed; professors captured by Ape-men."] },
    { id: 70, category: "Novel Summaries", title: "The Lost World: Chapters 7 & 8 Summaries", subtitle: "Ch 7: Prisoners of Ape-Men | Ch 8: Battle for Plateau", text: "Ch 7: Roxton & Malone rescue professors and Accala captives (chief Maretas) from execution cliff.", bullets: ["Ch 8: Accala & explorers defeat ape-men; plesiosaurs observed; Accala refuse to let explorers leave to keep them as protectors."] },
    { id: 71, category: "Novel Summaries", title: "The Lost World: Chapters 9 & 10 Summaries", subtitle: "Ch 9: Hidden Way Home | Ch 10: Proof Before World", text: "Ch 9: Hydrogen balloon test fails; Maretas secretly shows hidden tunnel; explorers descend to Zambo and rescue party.", bullets: ["Ch 10: Live pterodactyl released in London hall; Malone finds Gladys married to William Potts; true courage realized; £200,000 diamonds shared."] },
    { id: 72, category: "Summative Evaluation", title: "Novel Summative Assessment & JRE Synthesis", subtitle: "20 Deep Evaluation & Justification Prompts", text: "Summative assessment prompts requiring textual proof across the novel.", bullets: ["Evolution of Malone, Summerlee's skepticism, Accala alliance ethics, Zambo & Maretas contributions."] },
    { id: 73, category: "Conclusion", title: "Conclusion & Professional Commitment", subtitle: "Embracing the Baccalaureate Educational Vision", text: "Thank you for participating in this professional development journey.", bullets: ["Empowering Egyptian learners with 21st-century critical thinking, authentic communication, and lifelong learning."] },
    { id: 74, category: "Acknowledgments", title: "Acknowledgments & Supervision Closing", subtitle: "Kafr El-Sheikh General English Supervision", text: "Special appreciation to curriculum leadership, trainers, and secondary English educators across Egypt.", bullets: ["General English Supervision – Kafr El-Sheikh Directorate", "NCEEE Assessment Framework", "Ministry of Education & Technical Education"] }
];

// 8 Sections × 10 MCQs = 80 Authentically Drafted Questions with Equalized Option Lengths
const SECTION_QUIZZES = {
    quiz_overview: {
        title: "Section 2 Quiz: Vision, Foundations & Learner Profile",
        questions: [
            {
                id: "ov_1",
                question: "What is the primary target of Egypt Vision 2030 in the secondary education sector?",
                options: [
                    "Increasing the reliance on traditional written paper exams to test grammar rules.",
                    "Providing inclusive, high-quality education aligned with international benchmarks.",
                    "Replacing classroom teachers completely with automated multiple-choice drill software.",
                    "Reverting to classical grammar-translation methods across all secondary schools."
                ],
                correct: 1,
                explanation: "Egypt Vision 2030 aims to elevate education systems to match international standards (IB), focusing on quality, equity, digital integration, and teacher empowerment."
            },
            {
                id: "ov_2",
                question: "How many thematic modules comprise the new Egyptian Baccalaureate English curriculum?",
                options: [
                    "20 discrete units focused on separate grammar rules and weekly lists.",
                    "10 holistic modules integrating all skills around transferable concepts.",
                    "15 conversation booklets designed exclusively for informal oral fluency.",
                    "5 extensive literature anthologies accompanied by line-by-line translations."
                ],
                correct: 1,
                explanation: "The curriculum consists of 10 holistic, theme-based modules that integrate all four skills around overarching global and cultural concepts."
            },
            {
                id: "ov_3",
                question: "According to Lynn Erickson's Concept-Based Learning framework, why are transferable concepts used?",
                options: [
                    "They allow students to transfer deep understanding into unfamiliar contexts.",
                    "They eliminate all vocabulary acquisition to simplify secondary school testing.",
                    "They replace literary text exploration with mathematical reasoning formulas.",
                    "They guarantee that exam questions remain identical across multiple academic years."
                ],
                correct: 0,
                explanation: "Concept-based learning develops deep transferable understanding (e.g. Identity, Well-being), empowering students to apply knowledge in novel situations."
            },
            {
                id: "ov_4",
                question: "How does Vygotsky's Zone of Proximal Development (ZPD) apply to the curriculum's pedagogy?",
                options: [
                    "Students must work in complete isolation without teacher guidance or peer input.",
                    "Learning is scaffolded from existing schema toward complex academic reasoning.",
                    "Teachers lecture continuously without checking students' prior cognitive schema.",
                    "Students are evaluated exclusively on concepts they have never been taught before."
                ],
                correct: 1,
                explanation: "Vygotsky's ZPD underpins the scaffolding sequence: activating prior knowledge in Phase 1 and guiding students toward higher-order synthesis."
            },
            {
                id: "ov_5",
                question: "What does 'Teaching Through English' mean as opposed to merely 'Teaching English'?",
                options: [
                    "Translating every textbook paragraph immediately into the students' native tongue.",
                    "Using English as a thinking tool for inquiry, critical debate, and problem-solving.",
                    "Teaching abstract grammar rules through memorized formulas without text context.",
                    "Restricting classroom discourse to teacher talk while students remain silent."
                ],
                correct: 1,
                explanation: "Teaching through English positions the language as a dynamic tool for thought, inquiry, and communication rather than an inert set of rules."
            },
            {
                id: "ov_6",
                question: "How is vocabulary acquired in the new Baccalaureate curriculum?",
                options: [
                    "Through memorizing bilingual word lists and copying definitions several times.",
                    "Through contextual deduction, authentic text usage, and word-family links.",
                    "By looking up every unfamiliar word in a dictionary before reading the passage.",
                    "Through repetitive rote spelling drills completely disconnected from textual context."
                ],
                correct: 1,
                explanation: "Vocabulary instruction shifts to 'Vocabulary through Context and Understanding', connecting words directly to communicative usage."
            },
            {
                id: "ov_7",
                question: "What characterizes a 'Driving Inquiry Question' at the beginning of each unit?",
                options: [
                    "It presents a single factual answer directly stated in the opening paragraph.",
                    "It is open-ended, contestable, and grounded in students' real-life experiences.",
                    "It assesses whether students memorized the biography of the textbook authors.",
                    "It functions as a closed diagnostic grammar quiz assessing irregular verb forms."
                ],
                correct: 1,
                explanation: "Driving questions are contestable and open-ended (e.g. 'How do our choices shape our future?'), provoking authentic intellectual debate."
            },
            {
                id: "ov_8",
                question: "Which learner profile attribute reflects students who evaluate their own digital habits and mental growth?",
                options: [
                    "Reflective Learners who critically evaluate their own learning and habits.",
                    "Passive Observers who record teacher dictations without asking questions.",
                    "Rote Memorizers who reproduce pre-written model essays in formal exams.",
                    "Mechanical Driller who focus entirely on isolated grammatical accuracy."
                ],
                correct: 0,
                explanation: "Reflective learners demonstrate metacognitive awareness of their learning, emotions, and digital habits."
            },
            {
                id: "ov_9",
                question: "Why is Critical Media Literacy essential in the modern curriculum (Hobbs & Wineburg)?",
                options: [
                    "To encourage students to share viral social media posts without verification.",
                    "To equip learners to detect bias, decode the highlight reel, and verify sources.",
                    "To train students in commercial marketing to maximize online ad engagement.",
                    "To replace academic essays with short, emotive video captions on mobile apps."
                ],
                correct: 1,
                explanation: "Media literacy equips learners to distinguish credible evidence from misinformation and biased emotional framing online."
            },
            {
                id: "ov_10",
                question: "What is the ultimate goal of the Egyptian Baccalaureate English program?",
                options: [
                    "Restricting student output to predictable, memorized dialogs for regional tests.",
                    "Empowering learners for university success, careers, and global citizenship.",
                    "Eliminating literature and argumentative writing in favor of multiple-choice tests.",
                    "Preparing students solely for translation jobs through bilingual vocabulary lists."
                ],
                correct: 1,
                explanation: "The curriculum prepares learners for academic excellence, lifelong learning, and global citizenship with a strong Egyptian cultural identity."
            }
        ]
    },
    quiz_shift: {
        title: "Section 3 Quiz: Pedagogical Shift & Teacher Talk",
        questions: [
            {
                id: "sh_1",
                question: "What was the typical Teacher Talk percentage in the classical/traditional secondary classroom?",
                options: [
                    "10–20% of class time, leaving the remainder for student-led group debates.",
                    "30% of class time, focusing exclusively on facilitating inquiry activities.",
                    "50–60% of class time, dominating the period with lectures and explanations.",
                    "85–90% of class time, prohibiting students from speaking or asking questions."
                ],
                correct: 2,
                explanation: "In traditional classrooms, teacher lecturing consumed 50–60% of total period time, leaving minimal opportunity for student communicative production."
            },
            {
                id: "sh_2",
                question: "In the modern Baccalaureate model, how much time is allocated to Student Interaction & Production?",
                options: [
                    "10%, restricted to answering isolated questions when called upon by teacher.",
                    "25%, focused entirely on completing individual grammar exercises silently.",
                    "45%, dedicated to student-led debates, JRE defense, and group production.",
                    "70%, allowing students to converse freely without instructional objectives."
                ],
                correct: 2,
                explanation: "The modern model optimizes student engagement: 30% Teacher Guidance, 25% Guided Practice, and 45% Student Interaction (STT)."
            },
            {
                id: "sh_3",
                question: "What is the recommended sequence for reading instruction in the modern inquiry approach?",
                options: [
                    "Reading aloud ➔ Line-by-line translation ➔ Teacher explanation ➔ Book questions.",
                    "Predict ➔ Read ➔ Find Evidence (Evidence Hunt) ➔ Infer ➔ Answer ➔ Discuss.",
                    "Memorize vocabulary ➔ Translate text ➔ Complete grammar drills ➔ Take exam.",
                    "Listen to teacher read twice ➔ Copy correct answers from the board into books."
                ],
                correct: 1,
                explanation: "The modern reading roadmap moves through active prediction, evidence hunting, inference, and peer discussion."
            },
            {
                id: "sh_4",
                question: "What is the key difference between deductive grammar instruction and modern 'Grammar in Context'?",
                options: [
                    "Classical gives rules first; modern uses inductive discovery (Example ➔ Notice ➔ Use).",
                    "Classical uses inductive exploration; modern eliminates grammar explanations completely.",
                    "Classical focuses on communicative use; modern focuses on memorizing definitions.",
                    "Both approaches rely identically on drilling decontextualized sentence exercises."
                ],
                correct: 0,
                explanation: "Grammar in context is inductive: students notice patterns in authentic texts and discover the rhetorical purpose of structures before practicing them."
            },
            {
                id: "sh_5",
                question: "How does listening pedagogy change in the 3-stage modern model?",
                options: [
                    "Students listen once and copy down the teacher's answers from the whiteboard.",
                    "Pre-listening preview ➔ While-listening for gist/data ➔ Post-listening evidence defense.",
                    "Students transcribe the entire audio script verbatim without analyzing meaning.",
                    "Teacher reads transcript aloud while translating terminology into native language."
                ],
                correct: 1,
                explanation: "Progressive auditory scaffolding moves from pre-listening schema activation to dual-pass listening and collaborative evidence justification."
            },
            {
                id: "sh_6",
                question: "What interaction pattern represents modern speaking instruction?",
                options: [
                    "Teacher asks Question ➔ Student A answers ➔ Teacher immediately moves to Student B.",
                    "Student A ➔ Student B ➔ Student C (Peer-to-peer questioning, debate, and defense).",
                    "Teacher delivers a 40-minute oral presentation while students take silent notes.",
                    "Students take turns reading aloud scripted dialogs from the textbook in unison."
                ],
                correct: 1,
                explanation: "Modern speaking prioritizes student-to-student interaction (A ➔ B ➔ C) to build fluency, active listening, and persuasive argument defense."
            },
            {
                id: "sh_7",
                question: "How is writing approached in the modern Baccalaureate framework?",
                options: [
                    "Providing students with pre-written model essays to memorize and reproduce.",
                    "Teaching text architecture (Claim ➔ Reason ➔ Evidence ➔ Synthesis) for new topics.",
                    "Restricting student writing to filling in single missing words in sentences.",
                    "Having students copy paragraphs from reference encyclopedias without analysis."
                ],
                correct: 1,
                explanation: "Writing focuses on text architecture and evidence-based paragraphing, empowering learners to tackle novel, unseen prompts."
            },
            {
                id: "sh_8",
                question: "Why does word-for-word translation fail in developing communicative competence?",
                options: [
                    "Because bilingual dictionaries are too difficult for secondary students to use.",
                    "It detaches words from syntax and context, preventing natural communicative deployment.",
                    "It takes significantly less instructional time than communicative language teaching.",
                    "Because modern languages share no common grammatical or semantic structures."
                ],
                correct: 1,
                explanation: "Literal translation detaches vocabulary from syntax and context, preventing students from using language productively in speaking and writing."
            },
            {
                id: "sh_9",
                question: "What is the primary role of the educator in an inquiry-driven English classroom?",
                options: [
                    "An authoritative lecturer who delivers pre-packaged answers to passive listeners.",
                    "A facilitator, guide, and questioner who scaffolds discovery and evidence gathering.",
                    "A strict disciplinarian who ensures complete silence and prevents peer discussions.",
                    "An administrative grader who evaluates written homework without classroom debate."
                ],
                correct: 1,
                explanation: "The teacher acts as a facilitator and discovery guide, using guiding questions to foster student autonomy."
            },
            {
                id: "sh_10",
                question: "When analyzing student writing, what does the modern teacher evaluate beyond mechanics?",
                options: [
                    "Calligraphic neatness and whether the student copied the teacher's exact summary.",
                    "Claim clarity, cause-and-effect reasoning coherence, and textual evidence integration.",
                    "The speed of paragraph completion and the total count of obscure synonyms used.",
                    "Whether the student adhered strictly to a single universally memorized template."
                ],
                correct: 1,
                explanation: "Assessment focuses on cognitive coherence: clear claims, cause-and-effect reasoning, and evidence integration (JRE)."
            }
        ]
    },
    quiz_strategies: {
        title: "Section 4 Quiz: JRE & IBL Core Strategies",
        questions: [
            {
                id: "st_1",
                question: "What is the first step in the JRE argument triad (Justify)?",
                options: [
                    "Providing a long list of numerical statistics from untrusted internet blogs.",
                    "Stating a clear, defensible position or judgment on the issue without ambiguity.",
                    "Asking a rhetorical question without providing any explanation or answer.",
                    "Writing a concluding sentence that repeats the title of the unit word-for-word."
                ],
                correct: 1,
                explanation: "Justify (Claim/Position) requires formulating a definitive, unambiguous stance on the issue under discussion."
            },
            {
                id: "st_2",
                question: "What is the function of the 'Reason' component in the JRE framework?",
                options: [
                    "To explain *why* the claim is valid by establishing a logical cause-and-effect link.",
                    "To copy a random quotation from a novel without providing any textual context.",
                    "To translate the introductory claim into another language for the examiner.",
                    "To introduce an unrelated personal anecdote to fill space in the paragraph."
                ],
                correct: 0,
                explanation: "Reasoning explains the psychological, social, or logical cause-and-effect mechanism supporting the position."
            },
            {
                id: "st_3",
                question: "What constitutes valid 'Evidence' in a secondary JRE paragraph?",
                options: [
                    "Unverified personal rumors and informal claims heard on social media videos.",
                    "Concrete data, research findings (e.g. WHO metrics), or direct textual proof.",
                    "A generalized assertion stating that 'everyone in the world agrees with this'.",
                    "Repeating the opening claim three times using different decorative fonts."
                ],
                correct: 1,
                explanation: "Evidence must be grounded in concrete facts, research metrics (e.g. JAMA / WHO studies), or textual citations."
            },
            {
                id: "st_4",
                question: "What is the Golden Rule for students when constructing academic arguments?",
                options: [
                    "Always begin every paragraph with 'I think' and omit supporting reasons.",
                    "Ask yourself: WHAT is my claim? WHY do I believe it? WHERE is my evidence?",
                    "Ensure your paragraph contains at least fifty descriptive adjectives in a row.",
                    "Never acknowledge opposing arguments or mention alternative perspectives."
                ],
                correct: 1,
                explanation: "The Golden Rule trains students to internalize the triad: Claim (What), Reason (Why), Evidence (Where), and Synthesis (So what)."
            },
            {
                id: "st_5",
                question: "How does the IBL strategy differ from the JRE strategy?",
                options: [
                    "JRE builds and supports a position; IBL builds the inquiring mindset to explore.",
                    "JRE is used exclusively in science; IBL is used exclusively in history classes.",
                    "IBL is a formal written exam; JRE is an informal homework preparation sheet.",
                    "There is no functional or pedagogical difference between the two frameworks."
                ],
                correct: 0,
                explanation: "JRE focuses on argumentation output; IBL focuses on critical exploration, questioning, and multi-perspective investigation."
            },
            {
                id: "st_6",
                question: "What is the 'Highlight Reel Effect' in social media analysis (Unit 1)?",
                options: [
                    "A specialized camera lighting filter used exclusively in film production.",
                    "The selective posting of only perfect moments, creating an unrealistic reality.",
                    "A sports television broadcast summarizing the best goals of the tournament.",
                    "A study technique for highlighting grammatical rules in school textbooks."
                ],
                correct: 1,
                explanation: "The Highlight Reel Effect refers to users curating only their best moments online, causing viewers to make unfair social comparisons."
            },
            {
                id: "st_7",
                question: "Why is 'Academic Hedging' (e.g. suggests, may indicate) taught in media literacy?",
                options: [
                    "To make academic sentences artificially longer and more difficult to read.",
                    "To avoid unverified absolute generalizations and state claims with caution.",
                    "To translate passive verb tenses into active past continuous structures.",
                    "To express intense anger and emotional outrage in persuasive writing tasks."
                ],
                correct: 1,
                explanation: "Hedging allows writers to present claims with precision and caution, avoiding biased absolute statements."
            },
            {
                id: "st_8",
                question: "How does Richard Thaler's 'Nudge Theory' connect to public health in Unit 1?",
                options: [
                    "It advocates banning all consumer food products by strict governmental laws.",
                    "It shows how small context changes encourage healthier choices without force.",
                    "It requires all school students to complete three hours of sports every day.",
                    "It claims that individual choices have zero influence over personal health."
                ],
                correct: 1,
                explanation: "Nudge Theory demonstrates how environmental structuring (e.g. food labeling, sugar taxes) makes the healthier choice the easier choice."
            },
            {
                id: "st_9",
                question: "What should a teacher do instead of giving direct answers during an IBL session?",
                options: [
                    "Leave the classroom completely to let students solve problems unattended.",
                    "Ask Socratic guiding questions that lead students to discover textual proof.",
                    "Read the textbook answer key aloud immediately after asking the question.",
                    "Tell students that open inquiry questions have no educational importance."
                ],
                correct: 1,
                explanation: "Teachers use guiding questions to scaffold independent critical inquiry and evidence discovery."
            },
            {
                id: "st_10",
                question: "Which of the following phrases represents an absolute/biased claim to be avoided?",
                options: [
                    "Studies suggest that excessive screen time might influence adolescent focus.",
                    "Social media is completely dangerous and destroys all teenagers' confidence.",
                    "Research indicates that regular physical exercise plays an important role.",
                    "Evidence implies that balanced sleep routines may improve academic focus."
                ],
                correct: 1,
                explanation: "'Completely dangerous' and 'destroys all' are absolute terms that demonstrate bias and lack academic qualification."
            }
        ]
    },
    quiz_fiveperiods: {
        title: "Section 5 Quiz: 5-Period Implementation Framework",
        questions: [
            {
                id: "fp_1",
                question: "What is the primary pedagogical objective of Period 1 (Engagement + Inquiry)?",
                options: [
                    "Testing grammar rules with an individual multiple-choice paper test.",
                    "Stimulating curiosity, formulating the Driving Question, and finding bias.",
                    "Writing a 200-word analytical paragraph in complete classroom silence.",
                    "Memorizing vocabulary definitions from the textbook glossary at the back."
                ],
                correct: 1,
                explanation: "Period 1 focuses on schema activation, Think-Pair-Share brainstorming, and establishing the central inquiry question."
            },
            {
                id: "fp_2",
                question: "What collaborative artifact is constructed during Period 2 (Listening + Evidence)?",
                options: [
                    "A grammar worksheet containing twenty sentence transformation exercises.",
                    "A Collaborative Evidence Board on the whiteboard summarizing audio metrics.",
                    "A bilingual dictionary booklet listing vocabulary translated into Arabic.",
                    "A list of mispronounced words compiled during student reading activities."
                ],
                correct: 1,
                explanation: "In Period 2, students engage in an 'Evidence Hunt' and record metrics on the Collaborative Evidence Board."
            },
            {
                id: "fp_3",
                question: "What is the main task in Period 3 (Language & Media Analysis)?",
                options: [
                    "Translating a full newspaper article into Arabic sentence by sentence.",
                    "Analyzing rhetorical devices, discovering grammar, and rewriting biased text.",
                    "Conducting physical sports activities outside in the school playground.",
                    "Memorizing lists of irregular past participle verb forms for homework."
                ],
                correct: 1,
                explanation: "Period 3 scaffolds language discovery: transforming absolute language into academic hedging without dry lectures."
            },
            {
                id: "fp_4",
                question: "How do students practice the JRE framework during Period 4 (JRE + Speaking)?",
                options: [
                    "Through silent independent reading of literary texts without speaking.",
                    "Through Evidence Card games, structured debates, and oral JRE defense.",
                    "By copying paragraphs from the whiteboard into their personal notebooks.",
                    "By listening to audio recordings continuously without answering questions."
                ],
                correct: 1,
                explanation: "Period 4 mobilizes oral JRE defense through debate games, role plays, and formal academic discussion expressions."
            },
            {
                id: "fp_5",
                question: "What writing deliverable is produced in Period 5 (Writing + Reflection)?",
                options: [
                    "A 5-sentence analytical paragraph accompanied by peer review and reflection.",
                    "A memorized poem copied from memory to test accurate spelling ability.",
                    "A single-sentence translation test assessing direct vocabulary knowledge.",
                    "A list of twenty academic vocabulary words written in alphabetical order."
                ],
                correct: 0,
                explanation: "Period 5 translates learning into an analytical paragraph (Claim, Reason, Evidence, Explanation, Synthesis) and metacognitive reflection."
            },
            {
                id: "fp_6",
                question: "What is the student's primary role in Period 1 (Engagement + Inquiry)?",
                options: [
                    "A passive listener who writes down whatever the teacher dictates aloud.",
                    "An explorer, predictor, and questioner who takes part in Think-Pair-Share.",
                    "An exam candidate who completes multiple-choice quizzes independently.",
                    "A proofreader who corrects grammatical errors in other students' drafts."
                ],
                correct: 1,
                explanation: "In Period 1, students explore visual clues, predict outcomes, and question underlying assumptions."
            },
            {
                id: "fp_7",
                question: "Why should the Driving Inquiry Question remain on the board throughout the week?",
                options: [
                    "Because classroom cleaners are instructed not to erase teacher whiteboards.",
                    "To maintain a continuous inquiry arc so students gather evidence across periods.",
                    "To remind students of the date and time of their upcoming final examination.",
                    "To serve as a decorative heading for classroom visitors and inspectors."
                ],
                correct: 1,
                explanation: "Keeping the question visible reinforces the concept of a continuous learning cycle rather than isolated disjointed periods."
            },
            {
                id: "fp_8",
                question: "What peer assessment instrument is used during Period 5 writing review?",
                options: [
                    "A red grading pen used to subtract points for minor spelling slips.",
                    "A structured Checklist evaluating Claim, Reason, Evidence, and Hedging.",
                    "A digital stopwatch measuring how quickly the student finished writing.",
                    "An automated software program that grades essays without human reading."
                ],
                correct: 1,
                explanation: "The Checklist guides peer reviewers to check whether their partner included a clear claim, logical reason, and textual evidence."
            },
            {
                id: "fp_9",
                question: "What is the purpose of the Metacognitive Self-Reflection Card at the unit close?",
                options: [
                    "To determine which students should receive disciplinary penalties.",
                    "To build self-regulation by identifying strengths, challenges, and habits.",
                    "To test whether students have memorized the textbook publication date.",
                    "To record daily student attendance and punctuality for administration."
                ],
                correct: 1,
                explanation: "Metacognitive reflection develops self-directed learners who understand their own cognitive strengths and growth areas."
            },
            {
                id: "fp_10",
                question: "What cognitive shift occurs across the 5-Period Implementation Framework?",
                options: [
                    "From rote memorization to forgetting details before the final examination.",
                    "From initial inquiry and evidence extraction to structured synthesis and reflection.",
                    "From speaking English in pairs to translating everything silently into Arabic.",
                    "From collaborative team problem-solving to complete permanent isolation."
                ],
                correct: 1,
                explanation: "The progression follows Bloom's Taxonomy: Identification ➔ Explanation ➔ Analysis ➔ Evaluation ➔ Justification ➔ Creativity."
            }
        ]
    },
    quiz_units: {
        title: "Section 6 Quiz: Curriculum & Grammar in Context (Units 1–5)",
        questions: [
            {
                id: "un_1",
                question: "In Unit 1, how do Participial Phrases (-ing / -ed) function in academic writing?",
                options: [
                    "They allow writers to pack evidence and background detail into single clauses.",
                    "They replace all main verbs in English sentences with participle infinitives.",
                    "They are informal slang expressions used exclusively in casual text messages.",
                    "They render academic sentences grammatically incomplete and ambiguous."
                ],
                correct: 0,
                explanation: "Participial phrases (e.g. 'Motivated by health goals, individuals adopt active habits') pack evidence efficiently into academic prose."
            },
            {
                id: "un_2",
                question: "Which of the following sentences from Unit 1 utilizes a conditional for academic hedging?",
                options: [
                    "If you do not run 10 kilometers every morning, you will fail in life.",
                    "If schools offer counseling programs, student stress levels may fall noticeably.",
                    "If people eat any sugar, they will instantly develop chronic diseases.",
                    "If teenagers browse social media, they will certainly lose all memory."
                ],
                correct: 1,
                explanation: "'If schools offer counseling, stress levels may fall' uses a 1st conditional with modal hedging ('may') to make a cautious, evidence-based claim."
            },
            {
                id: "un_3",
                question: "In Unit 2, what is the meaning difference between 'stopped to buy' and 'stopped buying'?",
                options: [
                    "Both sentence structures convey identical grammatical and semantic meanings.",
                    "'Stopped to buy' denotes purpose; 'stopped buying' indicates ceasing a habit.",
                    "'Stopped to buy' expresses the past perfect; 'stopped buying' is future simple.",
                    "'Stopped buying' means the subject began purchasing significantly more items."
                ],
                correct: 1,
                explanation: "Verbs like *stop, remember, try* change meaning when followed by an infinitive (purpose) versus a gerund (action/habit)."
            },
            {
                id: "un_4",
                question: "What psychological state is explored in Unit 2 regarding creative arts participation?",
                options: [
                    "The 'Flow State', complete absorption in a task that measurably reduces cortisol.",
                    "Severe digital fatigue caused by playing classical acoustic musical instruments.",
                    "Physical exhaustion caused by participating in creative drawing and painting.",
                    "Social isolation resulting from participating in school orchestra performances."
                ],
                correct: 0,
                explanation: "Flow (Csikszentmihalyi) is the state of complete creative absorption, proven by neuroscience to reduce stress hormones."
            },
            {
                id: "un_5",
                question: "In Unit 3, what is the grammatical role of Prepositional Phrases in historical writing?",
                options: [
                    "Establishing precise physical location, temporal sequence, and historical duration.",
                    "Replacing adjectives and adverbs with numerical measurement symbols.",
                    "Translating ancient temple hieroglyphs directly into modern European scripts.",
                    "Expressing personal emotional outrage regarding ancient archaeological sites."
                ],
                correct: 0,
                explanation: "Prepositional phrases of place and time anchor historical narratives in physical and chronological reality."
            },
            {
                id: "un_6",
                question: "Which sentence correctly demonstrates a Concession Clause in discursive writing (Unit 3)?",
                options: [
                    "Although the Grand Egyptian Museum is immense, visitors navigate easily with guides.",
                    "Because the museum is very large, visitors will inevitably become lost inside.",
                    "The museum displays ancient artifacts and therefore tourists travel to Egypt.",
                    "Visiting museums in person is always superior to any digital online exhibition."
                ],
                correct: 0,
                explanation: "'Although the GEM is immense...' introduces an opposing point politely before asserting the main counterpoint."
            },
            {
                id: "un_7",
                question: "In Unit 4, why is the Present Perfect used with markers like *since, already, yet* in formal reports?",
                options: [
                    "To describe fictional fairy tale events that concluded in ancient mythology.",
                    "To connect past events or ongoing trends to their present significance and results.",
                    "To give direct imperatives and instructions to consumers in shopping malls.",
                    "To avoid using action verbs in formal economic research publications."
                ],
                correct: 1,
                explanation: "The present perfect connects past trends to current realities (e.g. 'Food waste has become a severe issue since 2000')."
            },
            {
                id: "un_8",
                question: "What is 'Fronting for Emphasis' as modeled in Unit 4 (e.g. *'Rarely do consumers consider...'* )?",
                options: [
                    "Moving an adverbial to sentence front with inverted word order for formal emphasis.",
                    "Placing the concluding paragraph at the very beginning of an analytical essay.",
                    "Capitalizing every single letter in a headline to attract consumer attention.",
                    "Writing sentences from right to left to create visual novelty for readers."
                ],
                correct: 0,
                explanation: "Fronting shifts adverbials to the sentence front (often triggering subject-auxiliary inversion) to create formal rhetorical emphasis."
            },
            {
                id: "un_9",
                question: "In Unit 4 food waste research, what is the crucial distinction between date labels?",
                options: [
                    "'Best Before' indicates peak quality; 'Use By' marks the safety consumption cutoff.",
                    "'Best Before' means discard immediately; 'Use By' means safe to eat indefinitely.",
                    "Both phrases mean identical things and can be used interchangeably by shops.",
                    "'Use By' is used exclusively for dry canned goods and never for dairy items."
                ],
                correct: 0,
                explanation: "'Best Before' is a quality guideline, whereas 'Use By' is a strict safety cutoff. Misunderstanding this causes massive household waste."
            },
            {
                id: "un_10",
                question: "In Unit 5, which connector expresses a direct causal result in environmental arguments?",
                options: [
                    "Consequently, which introduces the resulting effect of rising global temperatures.",
                    "Although, which introduces a concession clause acknowledging counter-views.",
                    "Despite, which connects a noun phrase showing contrasting circumstances.",
                    "Whereas, which highlights a direct comparison between two distinct entities."
                ],
                correct: 0,
                explanation: "'Consequently' and 'as a result' are cause-and-effect connectors used to link environmental factors to resulting impacts."
            }
        ]
    },
    quiz_novel: {
        title: "Section 7 Quiz: Extensive Reading & The Lost World",
        questions: [
            {
                id: "nv_1",
                question: "What is the core pedagogical principle of teaching literature through Extensive Reading?",
                options: [
                    "Reading word-for-word aloud in class with line-by-line translation into Arabic.",
                    "Students read independently at home; class time is spent on discussion and JRE.",
                    "Memorizing all character names and dates for a weekly factual spelling test.",
                    "Watching film adaptations during class periods without reading the book text."
                ],
                correct: 1,
                explanation: "The professional principle: READ (at home) ➔ INTERPRET ➔ PREDICT ➔ RESPOND ➔ ENJOY (in class)."
            },
            {
                id: "nv_2",
                question: "In Chapter 1 of The Lost World, why does Edward Malone seek a dangerous journalistic assignment?",
                options: [
                    "To earn enough money to establish his own private printing press in London.",
                    "Because Gladys stated she could only love a man who performed brave deeds.",
                    "Because his newspaper editor threatened to dismiss him from the Daily Gazette.",
                    "To investigate illegal diamond mining operations in the South American jungle."
                ],
                correct: 1,
                explanation: "Malone wanted to impress Gladys after she rejected his proposal, believing courage was a prize to win her love."
            },
            {
                id: "nv_3",
                question: "What physical evidence convinces Malone of Challenger's claims in Chapter 2?",
                options: [
                    "A collection of modern landscape photographs taken with a portable camera.",
                    "Maple White's sketchbook drawings and a prehistoric pterodactyl wing bone.",
                    "A preserved dinosaur egg discovered in a remote South American village.",
                    "A certified official document signed by the Brazilian Geographical Society."
                ],
                correct: 1,
                explanation: "Challenger presents Maple White's sketchbook and a preserved pterodactyl wing bone with attached membrane."
            },
            {
                id: "nv_4",
                question: "Why was Professor Summerlee selected for the expedition in Chapter 3?",
                options: [
                    "He was Professor Challenger's closest friend and long-term research partner.",
                    "He was a methodical skeptic who challenged Challenger to prove his claims.",
                    "He possessed expert navigational experience across South American rivers.",
                    "He provided complete private financial sponsorship for the steam launch."
                ],
                correct: 1,
                explanation: "Summerlee demanded verifiable proof; sending the chief skeptic ensured that any corroborating evidence would be academically irrefutable."
            },
            {
                id: "nv_5",
                question: "Why does the guide Gomez destroy the tree bridge in Chapter 4?",
                options: [
                    "The tree trunk collapsed accidentally under the weight of the expedition gear.",
                    "To avenge his brother Pedro Lopez, who was killed by Lord John in the past.",
                    "He panicked after hearing the distant roar of a carnivorous dinosaur in the forest.",
                    "He intended to steal the explorers' weapons and sell them to local river traders."
                ],
                correct: 1,
                explanation: "Gomez was the brother of slave-trader Pedro Lopez, whom Lord John had previously defeated; he trapped the team as an act of personal vengeance."
            },
            {
                id: "nv_6",
                question: "What discovery in Chapter 5 definitively shatters Professor Summerlee's skepticism?",
                options: [
                    "Finding ancient human arrowheads embedded in the bark of a fallen tree.",
                    "Witnessing living, herbivorous Iguanodons feeding peacefully in a forest glade.",
                    "Locating the abandoned campsite and broken compass of explorer Maple White.",
                    "Observing strange mineral formations inside a dark cave near Fort Challenger."
                ],
                correct: 1,
                explanation: "Seeing live Iguanodons moving through the glade forces Summerlee to admit: 'You were right, Challenger.'"
            },
            {
                id: "nv_7",
                question: "What does Malone realize about courage in Chapter 6 after his night adventure?",
                options: [
                    "That walking alone in dangerous territory proves superior physical bravery.",
                    "That solo bravado was childish pride; real courage means protecting companions.",
                    "That naming the lake after Gladys would ensure her lifelong devotion to him.",
                    "That carnivorous dinosaurs can easily be frightened away with small lanterns."
                ],
                correct: 1,
                explanation: "Malone realizes performative bravado is childish, whereas returning into danger to rescue captured friends represents authentic courage."
            },
            {
                id: "nv_8",
                question: "How do the explorers gain the enduring alliance of the Accala tribe in Chapter 7 & 8?",
                options: [
                    "By offering to teach the Accala how to speak fluent English and navigate maps.",
                    "By rescuing chief Maretas and using their rifles to defeat the ape-men army.",
                    "By trading all their scientific instruments and notebooks for shelter in caves.",
                    "By constructing a large wooden fortress to protect the Accala from dinosaurs."
                ],
                correct: 1,
                explanation: "The explorers rescue young chief Maretas and provide decisive rifle support in the battle for the plateau."
            },
            {
                id: "nv_9",
                question: "How do the explorers ultimately escape the plateau in Chapter 9?",
                options: [
                    "By launching Professor Challenger's homemade hydrogen membrane balloon.",
                    "Young chief Maretas secretly reveals a hidden cliff tunnel leading downward.",
                    "The Accala warriors build a large wooden suspension bridge across the chasm.",
                    "A British military rescue team scales the cliffs with heavy climbing equipment."
                ],
                correct: 1,
                explanation: "Maretas repays his debt of gratitude by guiding Malone to a secret passage through the outer cliff wall."
            },
            {
                id: "nv_10",
                question: "How does Chapter 10 complete the novel's thematic exploration of courage?",
                options: [
                    "Malone realizes courage is an ongoing relational choice rather than a trophy.",
                    "Malone returns to London, marries Gladys, and gives up journalism forever.",
                    "Challenger sells the living pterodactyl to a commercial circus in Kensington.",
                    "Lord John Roxton keeps all the volcanic diamonds for his personal estate."
                ],
                correct: 0,
                explanation: "Discovering Gladys married William Potts frees Malone: he recognizes that courage is about discovering what you are capable of when serving others."
            }
        ]
    },
    quiz_plans: {
        title: "Section 8 Quiz: Lesson Planning & Formative Assessment",
        questions: [
            {
                id: "lp_1",
                question: "What is the very first component in the standardized Baccalaureate Lesson Plan?",
                options: [
                    "A list of homework exercises assigned for the weekend.",
                    "Pedagogical Foundations (Learner Profile & Contextual Relevance).",
                    "Grammar drills and sentence correction exercises.",
                    "End-of-term examination sample questions."
                ],
                correct: 1,
                explanation: "The plan begins with Pedagogical Foundations: anchoring the lesson in Learner Profile traits and real-world relevance."
            },
            {
                id: "lp_2",
                question: "What are the four phases of the JRE+ Inquiry Sequence in the master lesson plan?",
                options: [
                    "Phase 1: Justification ➔ Phase 2: Reasoning ➔ Phase 3: Evidence ➔ Phase 4: Reflect & Act.",
                    "Phase 1: Reading ➔ Phase 2: Writing ➔ Phase 3: Grammar ➔ Phase 4: Examination.",
                    "Phase 1: Translation ➔ Phase 2: Memorization ➔ Phase 3: Dictation ➔ Phase 4: Grading.",
                    "Phase 1: Homework ➔ Phase 2: Lecture ➔ Phase 3: Silence ➔ Phase 4: Dismissal."
                ],
                correct: 0,
                explanation: "The JRE+ cycle structures learning through Justification (Activate), Reasoning (Explore), Evidence (Synthesize), and Reflect & Act (Transfer)."
            },
            {
                id: "lp_3",
                question: "In the Formative Assessment Rubric, what does Dimension 1 (Conceptual Understanding) evaluate?",
                options: [
                    "The mechanical spelling accuracy of the student's handwritten notes.",
                    "Whether the student accurately explains concepts like 'Highlight Reel Effect'.",
                    "How quickly the student can read a complex academic paragraph aloud.",
                    "The total number of workbook pages completed during the semester."
                ],
                correct: 1,
                explanation: "Conceptual understanding measures whether the learner grasps the deeper transferable ideas beyond superficial vocabulary."
            },
            {
                id: "lp_4",
                question: "How is 'Critical Thinking' assessed in Dimension 2 of the formative rubric?",
                options: [
                    "Accepting all written statements in the textbook without questioning.",
                    "Evaluating statistical claims (e.g. WHO data) and challenging absolute bias.",
                    "Refusing to participate in collaborative small-group discussions.",
                    "Memorizing the teacher's model answers before the lesson begins."
                ],
                correct: 1,
                explanation: "Critical thinking evaluates whether students scrutinize evidence, detect bias, and interrogate absolute claims."
            },
            {
                id: "lp_5",
                question: "What observable indicator defines success in Dimension 3: Use of Evidence (JRE)?",
                options: [
                    "Expressing personal feelings without citing any data from the listening text.",
                    "Integrating audio metrics, research data, and textual quotes into arguments.",
                    "Copying the full reading text into the answer space word-for-word.",
                    "Leaving the evidence section empty when writing an analytical paragraph."
                ],
                correct: 1,
                explanation: "Dimension 3 evaluates how skillfully students synthesize textual proof to anchor their reasoned claims."
            },
            {
                id: "lp_6",
                question: "What is assessed under Dimension 4 (Communication & Hedging)?",
                options: [
                    "Speaking louder than other group members during class debates.",
                    "Replacing biased, absolute words with neutral phrasing and hedging verbs.",
                    "Using informal colloquial texting slang in formal academic writing.",
                    "Avoiding complex sentences and compound grammatical structures completely."
                ],
                correct: 1,
                explanation: "Communication evaluates the learner's ability to maintain an objective, nuanced academic register."
            },
            {
                id: "lp_7",
                question: "How does Dimension 5 (Academic Integrity) apply to student inquiry tasks?",
                options: [
                    "Copying analysis directly from peers without personal cognitive contribution.",
                    "Ethically attributing sources, producing original claims, and collaborating.",
                    "Using artificial intelligence secretly without declaring its application.",
                    "Memorizing copyrighted commercial exam summaries to pass class tests."
                ],
                correct: 1,
                explanation: "Academic integrity expects honest citation, ethical peer collaboration, and original analytical thought."
            },
            {
                id: "lp_8",
                question: "What pedagogical differentiation is recommended for developing learners during writing?",
                options: [
                    "Excusing them from participating in analytical writing tasks entirely.",
                    "Providing a structured word bank of hedging verbs (suggests, may, implies).",
                    "Requiring them to copy an entire English dictionary by hand at home.",
                    "Assigning lower letter grades without offering any scaffolding support."
                ],
                correct: 1,
                explanation: "Providing targeted word banks and sentence frames scaffolds developing learners toward independent mastery."
            },
            {
                id: "lp_9",
                question: "In the Novel Literature Lesson Plan, what happens in Stage 1: Hook (5 Mins)?",
                options: [
                    "Administering a written 50-item vocabulary recall examination.",
                    "Introducing an ethical dilemma or essential question connected to the theme.",
                    "Reading the full novel chapter from start to finish without pausing.",
                    "Grading student homework notebooks silently at the teacher's desk."
                ],
                correct: 1,
                explanation: "Stage 1 engages students with an authentic thematic dilemma that frames the chapter's active exploration."
            },
            {
                id: "lp_10",
                question: "What is the final section of both Unit and Literature lesson plans?",
                options: [
                    "Teacher Self-Reflection & Quality Checklist to evaluate pacing and evidence.",
                    "Playing a bell sound recording to signal the end of the school period.",
                    "Copying the textbook table of contents into student exercise books.",
                    "Repeating the entire lesson plan from the beginning on the next day."
                ],
                correct: 0,
                explanation: "Teacher self-reflection enables continuous professional growth by evaluating student evidence usage and instructional pacing."
            }
        ]
    }
};

// Application Init
document.addEventListener("DOMContentLoaded", () => {
    initScrollProgress();
    initThemeToggle();
    initFontWeightToggle();
    initBannerToggle();
    initHeadingsToggle();
    initAccordions();
    initJREBuilder();
    initNavHighlight();
    initSlideViewer();
    initZoomControls();
    initCustomAudioPlayer();
    initTTSSelectionListener();
    renderAllSectionQuizzes();
});

/* Bold / Normal (B/N) Mode */
function initFontWeightToggle() {
    const isBold = localStorage.getItem("font_weight_mode") === "bold";
    if (isBold) {
        document.body.classList.add("font-bold-mode");
    }
    updateBoldButtonUI(isBold);
}

function toggleFontWeight() {
    const isCurrentlyBold = document.body.classList.toggle("font-bold-mode");
    localStorage.setItem("font_weight_mode", isCurrentlyBold ? "bold" : "normal");
    updateBoldButtonUI(isCurrentlyBold);
}

function updateBoldButtonUI(isBold) {
    const btn = document.getElementById("btn-toggle-bold");
    const label = document.getElementById("bold-label");
    if (btn && label) {
        if (isBold) {
            btn.classList.add("active-mode");
            label.innerText = "Bold (Active)";
        } else {
            btn.classList.remove("active-mode");
            label.innerText = "B/N (Normal)";
        }
    }
}

/* Hideable Upper Banner */
function initBannerToggle() {
    const isHidden = localStorage.getItem("upper_banner_hidden") === "true";
    if (isHidden) {
        setBannerVisibility(false);
    }
}

function toggleUpperBanner() {
    const banner = document.getElementById("top-control-bar");
    const isHidden = banner.classList.contains("banner-hidden");
    setBannerVisibility(isHidden); // if was hidden, show it; else hide it
}

function setBannerVisibility(show) {
    const banner = document.getElementById("top-control-bar");
    const restoreTab = document.getElementById("btn-show-banner");
    if (!banner || !restoreTab) return;

    if (show) {
        banner.classList.remove("banner-hidden");
        restoreTab.classList.remove("visible");
        localStorage.setItem("upper_banner_hidden", "false");
    } else {
        banner.classList.add("banner-hidden");
        restoreTab.classList.add("visible");
        localStorage.setItem("upper_banner_hidden", "true");
    }
}

/* Sidebar Navigation (Drawer) */
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar-nav");
    const overlay = document.getElementById("sidebar-overlay");
    if (!sidebar || !overlay) return;

    const isActive = sidebar.classList.contains("active");
    if (isActive) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    const sidebar = document.getElementById("sidebar-nav");
    const overlay = document.getElementById("sidebar-overlay");
    if (sidebar && overlay) {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closeSidebar() {
    const sidebar = document.getElementById("sidebar-nav");
    const overlay = document.getElementById("sidebar-overlay");
    if (sidebar && overlay) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

/* Practical Lesson Plan Tab Switcher */
function switchPlanTab(tabId) {
    const tabBtns = document.querySelectorAll(".plan-tab-btn");
    const tabPanes = document.querySelectorAll(".plan-tab-pane");

    tabBtns.forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    tabPanes.forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });
}

/* Collapsible Block Toggle */
function toggleCollapsible(blockId) {
    const block = document.getElementById(blockId);
    if (!block) return;
    block.classList.toggle("open");
}

/* Custom Audio Player Logic */
function initCustomAudioPlayer() {
    const audio = document.getElementById("audio-media-element");
    const playBtn = document.getElementById("audio-play-toggle");
    const progressFill = document.getElementById("audio-progress-bar-fill");
    const currentTimeEl = document.getElementById("audio-current-time");
    const durationTimeEl = document.getElementById("audio-duration-time");
    const progressContainer = document.getElementById("audio-progress-bar-container");

    if (!audio) return;

    audio.addEventListener("loadedmetadata", () => {
        if (durationTimeEl) {
            durationTimeEl.innerText = formatTime(audio.duration);
        }
    });

    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            if (progressFill) progressFill.style.width = `${percent}%`;
            if (currentTimeEl) currentTimeEl.innerText = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener("ended", () => {
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        if (progressFill) progressFill.style.width = '0%';
    });

    if (progressContainer) {
        progressContainer.addEventListener("click", (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            if (audio.duration) {
                audio.currentTime = clickPos * audio.duration;
            }
        });
    }
}

function playPauseAudio() {
    const audio = document.getElementById("audio-media-element");
    const playBtn = document.getElementById("audio-play-toggle");
    if (!audio) return;

    if (audio.paused) {
        audio.play().then(() => {
            if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }).catch(err => {
            console.log("Audio playback notice: Audio file 'resources/00.mp3' will play when loaded.", err);
        });
    } else {
        audio.pause();
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function skipAudio(seconds) {
    const audio = document.getElementById("audio-media-element");
    if (audio) {
        audio.currentTime = Math.max(0, Math.min(audio.currentTime + seconds, audio.duration || 9999));
    }
}

function changeAudioSpeed(speed) {
    const audio = document.getElementById("audio-media-element");
    if (audio) {
        audio.playbackRate = parseFloat(speed);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/* ==========================================================
   FLOATING & CORNER TEXT-TO-SPEECH (TTS) TOOL
   ========================================================== */
let currentSelectedTTS = "";

function initTTSSelectionListener() {
    const ttsBtn = document.getElementById("tts-floating-btn");
    const cornerBtn = document.getElementById("tts-corner-btn");

    // Handle Selection on MouseUp
    document.addEventListener("mouseup", (e) => {
        if ((ttsBtn && ttsBtn.contains(e.target)) || (cornerBtn && cornerBtn.contains(e.target))) {
            return;
        }
        setTimeout(() => {
            handleTextSelection(ttsBtn, cornerBtn, e);
        }, 40);
    });

    // Handle Selection on TouchEnd (Mobile / Tablets)
    document.addEventListener("touchend", (e) => {
        if ((ttsBtn && ttsBtn.contains(e.target)) || (cornerBtn && cornerBtn.contains(e.target))) {
            return;
        }
        setTimeout(() => {
            handleTextSelection(ttsBtn, cornerBtn);
        }, 50);
    });

    // Handle Keyboard Selection (Shift + Arrows)
    document.addEventListener("keyup", (e) => {
        if (e.key === "Shift" || e.key.startsWith("Arrow")) {
            handleTextSelection(ttsBtn, cornerBtn);
        }
    });

    // Global Shortcut: Alt + P
    document.addEventListener("keydown", (e) => {
        if (e.altKey && (e.key === "p" || e.key === "P")) {
            e.preventDefault();
            speakCurrentOrSelectedText();
        }
    });
}

function handleTextSelection(ttsBtn, cornerBtn, mouseEvent) {
    const selection = window.getSelection();
    const text = selection ? selection.toString().trim() : "";

    if (text && text.length > 0 && text.length < 800) {
        currentSelectedTTS = text;

        // 1. Update corner button state
        if (cornerBtn) {
            cornerBtn.classList.add("has-selection");
            const cornerText = document.getElementById("tts-corner-text");
            if (cornerText) {
                cornerText.innerText = "TTS";
            }
        }

        // 2. Position dynamic floating pill at selection
        if (ttsBtn) {
            try {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                if (rect.width > 0 || rect.height > 0) {
                    // Position using viewport fixed coordinates
                    let top = rect.top - 46;
                    let left = rect.left + (rect.width / 2) - 40;

                    // Boundary checks
                    if (top < 10) {
                        top = rect.bottom + 10; // If near top of screen, place directly below
                    }
                    left = Math.max(12, Math.min(window.innerWidth - 100, left));

                    ttsBtn.style.top = `${top}px`;
                    ttsBtn.style.left = `${left}px`;
                    ttsBtn.classList.add("visible");
                }
            } catch (err) {
                if (mouseEvent) {
                    ttsBtn.style.top = `${mouseEvent.clientY - 46}px`;
                    ttsBtn.style.left = `${Math.max(12, mouseEvent.clientX - 40)}px`;
                    ttsBtn.classList.add("visible");
                }
            }
        }
    } else {
        currentSelectedTTS = "";
        if (ttsBtn && !ttsBtn.classList.contains("speaking")) {
            ttsBtn.classList.remove("visible");
        }
        if (cornerBtn && !cornerBtn.classList.contains("speaking")) {
            cornerBtn.classList.remove("has-selection");
            const cornerText = document.getElementById("tts-corner-text");
            if (cornerText) cornerText.innerText = "TTS";
        }
    }
}

function speakSelectedText(e) {
    speakCurrentOrSelectedText(e);
}

function speakCurrentOrSelectedText(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }

    const ttsBtn = document.getElementById("tts-floating-btn");
    const cornerBtn = document.getElementById("tts-corner-btn");
    const cornerText = document.getElementById("tts-corner-text");

    let textToSpeak = currentSelectedTTS;
    if (!textToSpeak) {
        const sel = window.getSelection();
        if (sel && sel.toString().trim()) {
            textToSpeak = sel.toString().trim();
        }
    }

    if (!('speechSynthesis' in window)) {
        alert("Text-to-Speech is not supported in this browser. Please use Chrome, Edge, or Firefox.");
        return;
    }

    // If nothing selected, guide the user with a speech demo
    if (!textToSpeak) {
        textToSpeak = "Text-to-Speech active. Please highlight any word or phrase on the page to hear its English pronunciation.";
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => (v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")) && !v.name.includes("Google"));
    if (englishVoice) {
        utterance.voice = englishVoice;
    }

    // Set UI speaking states
    if (ttsBtn) {
        ttsBtn.classList.add("speaking");
        ttsBtn.innerHTML = '<i class="fa-solid fa-volume-high fa-beat"></i> <span>TTS</span>';
    }
    if (cornerBtn) {
        cornerBtn.classList.add("speaking");
        if (cornerText) cornerText.innerText = "TTS";
    }

    utterance.onend = () => {
        resetTTSButtons(ttsBtn, cornerBtn, cornerText);
    };

    utterance.onerror = () => {
        resetTTSButtons(ttsBtn, cornerBtn, cornerText);
    };

    window.speechSynthesis.speak(utterance);
}

function resetTTSButtons(ttsBtn, cornerBtn, cornerText) {
    if (ttsBtn) {
        ttsBtn.classList.remove("speaking");
        ttsBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> <span>TTS</span>';
        setTimeout(() => {
            const sel = window.getSelection();
            if (!sel || !sel.toString().trim()) {
                ttsBtn.classList.remove("visible");
            }
        }, 1200);
    }
    if (cornerBtn) {
        cornerBtn.classList.remove("speaking");
        if (cornerText) {
            cornerText.innerText = "TTS";
        }
    }
}

/* ==========================================================
   IMAGE LIGHTBOX / MODAL POPUP & ZOOMING FUNCTIONS
   ========================================================== */
let modalImageZoom = 1.0;
let isFitWidth = false;

function openImageModal(imgSrc, caption) {
    const modal = document.getElementById("image-modal-lightbox");
    const imgEl = document.getElementById("image-modal-img");
    const captionEl = document.getElementById("image-modal-caption");

    if (!modal || !imgEl) return;

    imgEl.src = imgSrc;
    if (captionEl) {
        captionEl.innerHTML = `<span><i class="fa-solid fa-image"></i> ${caption || 'Textbook Page Clip'}</span><span class="text-sm text-muted">Click outside to close (Esc)</span>`;
    }

    // Reset zoom and fit-width state on every new open
    resetModalFitWidth();
    resetModalImageZoom();

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeImageModal() {
    const modal = document.getElementById("image-modal-lightbox");
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        resetModalFitWidth();
        resetModalImageZoom();
    }
}

function toggleModalFitWidth() {
    isFitWidth = !isFitWidth;
    const imgEl = document.getElementById("image-modal-img");
    const btn = document.getElementById("btn-fit-width");
    if (!imgEl) return;

    if (isFitWidth) {
        imgEl.classList.add("fit-width-mode");
        if (btn) btn.innerHTML = '<i class="fa-solid fa-arrows-up-down"></i> <span>Fit Screen</span>';
    } else {
        imgEl.classList.remove("fit-width-mode");
        if (btn) btn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i> <span>Fit Width</span>';
    }
}

function resetModalFitWidth() {
    isFitWidth = false;
    const imgEl = document.getElementById("image-modal-img");
    const btn = document.getElementById("btn-fit-width");
    if (imgEl) imgEl.classList.remove("fit-width-mode");
    if (btn) btn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i> <span>Fit Width</span>';
}

function zoomModalImage(delta) {
    const newZoom = parseFloat((modalImageZoom + delta).toFixed(2));
    if (newZoom >= 0.5 && newZoom <= 3.0) {
        modalImageZoom = newZoom;
        applyModalImageZoom();
    }
}

function resetModalImageZoom() {
    modalImageZoom = 1.0;
    applyModalImageZoom();
}

function applyModalImageZoom() {
    const imgEl = document.getElementById("image-modal-img");
    const displayEl = document.getElementById("modal-zoom-display");

    if (imgEl) {
        imgEl.style.transform = `scale(${modalImageZoom})`;
    }
    if (displayEl) {
        displayEl.innerText = `${Math.round(modalImageZoom * 100)}%`;
    }
}

// Global Escape & Keyboard Zoom Listeners for Image Modal & Sidebar
document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("image-modal-lightbox");
    const isModalOpen = modal && modal.classList.contains("active");

    if (e.key === "Escape") {
        closeImageModal();
        closeSidebar();
    } else if (isModalOpen && (e.key === "+" || e.key === "=")) {
        zoomModalImage(0.25);
    } else if (isModalOpen && (e.key === "-" || e.key === "_")) {
        zoomModalImage(-0.25);
    } else if (isModalOpen && (e.key === "0" || e.key === "r" || e.key === "R")) {
        resetModalImageZoom();
    }
});

// Mouse wheel zooming inside modal viewport
document.addEventListener("DOMContentLoaded", () => {
    const viewport = document.getElementById("image-modal-viewport");
    if (viewport) {
        viewport.addEventListener("wheel", (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                zoomModalImage(0.2);
            } else {
                zoomModalImage(-0.2);
            }
        }, { passive: false });
    }
});

/* 1. Scroll Progress Bar */
function initScrollProgress() {
    const progressBar = document.getElementById("scroll-progress-bar");
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) {
            progressBar.style.width = scrolled + "%";
        }
    });
}

/* 2. Zoom Controls */
function initZoomControls() {
    updateZoomDisplay();
}

function zoomIn() {
    if (currentZoom < 1.5) {
        currentZoom = parseFloat((currentZoom + 0.1).toFixed(1));
        applyZoom();
    }
}

function zoomOut() {
    if (currentZoom > 0.7) {
        currentZoom = parseFloat((currentZoom - 0.1).toFixed(1));
        applyZoom();
    }
}

function resetZoom() {
    currentZoom = 1.0;
    applyZoom();
}

function applyZoom() {
    document.documentElement.style.setProperty("--zoom-level", currentZoom);
    updateZoomDisplay();
}

function updateZoomDisplay() {
    const indicator = document.getElementById("zoom-level-display");
    if (indicator) {
        indicator.innerText = `${Math.round(currentZoom * 100)}%`;
    }
}

/* 3. Full Screen Toggle (F11) */
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error enabling fullscreen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeSidebar();
    } else if (e.key === "F11") {
        e.preventDefault();
        toggleFullScreen();
    } else if ((e.key === "m" || e.key === "M") && (e.ctrlKey === false && e.metaKey === false)) {
        if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "SELECT") {
            toggleSidebar();
        }
    } else if ((e.key === "b" || e.key === "B") && (e.ctrlKey === false && e.metaKey === false)) {
        if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "SELECT") {
            toggleFontWeight();
        }
    } else if (e.key === "ArrowRight") {
        if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            nextSlide();
        }
    } else if (e.key === "ArrowLeft") {
        if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            prevSlide();
        }
    }
});

/* 4. Slide Viewer Logic */
function initSlideViewer() {
    const jumpSelect = document.getElementById("slide-jump-select");
    if (jumpSelect) {
        jumpSelect.innerHTML = SLIDES_DATA.map((s, idx) => `
            <option value="${idx}">Slide ${s.id}: ${s.title.substring(0, 32)}...</option>
        `).join("");
    }
    renderCurrentSlide();
}

function renderCurrentSlide() {
    const slide = SLIDES_DATA[currentSlideIndex];
    if (!slide) return;

    document.getElementById("slide-counter").innerText = `Slide ${slide.id} / ${SLIDES_DATA.length}`;
    document.getElementById("slide-watermark").innerText = `#${slide.id}`;
    document.getElementById("slide-category").innerHTML = `<i class="fa-solid fa-tag"></i> ${slide.category}`;
    document.getElementById("slide-title").innerText = slide.title;
    document.getElementById("slide-subtitle").innerText = slide.subtitle || "";
    document.getElementById("slide-text").innerText = slide.text || "";

    const bulletsList = document.getElementById("slide-bullets");
    if (bulletsList) {
        if (slide.bullets && slide.bullets.length > 0) {
            bulletsList.innerHTML = slide.bullets.map(b => `<li>${b}</li>`).join("");
            bulletsList.style.display = "block";
        } else {
            bulletsList.style.display = "none";
        }
    }

    const jumpSelect = document.getElementById("slide-jump-select");
    if (jumpSelect) {
        jumpSelect.value = currentSlideIndex;
    }
}

function nextSlide() {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
        currentSlideIndex++;
        renderCurrentSlide();
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderCurrentSlide();
    }
}

function jumpToSlide(idx) {
    currentSlideIndex = parseInt(idx);
    renderCurrentSlide();
}

/* 5. Theme Toggle */
function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            let newTheme = theme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
    toggleBtn.innerHTML = theme === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

/* 6. Accordions */
function initAccordions() {
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach(header => {
        header.addEventListener("click", () => {
            header.parentElement.classList.toggle("active");
        });
    });
}

/* 7. Tab Switching */
function switchUnitTab(event, tabId) {
    const tabButtons = document.querySelectorAll(".tabs-nav .tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabPanes.forEach(pane => pane.classList.remove("active"));

    event.currentTarget.classList.add("active");
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add("active");
    }
}

/* 8. Nav Link Highlight on Scroll */
function initNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

/* 9. JRE Argument Builder Data & Engine */
const JRE_DATA = {
    social_media: {
        claims: [
            "Excessive social media consumption significantly harms adolescent well-being.",
            "Social media platforms act as supportive spaces for teenage creative expression.",
            "Personal responsibility alone cannot neutralize the psychological impact of algorithm-driven feeds."
        ],
        reasons: [
            "This is because continuous exposure to curated content triggers upward social comparison and feelings of inadequacy.",
            "This is because interactive digital platforms allow isolated youth to find peer support and shared interests.",
            "This is because structural features like infinite scroll and notifications are engineered to override self-regulation."
        ],
        evidence: [
            "According to the WHO-led research cited in Unit 1, teens spending over 3 hours daily on image-based apps are twice as likely to report low self-esteem.",
            "Studies in cyberpsychology indicate that creative engagement in digital art communities measurably reduces cortisol levels by 20%.",
            "Research in behavioral economics demonstrates that notification alerts cause cognitive disruption even when the phone is not opened."
        ]
    },
    lost_world_courage: {
        claims: [
            "Malone's transformation in The Lost World illustrates that true courage is relational rather than performative.",
            "Professor Summerlee's scientific skepticism was just as crucial to the expedition's success as Challenger's conviction.",
            "Zambo represents the moral anchor of loyalty without whom the scientific party would have perished."
        ],
        reasons: [
            "This is because he moved from seeking danger to win Gladys's superficial approval to risking his life to rescue his endangered companions.",
            "This is because questioning extraordinary claims forced Challenger to provide empirical, incontrovertible evidence rather than dogma.",
            "This is because his constant presence beneath the severed cliff ensured the explorers maintained a lifeline for food and ammunition."
        ],
        evidence: [
            "In Chapter 6, Malone recognized that his solo night trek was childish pride, whereas joining Roxton to face the ape-men in Chapter 7 constituted genuine bravery.",
            "In Chapter 10, Summerlee's transition from fierce skeptic to principal witness at the Zoological Institute validated the discovery before the world.",
            "In Chapter 4, following Gomez's destruction of the tree bridge, Zambo immediately established communication and stayed faithful until rescue arrived."
        ]
    },
    food_waste: {
        claims: [
            "Combating food waste in Egyptian households requires structural nudges alongside cultural awareness.",
            "Sale events like Black Friday exploit consumer psychology to encourage overconsumption rather than true savings.",
            "Clearer distinction between 'Best Before' and 'Use By' dates is the most immediate solution to supermarket waste."
        ],
        reasons: [
            "This is because traditional norms of extreme generosity during gatherings often clash with poor storage capacity and overbuying.",
            "This is because cognitive loss aversion tricks consumers into believing that passing on a discount is an active financial loss.",
            "This is because consumers routinely discard safe, edible food due to confusing expiration terminology."
        ],
        evidence: [
            "Consumer surveys in Unit 4 show that bread and fresh produce waste constitutes a major loss in urban Egyptian homes due to improper storage.",
            "Behavioral research shows that sale shoppers spend significantly more overall than regular shoppers due to countdown timers and scarcity cues.",
            "The formal report in Unit 4 highlights that 'Best Before' indicates peak quality, whereas only 'Use By' marks safety boundaries."
        ]
    }
};

function initJREBuilder() {
    updateJREOptions();
}

function updateJREOptions() {
    const topicSelect = document.getElementById("jre-topic-select");
    if (!topicSelect) return;
    const topic = topicSelect.value;
    const claimSelect = document.getElementById("jre-claim");
    const reasonSelect = document.getElementById("jre-reason");
    const evidenceSelect = document.getElementById("jre-evidence");
    const resultBox = document.getElementById("jre-result");

    if (resultBox) resultBox.style.display = "none";

    const data = JRE_DATA[topic];
    if (!data) return;

    claimSelect.innerHTML = data.claims.map((c, i) => `<option value="${i}">${c}</option>`).join("");
    reasonSelect.innerHTML = data.reasons.map((r, i) => `<option value="${i}">${r}</option>`).join("");
    evidenceSelect.innerHTML = data.evidence.map((e, i) => `<option value="${e}">${e}</option>`).join("");
}

function generateJREOutput() {
    const topic = document.getElementById("jre-topic-select").value;
    const data = JRE_DATA[topic];
    const claimIdx = document.getElementById("jre-claim").value;
    const reasonIdx = document.getElementById("jre-reason").value;
    const evidenceText = document.getElementById("jre-evidence").value;

    const claim = data.claims[claimIdx];
    const reason = data.reasons[reasonIdx];
    const evidence = evidenceText;

    const paragraphText = `<strong>(Justify/Claim):</strong> ${claim} <br><br><strong>(Reasoning):</strong> ${reason} <br><br><strong>(Evidence):</strong> ${evidence} <br><br><strong>(Concluding Synthesis):</strong> Therefore, effective argumentation in academic English mandates grounding personal judgment in verifiable evidence and logical cause-and-effect reasoning.`;

    document.getElementById("jre-paragraph-text").innerHTML = paragraphText;
    document.getElementById("jre-feedback-badge").innerHTML = `<i class="fa-solid fa-certificate"></i> Complete Academic Argument Formed (JRE Cohesion Score: 100% - Met Standard)`;
    document.getElementById("jre-result").style.display = "block";
}

/* 10. Bias Detective Tool */
function transformToNeutral() {
    const resBox = document.getElementById("neutral-result");
    if (resBox) {
        resBox.style.display = "block";
        resBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

/* ==========================================================
   11. INSTANT GREEN/RED FEEDBACK SECTION QUIZ ENGINE
   ========================================================== */
const quizScores = {};

function renderAllSectionQuizzes() {
    const quizBlocks = document.querySelectorAll(".section-quiz-block[data-quiz-id]");
    quizBlocks.forEach(block => {
        const quizId = block.getAttribute("data-quiz-id");
        const quizData = SECTION_QUIZZES[quizId];
        if (!quizData) return;

        quizScores[quizId] = { correctCount: 0, answered: 0, total: quizData.questions.length };

        let html = `
            <div class="section-quiz-header">
                <h3><i class="fa-solid fa-circle-question"></i> ${quizData.title}</h3>
                <span class="section-quiz-badge" id="badge-${quizId}">Score: 0 / ${quizData.questions.length}</span>
            </div>
            <div class="instant-questions-container">
        `;

        quizData.questions.forEach((q, qIdx) => {
            html += `
                <div class="instant-q-card" id="qcard-${q.id}">
                    <div class="instant-q-title">
                        <span><strong>Q${qIdx + 1}.</strong> ${q.question}</span>
                    </div>
                    <div class="instant-options-grid">
                        ${q.options.map((opt, optIdx) => `
                            <button class="instant-opt-btn" onclick="handleInstantAnswer('${quizId}', '${q.id}', ${optIdx}, ${q.correct})">
                                <span>${String.fromCharCode(65 + optIdx)}. ${opt}</span>
                                <span class="opt-status-icon"></span>
                            </button>
                        `).join("")}
                    </div>
                    <div class="instant-feedback-box" id="fb-${q.id}"></div>
                </div>
            `;
        });

        html += `
            </div>
            <div class="section-quiz-footer">
                <span class="text-sm text-muted"><i class="fa-solid fa-bolt"></i> Immediate Feedback Enabled: Click an option to see instant verification.</span>
                <button class="btn-secondary text-sm" onclick="resetSectionQuiz('${quizId}')"><i class="fa-solid fa-rotate-right"></i> Reset Section Quiz</button>
            </div>
        `;

        block.innerHTML = html;
    });
}

function handleInstantAnswer(quizId, questionId, selectedIdx, correctIdx) {
    const qCard = document.getElementById(`qcard-${questionId}`);
    if (!qCard) return;

    const buttons = qCard.querySelectorAll(".instant-opt-btn");
    const fbBox = document.getElementById(`fb-${questionId}`);
    const quizData = SECTION_QUIZZES[quizId];
    const qObj = quizData.questions.find(item => item.id === questionId);

    // If already answered, do not re-score
    if (qCard.getAttribute("data-answered") === "true") return;
    qCard.setAttribute("data-answered", "true");

    quizScores[quizId].answered++;

    const isCorrect = selectedIdx === correctIdx;
    if (isCorrect) {
        quizScores[quizId].correctCount++;
    }

    // Update buttons styling (Green if correct, Red if wrong)
    buttons.forEach((btn, idx) => {
        btn.setAttribute("disabled", "true");
        if (idx === correctIdx) {
            btn.classList.add("opt-correct");
            btn.querySelector(".opt-status-icon").innerHTML = '<i class="fa-solid fa-circle-check"></i> Correct';
        } else if (idx === selectedIdx && !isCorrect) {
            btn.classList.add("opt-wrong");
            btn.querySelector(".opt-status-icon").innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Incorrect';
        }
    });

    // Display instant feedback box
    if (fbBox) {
        if (isCorrect) {
            fbBox.className = "instant-feedback-box show-correct";
            fbBox.innerHTML = `
                <div class="fb-status"><i class="fa-solid fa-circle-check"></i> Excellent! That is correct.</div>
                <div>${qObj ? qObj.explanation : "Correct answer selected."}</div>
            `;
        } else {
            fbBox.className = "instant-feedback-box show-wrong";
            fbBox.innerHTML = `
                <div class="fb-status"><i class="fa-solid fa-circle-xmark"></i> Incorrect selection. Correct answer is (${String.fromCharCode(65 + correctIdx)}).</div>
                <div>${qObj ? qObj.explanation : ""}</div>
            `;
        }
    }

    // Update section score badge
    const badge = document.getElementById(`badge-${quizId}`);
    if (badge) {
        badge.innerText = `Score: ${quizScores[quizId].correctCount} / ${quizScores[quizId].total}`;
        if (quizScores[quizId].correctCount === quizScores[quizId].total) {
            badge.style.background = "linear-gradient(135deg, #059669, #10b981)";
        }
    }
}

function resetSectionQuiz(quizId) {
    const quizData = SECTION_QUIZZES[quizId];
    if (!quizData) return;

    quizScores[quizId] = { correctCount: 0, answered: 0, total: quizData.questions.length };
    const badge = document.getElementById(`badge-${quizId}`);
    if (badge) {
        badge.innerText = `Score: 0 / ${quizData.questions.length}`;
        badge.style.background = "linear-gradient(135deg, var(--primary), var(--primary-dark))";
    }

    quizData.questions.forEach(q => {
        const qCard = document.getElementById(`qcard-${q.id}`);
        const fbBox = document.getElementById(`fb-${q.id}`);
        if (qCard) {
            qCard.removeAttribute("data-answered");
            const buttons = qCard.querySelectorAll(".instant-opt-btn");
            buttons.forEach(btn => {
                btn.removeAttribute("disabled");
                btn.classList.remove("opt-correct", "opt-wrong");
                btn.querySelector(".opt-status-icon").innerHTML = "";
            });
        }
        if (fbBox) {
            fbBox.className = "instant-feedback-box";
            fbBox.innerHTML = "";
            fbBox.style.display = "none";
        }
    });
}
