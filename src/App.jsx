import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Dashboard from './component/Dashboard.jsx'
import Profile from './component/Profile.jsx'
import Setting from './component/Setting.jsx'
import Navebar from './Navebar.jsx'
function App() {
 

  return (
    <div>
<BrowserRouter>
<Navebar />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Dashboard" element={<Dashboard />}>  
      <Route path="Profile" element={<Profile />}/>
      <Route path="Setting" element={<Setting />}/>
      </Route>
    </Routes>
    </BrowserRouter>
</div>

      
  );
}

export default App;
