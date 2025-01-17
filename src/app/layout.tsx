import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import SesionPro from "./SesionPro"
import Login from "./login/page";
import Home from "./page";
import Pag from "./pag/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session =await getServerSession(authOptions)
  console.log(session,"session")

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SesionPro session={session}>{
          !session ? ( children):(
            <Login/>
          )
          }</SesionPro> */
          children}
          
      </body>
    </html>
  );
}
