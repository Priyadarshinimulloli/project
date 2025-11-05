import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import AddYourOwn from './components/AddYourOwn.jsx'
import Testimonials from './components/Testimonials.jsx'
import Community from './components/Community.jsx'


function App() {
  return (
    <>
      <Navbar />
  <Hero />
  <Features />
  <AddYourOwn />
  <Testimonials />
  <Community />
      <footer className="py-4 text-center">
        <div className="container">
          <small className="text-muted">© {new Date().getFullYear()} HobbyCue — Learn something new.</small>
        </div>
      </footer>
    </>
  )
}

export default App
