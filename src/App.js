
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './components/Home/Home';
import Statics from './components/Statics/Statics';
import Blog from './components/Blog/Blog';
import QuizItem from './components/QuizItem/QuizItem';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: "/statics",
          element: <Statics></Statics>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/:Id",
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/4`),
          element: <QuizItem></QuizItem>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
