import './globals.css'
import localFont from "next/font/local";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <Header />
      
        {children}

        <Footer />
      
      </body>
    </html>
  )
}
