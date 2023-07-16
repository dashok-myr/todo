import "./globals.css";
import type { Metadata } from "next";
import { TodosProvider } from "@/app/context/todo.context";
import { TodoFilterProvider } from "@/app/context/todoFilterContext";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TODO App",
  description: "Todo app built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <TodoFilterProvider>
          <TodosProvider>{children}</TodosProvider>
        </TodoFilterProvider>
      </body>
    </html>
  );
}
