import React from 'react';
import { Routes, Route, BrowserRouter as Router, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import IssuesList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';
import { ErrorBoundary } from 'react-error-boundary';


const App = () => {


  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Routes>
          <Route path="/" element={<RedirectToIssues />} />
          <Route path="/:owner/:repo/issues" element={<IssuesList />} />
          <Route path="/:owner/:repo/issues/:issueNumber" element={<IssueDetail />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

const RedirectToIssues = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate("/facebook/react/issues");
  }, []);
  return null;
}

const ErrorFallback = () => {
  return (<div>에러났어요@@</div>);
}


export default App;