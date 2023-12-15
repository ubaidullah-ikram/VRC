import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Map from './screens/Map';
import Sidebar from './components/Sidebar';
import GetStart from './components/Getstart';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Datasets from './screens/Datasets';
import Document from './screens/Document';
import Users from './screens/Users';
import Dashboard from './screens/Dashboard';
import AuthProvider from './components/Provider';
import Profile from './screens/Profile';

function Layout({ children, isLoggedIn }) {
  const sidebar = isLoggedIn ? <Sidebar /> : null;

  return (
    <div>
      <div style={{ width: isLoggedIn ? `85px` : '' }}>{sidebar}</div>
      {children}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthProvider>
      <Router>
        <Layout isLoggedIn={isLoggedIn}>
          <Routes>
            <Route path="/" element={<GetStart />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/map"
              element={<Map setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/datasets"
              element={<Datasets setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/documents"
              element={<Document setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/users"
              element={<Users setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/profile"
              element={<Profile setIsLoggedIn={setIsLoggedIn} />}
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
