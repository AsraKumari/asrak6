// src/app/page.tsx
// This directive is CRUCIAL for client-side functionality in App Router
"use client";

import Projects from '@/pages/Projects'; // Adjust path if your Projects.jsx is not directly in src/pages

export default function Home() {
  return (
    <main>
      {/* Render your Projects component here */}
      <Projects />
    </main>
  );
}
