import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AllPosts from './Components/AllPosts';
import Protected from './Components/AuthLayout';
import PostForm from './Components/post-form/PostForm';

const router=createBrowserRouter([
  {
    path:"/Insightforge",
    element:<App></App>,
    children:[
      {
        path:"/Insightforge",
        element:
               <Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/allposts",
        element:<Protected authentication={true}>
                  <AllPosts></AllPosts>
                </Protected>
      },
      {
        path:"/createpost",
        element:<Protected authentication={true}>
                  <PostForm></PostForm>
                </Protected>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
