import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Root from './Root'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: () => fetch('/fakeData.json'),
    errorElement: < ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'job-details/:id',
        element: <JobDetails />,
        loader: async ({ params }) => {
          const res = await fetch('/fakeData.json');
          const data = await res.json();
          const singleData = data.find(job => job.id == params.id);

          if (!singleData) {
            return {}
          } else {
            return singleData;
          }
        }
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
