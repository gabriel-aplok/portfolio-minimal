## Portfolio Website

A personal portfolio website showcasing my skills, projects, and contact information. This portfolio dynamically fetches data from my GitHub profile using the GitHub API and features an animated starfield background to add some cool visual effects.

### Live Demo
[Check out the live demo](https://gabriel-aplok.com/portfolio-minimal) (Replace this with the actual URL once deployed)

---

## Features

- Dynamic GitHub Profile Fetching: Displays up-to-date information from the GitHub API.
- Starfield Background Animation: Adds an interactive, visually engaging background to the website.
- Responsive Design: Fully responsive design, looks great on desktop and mobile.
- Error Handling: Handles errors gracefully with retry functionality.

---

## Screenshots

...

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Image Handling**: [Next/Image](https://nextjs.org/docs/api-reference/next/image)
- **GitHub API**: Fetching user data dynamically
- **Custom Starfield**: A custom starfield component for animated background effects

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/gabriel-aplok/portfolio-minimal.git
```

2. Navigate to the project directory

```bash
cd portfolio-minimal
```

3. Install the dependencies

```bash
npm install
# or
yarn install
```

### Running the App

1. Start the development server

```bash
npm run dev
# or
yarn dev
```

2. Open your browser at [http://localhost:3000](http://localhost:3000) to see the project.

---

## Folder Structure

```plaintext
├── src
│   ├── app
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── custom
│   │   │   └── starfield.tsx     # Custom Starfield background component
│   │   └── ui
│   │       └── button.tsx        # Reusable button component
│   ├── lib
│   │   └── utils.ts              # Utility functions
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Ignored files for Git
├── next.config.js                # Next.js configuration
├── package-lock.json             # NPM lockfile
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation (this file)
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
```

---

## How It Works

### Dynamic GitHub Profile Fetching

This project uses the `useEffect` hook in React to make an API call to GitHub using Axios. It retrieves your GitHub profile data and displays your avatar, name, bio, and a custom code snippet that showcases your programming skills.

### Starfield Animation

The starfield background is a custom component that uses the `canvas` API to create a cool starry sky animation.

---

## Deployment

You can easily deploy this portfolio using platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

### Deploying to Vercel

1. Install the Vercel CLI

```bash
npm install -g vercel
```

2. Run the deployment command:

```bash
vercel
```

3. Follow the steps provided by Vercel to link your GitHub repository and deploy the app.

---

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- **GitHub**: [@gabriel-aplok](https://github.com/gabriel-aplok)
- **LinkedIn**: [Gabriel Lima](https://linkedin.com/in/gabrielaplok)
- **Instagram**: [@gabriel__yeah](https://instagram.com/gabriel__yeah)
