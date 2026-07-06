"use client";

import Header1 from "@/components/header/header";
import {Footer} from "@/components/footer/footer";
import './globals.css'; 
import { Provider } from "react-redux";

import '@/node_modules/bootstrap/dist/css/bootstrap.css';
import { meraStore } from "@/store/store";
import SessionCheck from "@/components/sessionCheck/sessionCheck";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>        
        <title>Next.js</title>
      </head>
      <body id="app-section">



         <Provider store={meraStore}>
          
          <SessionCheck></SessionCheck>
          <Header1></Header1>
      
     

        <div id="main">
          {/* `pages honge, login/signup */}
          {children}
        </div>


      
      
        <Footer></Footer>
      </Provider>


        </body>
    </html>
  );
}
