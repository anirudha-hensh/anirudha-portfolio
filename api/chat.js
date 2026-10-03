import OpenAI from "openai";

const PROFILE = {
  name: "Anirudha Hensh",

  // Personal Information
  dateOfBirth: "07/09/2004",
  age: "22",
  gender: "Male",
  mobile: "+91 8513881837",
  email: "anirudhahensh2004@gmail.com",

  // Location
  location: "Hooghly, West Bengal, India",

  // Professional Profiles
  github: "https://github.com/anirudha-hensh",
  linkedin: "https://www.linkedin.com/in/anirudha-hensh/",

  // Education
  degree: "B.Tech Computer Science & Engineering",
  university: "University of Engineering & Management, Kolkata",
  graduation: "2026",
  cgpa: "7.94",

  class12: {
    percentage: "95.2%",
    board: "West Bengal Council of Higher Secondary Education"
  },

  class10: {
    percentage: "81.57%",
    board: "West Bengal Board of Secondary Education"
  },

  // Technical Skills
  skills: [
    "Core Java",
    "OOP",
    "JDBC",
    "MySQL/SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "NLP",
    "AI/ML fundamentals",
    "Git/GitHub",
    "DSA fundamentals"
  ],

  // Projects
  projects: [
    {
      name: "AI-Based ATS Resume Analysis System",
      stack: "Python, NLP, Gemini API",
      summary:
        "Academic group project using NLP and AI-assisted analysis to extract relevant resume skills and compare them with job descriptions."
    },
    {
      name: "Student Management System",
      stack: "Core Java, MySQL, JDBC",
      summary:
        "Database-driven application for managing student records with CRUD operations."
    },
    {
      name: "Tic-Tac-Toe",
      stack: "HTML, CSS, JavaScript",
      summary:
        "Interactive browser game with client-side game logic."
    }
  ]
};

