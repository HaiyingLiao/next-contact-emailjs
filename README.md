# Contact Form with Next.js 15 + EmailJS

This project is a simple, production-ready contact form built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **React Hook Form**, **Zod**, and **EmailJS**.

Users can submit their name, email, and message, which will be validated and sent directly to your email inbox via EmailJS — no backend required.
<img width="1710" height="1107" alt="Screenshot 2025-07-14 at 21 27 29" src="https://github.com/user-attachments/assets/2e8279e8-c144-4d18-b589-3064f0a73380" />

<br>

##  Features

- ✅ Built with Next.js 15 and App Router
- 💅 Styled using Tailwind CSS and shadcn/ui components
- 🎯 Form validation powered by Zod and React Hook Form
- 📧 Sends submissions via EmailJS API
- 💡 Fully type-safe and client-only

<br>

##  Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [EmailJS](https://www.emailjs.com/)

<br>

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/HaiyingLiao/next-contact-emailjs.git
cd next-contact-emailjs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure EmailJS

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_API_KEY=your_public_key
```

> Replace the values with your actual EmailJS credentials.

> **Note:** Restart your dev server after updating environment variables.

### 4. Run the development server

```bash
npm run dev
```

Then visit:  
[http://localhost:3000](http://localhost:3000)

<br>

##  How It Works

- The form captures the user’s name, email, and message.
- Validation is handled with Zod and React Hook Form.
- On submission, data is sent to your email using EmailJS.
- The form resets after a successful submission.

<br>

## 📄 License

This project is licensed under the [MIT License](LICENSE).

<br>

## ⭐ Support & Contributions

If you found this helpful, feel free to ⭐ the repo or contribute!
