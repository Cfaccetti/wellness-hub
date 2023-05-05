import Navbar from "./Components/Navbar/Navbar"
import Habits from "./Pages/Habits/Habits"
import Meditation from "./Pages/Meditation/Meditation"
import About from "./Pages/About/About"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </div>
    </>
  )
}

export default App