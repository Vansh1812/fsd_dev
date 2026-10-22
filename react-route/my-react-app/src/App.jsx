// // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// // function Home() {
// //   return <h1>This is my home app</h1>;
// // }

// // function About() {
// //   return <h1>This is my about app</h1>;
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <nav>
// //         <Link to="/">Home</Link>
// //         <Link to="/about">About</Link>
// //       </nav>

// //       <Routes>
// //         <Route path="/" element={<Home />} /> 
// //         <Route path="/about" element={<About />} />
// //       </Routes>    
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Home() {
//   return <h1>Welcome to Home</h1>;
// }

// function About() {
//   return <h1>About Us Section</h1>;
// }

// function Course() {
//   return <h1>Our Courses</h1>;
// }

// function Contact() {
//   return <h1>Contact Us Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#090808' }}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About Us</Link>
//         <Link to="/course">Course</Link>
//         <Link to="/contact">Contact Us</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/course" element={<Course />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Course from './pages/course';
import Contact from './pages/contact';
function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#090808' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/course">Course</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


