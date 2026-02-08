import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'poppins.variable' class yahan hona bahut zaroori hai
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}