"use client";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import "../styles/global.css";


export default function RootLayout({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <html lang="en">
        <head>
          <title>Our Smart Contract Lottery</title>
        </head>
        <body>
          <NotificationProvider>{children}</NotificationProvider>
        </body>
      </html>
    </MoralisProvider>
  );
}
