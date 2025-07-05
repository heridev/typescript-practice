import React, { useState, useEffect } from "react";

const PassiveCardRotator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Simple array of tech concepts
  const concepts = [
    "TanStack Query manages server state with caching, refetching, and background sync. Use optimistic updates to improve perceived speed for mutations.",
    "tRPC enables full-stack type safety via TypeScript without a REST layer. Use it with Next.js or React for seamless integration.",
    "Prisma ORM provides typed database queries and schema migrations. Integrates well with PostgreSQL, MySQL, SQLite, and more.",
    "Next.js App Router uses React Server Components by default. Pages are server-rendered unless marked 'use client'.",
    "Tailwind CSS uses utility-first classes for rapid UI development. Configure custom design tokens in tailwind.config.js.",
    "Zustand provides minimal state management with less boilerplate than Redux. Use immer middleware for complex state updates.",
    "React Server Components render on the server and stream to the client. They can directly access databases and APIs.",
    "TypeScript strict mode catches more errors at compile time. Enable noImplicitAny, strictNullChecks, and noImplicitReturns.",
    "Vite offers faster development builds than webpack through native ES modules. Use vite.config.ts for custom plugins.",
    "GraphQL enables clients to request exactly the data they need. Use Apollo Client or Relay for caching and state management.",
    "Docker containerizes applications for consistent deployment across environments. Use multi-stage builds to optimize image size.",
    "Redis provides in-memory data structure store for caching and session management. Use it for real-time applications.",
    "JWT tokens contain encoded user information for stateless authentication. Store them securely and implement proper expiration.",
    "Webpack bundles JavaScript modules for production. Use code splitting and tree shaking to optimize bundle size.",
    "MongoDB stores data in flexible, JSON-like documents. Use aggregation pipelines for complex data transformations.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 2 >= concepts.length ? 0 : prevIndex + 2
        );
        setIsVisible(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [concepts.length]);

  const getCurrentConcepts = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % concepts.length;
      items.push(concepts[index]);
    }
    return items;
  };

  const currentConcepts = getCurrentConcepts();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div
        className={`w-full max-w-full transition-opacity duration-200 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="space-y-8">
          {currentConcepts.map((concept, index) => (
            <div
              key={currentIndex + index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <p className="text-white text-xl leading-relaxed font-medium text-center">
                {concept}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassiveCardRotator;
