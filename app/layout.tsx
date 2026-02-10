// layout.tsx
import { Poppins, Playfair_Display } from "next/font/google"; // Playfair_Display add kiya
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap',
});

// Naya font define karein
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", // CSS variable name
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'playfair.variable' ko yahan add karein
    <html lang="en" className={`${poppins.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}