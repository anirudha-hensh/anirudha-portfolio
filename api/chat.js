import OpenAI from "openai";

const PROFILE = {
  name: "Anirudha Hensh",
  degree: "B.Tech Computer Science & Engineering",
  graduation: "2026",
  university: "University of Engineering & Management, Kolkata",
  cgpa: "7.85",
  location: "West Bengal, India",
  skills: [
    "Core Java", "OOP", "JDBC", "MySQL/SQL",
    "HTML", "CSS", "JavaScript", "Python", "NLP",
    "AI/ML fundamentals", "Git/GitHub", "DSA fundamentals"
  ],
  projects: [
    {
      name: "AI-Based ATS Resume Analysis System",
      stack: "Python, NLP, Gemini API",
      summary: "Academic group project using NLP and AI-assisted analysis to extract relevant resume skills and compare them with job descriptions."
    },
    {
      name: "Student Management System",
      stack: "Core Java, MySQL, JDBC",
      summary: "Database-driven application for managing student records with CRUD operations."
    },
    {
      name: "Attendance Management System",
      stack: "Java Swing, JDBC, MySQL",
      summary: "Desktop application for maintaining attendance records through a Java Swing UI and MySQL database."
    },
    {
      name: "Tic-Tac-Toe",
      stack: "HTML, CSS, JavaScript",
      summary: "Interactive browser game with client-side game logic."
    },
    {
      name: "Blog Website",
      stack: "HTML, CSS, JavaScript",
      summary: "Blog-style web project focused on presentation, navigation and JavaScript interactions."
    },
    {
      name: "Brain Tumor Detection",
      stack: "Python, OpenCV, Computer Vision",
      summary: "Academic project exploring MRI image processing and tumor detection."
    }
  ]
};

function localFallback(message) {
  const s = String(message).toLowerCase();
  if (s.includes("skill") || s.includes("technology") || s.includes("stack")) {
    return `Anirudha's main technical areas are Java, MySQL/JDBC, HTML/CSS/JavaScript, Python/NLP, Git/GitHub and DSA fundamentals.`;
  }
  if (s.includes("ats") || s.includes("resume")) {
    return `The AI-Based ATS Resume Analysis System is an academic group project using Python, NLP and the Gemini API to extract relevant resume skills and compare them with job descriptions.`;
  }
  if (s.includes("education") || s.includes("degree") || s.includes("college")) {
    return `Anirudha completed a B.Tech in Computer Science & Engineering at the University of Engineering & Management, Kolkata, graduating in 2026 with a reported CGPA of 7.85.`;
  }
  if (s.includes("role") || s.includes("job") || s.includes("position")) {
    return `He is targeting entry-level software development and system engineering opportunities, especially roles where Java, databases, problem solving and practical project work are relevant.`;
  }
  return `I can answer questions about Anirudha's skills, education, projects and target entry-level software roles.`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({error: "Method not allowed"});
  const message = req.body?.message;
  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({error: "Message is required"});
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({reply: localFallback(message), mode: "demo"});
  }

  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const system = `You are Anirudha Hensh's portfolio assistant. Answer only from the verified profile below. Never invent employment, internships, certifications, metrics, achievements or technologies. Keep answers concise and recruiter-friendly. If the question asks for something not in the profile, say it is not provided.

VERIFIED PROFILE:
${JSON.stringify(PROFILE, null, 2)}`;

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-6-luna",
      instructions: system,
      input: message.trim()
    });

    return res.status(200).json({reply: response.output_text || localFallback(message), mode: "live"});
  } catch (error) {
    return res.status(200).json({reply: localFallback(message), mode: "demo"});
  }
}
