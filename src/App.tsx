import './reset.css'
import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { ErrorBoundary } from './componets/common/errorBoundary.jsx';
import { Header } from './componets/header/Header';
import { Search } from './componets/search/Search';
import { Preloader } from './componets/common/Preloader';
import LoginPage from './componets/login/LoginPage';

const Main = lazy(() => import('./componets/main/Main'));
const Profile = lazy(() => import('./componets/profile/Profile'));
const Favorites = lazy(() => import('./componets/favorites/Favorites'));
const History = lazy(() => import('./componets/history/History'));
const RegistrationPage = lazy(() => import('./componets/login/RegistrationPage'));
const Description = lazy(() => import('./componets/cards/Description'));

function App() {

  return (
    <div className={classes.app}>
      <Header />
      <Search />
      <ErrorBoundary>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/history" element={<History />} />
            <Route path="/registrationPage" element={<RegistrationPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/description/:userId?" element={<Description />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;