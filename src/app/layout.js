import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Nunito } from "next/font/google";
import './globals.css'
import {Toaster} from "react-hot-toast";

const font = Nunito({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'RestApp',
  description: 'Aplicación de restaurante',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <main className="max-w-4xl mx-auto p-4">
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2024 Todos los derechos reservados. Hecho por Quantlas
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
