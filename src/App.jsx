import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Home, CreateProject, Projects } from "./pages"


function App() {

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/createProject" element={<CreateProject/>}></Route>
        </Routes>
      </Router>
    </main>
  )
}

export default App
