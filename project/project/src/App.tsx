import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import Individual from './pages/Individual';
import About from './pages/About';
import Stories from './pages/Stories';
import ServiceDetail from './pages/ServiceDetail';
import EPRPolicy from './pages/EPRPolicy';
import Collaboration from './pages/Collaboration';
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="bg-white">
        <ScrollToTop/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <main>
                  <Home/>
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path='/corporate'
            element={
              <>
                <Navbar />
                <main>
                  <Corporate/>
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path='/individual'
            element={
              <>
                <Navbar />
                <main>
                  <Individual/>
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path="/epr-policy"
            element={
              <>
                <Navbar />
                <main>
                  <EPRPolicy />
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path="/collaboration"
            element={
              <>
                <Navbar />
                <main>
                  <Collaboration />
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <main>
                  <About/>
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path='/stories'
            element={
              <>
                <Navbar />
                <main>
                  <Stories/>
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path='/products'
            element={
              <>
                <Navbar />
                <main>
                  <Products/>
                  <Footer />
                </main>
              </>
            }
          />

          <Route
            path='/services/:serviceId'
            element={
              <>
                <Navbar />
                <main>
                  <ServiceDetail/>
                  <Footer />
                </main>
              </>
            }
          />
        </Routes>

        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
