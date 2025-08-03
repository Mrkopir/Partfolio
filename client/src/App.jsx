import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/main.page/main.page.jsx";
import SkillsPage from "./pages/skills.page/skills.page.jsx";
import ContactPage from "./pages/contact.page/contact.page.jsx";
import WorksPage from "./pages/works.page/works.page.jsx";

export default function App() {
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
