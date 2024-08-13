import type { Metadata } from "next";
import { Inter, Poppins, Epilogue } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "./context/UserContext";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "900", "600"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
