import "./globals.css";

export const metadata = {
  title: "Maths Guru Academy | Online Maths Tuition",
  description:
    "Live maths lessons, recorded video lessons, assignment support, and exam preparation for CBC, 8-4-4 / KCSE, IGCSE, Cambridge, IB, and SAT/AP students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
