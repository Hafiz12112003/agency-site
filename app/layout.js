import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata = {
  title: "Pixelforge Studio | Design & Development Agency",
  description:
    "Pixelforge Studio is a design agency crafting UI/UX, websites, brands and digital campaigns that grow businesses.",
  keywords: ["design agency", "UI/UX", "web development", "branding", "digital marketing"],
  openGraph: {
    title: "Pixelforge Studio",
    description: "We make brands impossible to scroll past.",
    type: "website",
  },
};

const themeScript =
  'try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${body.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
