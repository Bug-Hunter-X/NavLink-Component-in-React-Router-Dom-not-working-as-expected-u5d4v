```javascript
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)} >Go to About</NavLink>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} >Go to Home</NavLink>
    </div>
  );
}
```