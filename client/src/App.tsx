import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/main.page/main.page";
import SkillsPage from "./pages/skills.page/skills.page";
import ContactPage from "./pages/contact.page/contact.page";
import WorksPage from "./pages/works.page/works.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/"  element = {<MainPage />} />
        <Route path = "/skills" element = {<SkillsPage />} />
        <Route path = "/contact" element = {<ContactPage />} />
        <Route path="/works" element = {<WorksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App