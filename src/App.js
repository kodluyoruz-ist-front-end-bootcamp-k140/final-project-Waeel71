import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutPage, BlogPage, ContactPage, CoursesPage, MainPage } from './Pages';
import { NavBar } from "./components/navBar/navBar"
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/course' element={<CoursesPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contactus' element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
