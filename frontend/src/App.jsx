import React, { useEffect, useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Home from "./pages/Home";
import EditTodoForm from "./pages/EditTodoForm";
import { TaskContextProvider } from "./context/TaskProvider";
import { makeApiRequest } from "./apis/utils";

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<EditTodoForm />} />
    </Route>
  )
);

// Create a new QueryClient instance
const client = new QueryClient();

const fetchTasks = async () => {
  return await makeApiRequest("");
};

const HomeWithTasks = () => {
  const { data: tasks, error, isLoading } = useQuery("tasks", fetchTasks);

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks: {error.message}</p>;

  return <Home tasks={tasks} />;
};

function App() {
  return (
    <QueryClientProvider client={client}>
      <TaskContextProvider>
        <RouterProvider router={router}>
          <Route path="/" element={<HomeWithTasks />} />
        </RouterProvider>
      </TaskContextProvider>
    </QueryClientProvider>
  );
}

export default App;
