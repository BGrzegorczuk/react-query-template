import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {TodoList} from "./features/todos/Todos";
import {TodoView} from "./features/todos/TodoView";

const queryClient = new QueryClient()

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <div className="main-container">
              <Sidebar />
              <Content>
                <Routes>
                  <Route path={"/"} element={<Navigate to={"todos"} replace/>} />
                  <Route path={"todos"} element={<TodoList />} />
                  <Route path={"todos/:id"} element={<TodoView />} />
                  <Route path={"blank"} element={<div>blank</div>} />
                </Routes>
              </Content>
            </div>
          </div>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
