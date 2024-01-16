
import './App.css'
import Contact from './assets/components/contact/Contact'
import Nav from './assets/components/nav/Nav'
import Section from './assets/components/section/Section'
import Skills from './assets/components/skills/Skills'
import Welcome from './assets/components/welcome/Welcome'

function App() {


  return (
    <>
    <Nav/>
    <Welcome/>
    <Section
    title = {"PROJECTS"}/>
    <Skills/>
    <Contact/>
    </>
  )
}

export default App
