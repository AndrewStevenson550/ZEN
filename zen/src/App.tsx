import NewsFeed from "./components/NewsFeed.tsx";
import WeatherCard from "./components/WeatherCard.tsx";
import TodoList from "./components/TodoList.tsx";
import Sidebar from "./components/Sidebar.tsx";
import React from "react";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <NewsFeed />
      {/* 
      <WeatherCard />
      <TodoList /> */}
    </div>
  );
}

export default App;
