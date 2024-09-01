import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </>
      )
    },
    {
      path: '/about',
      element: <AboutPage />
    }
  ]);

  return (
    
    <FeedbackProvider>
      <div className='container'>
      <RouterProvider router={router}> 
      <Header />
      <AboutIconLink />
      </RouterProvider>
      </div>
    </FeedbackProvider>
    
  );
}

export default App;
