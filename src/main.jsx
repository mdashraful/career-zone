import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './error-page'
import Root from './Root'
import Home from './components/Home/Home'
import JobDetails from './components/JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: < ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/fakeData.json')
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
