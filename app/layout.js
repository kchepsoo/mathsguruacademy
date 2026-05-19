import "./globals.css";

export const metadata = {
  title: "Maths Guru Academy",
  description: "A maths tuition platform for student assignment uploads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