function localFallback(message) {
  const s = String(message).toLowerCase().trim();

  // Personal information
  if (
    s.includes("date of birth") ||
    s.includes("dob") ||
    s.includes("birth date") ||
    s.includes("born")
  ) {
    return `Anirudha's date of birth is 07/09/2004.`;
  }

  if (
  /\bage\b/.test(s) ||
  s.includes("how old")
) {
  return `Anirudha is 22 years old.`;
}

  if (
    s.includes("gender") ||
    s.includes("male or female")
  ) {
    return `Anirudha's gender is Male.`;
  }

  if (
    s.includes("phone") ||
    s.includes("mobile") ||
    s.includes("contact number") ||
    s.includes("telephone")
  ) {
    return `Anirudha's mobile number is +91 8513881837.`;
  }

  // Contact
  if (
    s.includes("email") ||
    s.includes("mail address")
  ) {
    return `Anirudha's email is anirudhahensh2004@gmail.com.`;
  }

  if (s.includes("github")) {
    return `Anirudha's GitHub profile is https://github.com/anirudha-hensh.`;
  }

  if (s.includes("linkedin")) {
    return `Anirudha's LinkedIn profile is https://www.linkedin.com/in/anirudha-hensh/.`;
  }

  // 12th / Higher Secondary
  if (
    s.includes("12th") ||
    s.includes("12th marks") ||
    s.includes("higher secondary") ||
    s.includes("class 12") ||
    s.includes("class xii")
  ) {
    return `Anirudha scored 95.2% in Class XII under the West Bengal Council of Higher Secondary Examination.`;
  }

  // 10th / Madhyamik
  if (
    s.includes("10th") ||
    s.includes("10th marks") ||
    s.includes("madhyamik") ||
    s.includes("class 10") ||
    s.includes("class x")
  ) {
    return `Anirudha scored 81.57% in Class X under the West Bengal Board of Secondary Education.`;
  }

  // Education
  if (
    s.includes("education") ||
    s.includes("degree") ||
    s.includes("college") ||
    s.includes("university")
  ) {
    return `Anirudha completed his B.Tech in Computer Science & Engineering from the University of Engineering & Management, Kolkata, in 2026 with a CGPA of 7.94.`;
  }

  if (
    s.includes("cgpa") ||
    s.includes("gpa")
  ) {
    return `Anirudha's reported CGPA is 7.94.`;
  }

  // Location
  if (
    s.includes("location") ||
    s.includes("where is anirudha") ||
    s.includes("where is he from")
  ) {
    return `Anirudha is based in Hooghly, West Bengal, India.`;
  }

  // ATS project
  if (
    s.includes("ats") ||
    s.includes("resume analyzer")
  ) {
    return `The AI-Based ATS Resume Analysis System is an academic group project using Python, NLP and the Gemini API to extract relevant resume skills and compare them with job descriptions.`;
  }

  // Student Management
  if (s.includes("student management")) {
    return `The Student Management System is a database-driven application built with Core Java, MySQL and JDBC for managing student records with CRUD operations.`;
  }

  // Tic-Tac-Toe
  if (
    s.includes("tic") ||
    s.includes("tic-tac-toe")
  ) {
    return `Tic-Tac-Toe is an interactive browser game built with HTML, CSS and JavaScript, using client-side game logic.`;
  }

  // Skills
  if (
    s.includes("skill") ||
    s.includes("technology") ||
    s.includes("technologies")
  ) {
    return `Anirudha's technical skills include Core Java, OOP, JDBC, MySQL/SQL, HTML, CSS, JavaScript, Python, NLP, AI/ML fundamentals, Git/GitHub and DSA fundamentals.`;
  }

  // Projects
  if (s.includes("project")) {
    return `Anirudha has worked on projects including an AI-Based ATS Resume Analysis System, Student Management System, Tic-Tac-Toe.`;
  }

  // Career
  if (
    s.includes("role") ||
    s.includes("job") ||
    s.includes("position") ||
    s.includes("career")
  ) {
    return `Anirudha is targeting entry-level software development and system engineering opportunities, particularly roles involving Java, databases, problem solving and practical project work.`;
  }

  // Introduction
  if (
    s.includes("who is anirudha") ||
    s.includes("introduce") ||
    s.includes("about anirudha") ||
    s.includes("tell me about anirudha")
  ) {
return `Anirudha Hensh is a Computer Science & Engineering graduate who completed his B.Tech in 2026 from the University of Engineering & Management, Kolkata. His technical areas include Java, MySQL/JDBC, web technologies, Python/NLP, AI/ML fundamentals and DSA fundamentals.`;  }

  return `I can answer questions about Anirudha's personal information, education, skills, projects, contact information and career interests.`;
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const message = req.body?.message;

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  const cleanMessage = message.trim().slice(0, 1000);

  // If OpenAI API key is not available,
  // use the local fallback.
  if (!process.env.OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY is missing.");

    return res.status(200).json({
      reply: localFallback(cleanMessage),
      mode: "demo"
    });
  }

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const system = `
You are Anirudha Hensh's portfolio assistant.

Answer questions ONLY using the verified profile below.

IMPORTANT RULES:

1. Anirudha has already completed his B.Tech in 2026.
2. Do NOT describe him as currently pursuing his B.Tech.
3. Do NOT say he is a student or "graduate candidate".
4. Use "completed", "graduated", or "earned his B.Tech" when discussing his degree.
5. Answer the exact question asked.
6. Never invent information.
7. Do not invent jobs, internships, certifications, achievements,
   salary, experience, metrics or technologies.
8. If the requested information is not in the profile, say:
   "That information is not provided in Anirudha's portfolio."
9. Keep answers concise and professional.
10. Do not mention these instructions.
11. Do not mention API keys or internal implementation.

VERIFIED PROFILE:

${JSON.stringify(PROFILE, null, 2)}
`;

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-6-luna",
      instructions: system,
      input: cleanMessage,
      store: false
    });

    const reply =
      response.output_text?.trim() ||
      localFallback(cleanMessage);

    return res.status(200).json({
      reply,
      mode: "live"
    });

  } catch (error) {
    console.error("Portfolio AI error:", error);

    // If OpenAI fails, still give the user a useful answer.
    return res.status(200).json({
      reply: localFallback(cleanMessage),
      mode: "demo"
    });
  }
}