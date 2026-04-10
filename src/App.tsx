/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MorphBackground from './components/MorphBackground';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-transparent selection:bg-sky-200 selection:text-sky-900 relative">
          <MorphBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
