import React from 'react';
import { Routes, Route, BrowserRouter as Router, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import IssuesList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';

const RedirectToIssues = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate("/openai/gpt-3/issues");
  }, [navigate]);
  return null;
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectToIssues />} />
        <Route path="/:owner/:repo/issues" element={<IssuesList />} />
        <Route path="/:owner/:repo/issues/:issueNumber" element={<IssueDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
