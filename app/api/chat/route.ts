import { groq } from "@ai-sdk/groq"
import { generateText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    const systemPrompt = `You are CampusHelper AI, a friendly and knowledgeable campus assistant for students. You help with:

- Class schedules and academic information
- Campus events and activities  
- Faculty and staff contacts
- Library services and book availability
- Cafeteria menus and dining options
- Campus directions and locations
- Student services and resources
- Campus policies and procedures

DEMO CONTEXT: For demonstration purposes, you can provide realistic example responses about:
- Sample class schedules (e.g., "Your Biology 101 class is at 10:00 AM in Science Building Room 204")
- Fictional campus events (e.g., "There's a Career Fair this Thursday from 2-5 PM in the Student Union")
- Example faculty contacts (e.g., "Professor Smith's office hours are Tuesdays 2-4 PM in Academic Hall 305")
- Library information (e.g., "The library is open until 11 PM tonight, and you can check book availability through the online catalog")
- Dining options (e.g., "Today's lunch special is grilled chicken with rice and vegetables, served 11:30 AM - 2 PM")

Always be helpful, concise, and student-focused. Keep responses conversational and friendly, but professional. Use clear, easy-to-understand language. If asked about specific real campus information you don't have, suggest where students might find accurate details.`

    // Convert chat history to the format expected by the AI SDK
    const messages = [
      { role: "system" as const, content: systemPrompt },
      ...history.slice(-10).map((msg: any) => ({
        role: msg.role === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.content,
      })),
      { role: "user" as const, content: message },
    ]

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant", {
        apiKey: process.env.GROQ_API_KEY,
      }),
      messages,
      maxTokens: 1000,
      temperature: 0.7,
    })

    return Response.json({ message: text })
  } catch (error) {
    console.error("Error in chat API:", error)
    return Response.json({ error: "Failed to process your request. Please try again." }, { status: 500 })
  }
}
