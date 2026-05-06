import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
