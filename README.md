# 🎓 Campus Helper Chatbot

A modern, AI-powered campus assistant built with Next.js and Groq API. This intelligent chatbot helps students with class schedules, campus events, faculty contacts, library services, dining options, and much more!

## ✨ Features

- 🤖 **AI-Powered Assistance**: Uses Groq's fast LLM models for intelligent responses
- 💬 **Interactive Chat Interface**: Modern, responsive UI with real-time messaging
- 📚 **Campus Information**: Helps with schedules, events, facilities, and resources
- 🌙 **Dark Mode Support**: Automatic theme switching for better user experience
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🚀 **Fast Performance**: Built with Next.js for optimal speed and SEO

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your system
- A Groq API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/campus-helper-chatbot.git
   cd campus-helper-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   *Note: We use `--legacy-peer-deps` to resolve some dependency conflicts.*

3. **Get your Groq API Key**
   - Visit [https://console.groq.com/keys](https://console.groq.com/keys)
   - Sign up for a free account
   - Create a new API key
   - Copy the API key (starts with `gsk_`)

4. **Setup Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit the .env file and add your actual API key
   # GROQ_API_KEY=gsk_your_actual_groq_api_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key for accessing LLM models | ✅ Yes |
| `NEXT_PUBLIC_APP_URL` | Your app's URL (for production) | ❌ No |

### Model Configuration

The chatbot currently uses the `llama-3.1-8b-instant` model for fast responses. You can modify this in `/app/api/chat/route.ts` if needed:

```typescript
model: groq("llama-3.1-8b-instant", {
  apiKey: process.env.GROQ_API_KEY,
}),
```

Available models:
- `llama-3.1-8b-instant` (Fast, recommended)
- `llama-3.1-70b-versatile` (More capable, slower)
- `mixtral-8x7b-32768` (Good balance)

## 🎯 Usage

### Chat Interface
- Type your questions in the chat input
- Press Enter to send, Shift+Enter for new line
- Use the "Reset Chat" button to start a new conversation
- Click on quick suggestions for common queries

### Example Queries
- "What time does the library close today?"
- "When is the next career fair?"
- "How do I contact Professor Smith?"
- "What's for lunch at the cafeteria?"
- "Where is the computer science building?"

## 🏗️ Project Structure

```
campus-helper-chatbot/
├── app/
│   ├── api/chat/          # API route for chat functionality
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── chat-interface.tsx # Main chat component
│   ├── header.tsx        # Header component
│   └── footer.tsx        # Footer component
├── lib/
│   └── utils.ts          # Utility functions
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. **Custom System Prompt**: Edit the system prompt in `/app/api/chat/route.ts` to customize the AI's behavior
2. **UI Customization**: Modify components in `/components/` folder
3. **New API Routes**: Add new routes in `/app/api/` folder

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your `GROQ_API_KEY` to the environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**"API key not found" error:**
- Make sure your `.env` file exists and contains `GROQ_API_KEY=your_key`
- Restart the development server after adding the environment variable

**"Model decommissioned" error:**
- Update the model name in `/app/api/chat/route.ts` to a supported model
- Check [Groq's documentation](https://console.groq.com/docs/models) for available models

**Dependencies conflict:**
- Use `npm install --legacy-peer-deps` instead of `npm install`

**Port already in use:**
- The app will automatically try the next available port (3001, 3002, etc.)
- Or stop other services using port 3000

## 💡 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Groq API Documentation](https://console.groq.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://radix-ui.com/)

---

**Built with ❤️ for students and campus communities**
