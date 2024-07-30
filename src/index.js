import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from './AuthContext/AuthContext';
// import {loadStripe} from "@stripe/react-stripe-js"
// const stripe=loadStripe();
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient=new QueryClient()
root.render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <App />
   </AuthProvider>
   <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
