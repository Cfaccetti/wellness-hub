import Navbar from "./Components/Navbar/Navbar"
import Habits from "./Pages/Habits/Habits"
import QuotesSlideshow from "./Pages/Home/Home"
import About from "./Pages/About/About"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<QuotesSlideshow />} />
          <Route path="/about" element={<About />} />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </div>
    </>
  )
}

export default App