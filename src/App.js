import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import './App.css';


const queryClient = new QueryClient()


const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <Header />
          <div className="main-container">
            <Sidebar />
            <Content>
              {/*<RouterProvider router={router}/>*/}
            </Content>
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
