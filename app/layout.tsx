import { Work_Sans } from "@next/font/google";
import Anchor from "@/components/Anchor";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <footer className="flex justify-center px-3 py-20 border-t border-neutral-500 mt-20">
          <div className="max-w-prose w-full space-y-8">
            <p className="block text-xs text-neutral-300">
              Designed and engineered by Zachary Cowan.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
