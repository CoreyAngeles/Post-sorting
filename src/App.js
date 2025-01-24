import { useState } from "react";
import PostsList from "./components/PostsList";
import "./App.css";
import MySelectMenu from "./components/UI/Select/MySelectMenu";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", description: "First post description" },
    {
      id: 2,
      title: "Python",
      description: "Second post description",
    },
    { id: 3, title: "Go", description: "Third post description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const selectedOptions = [
    { value: "title", description: "by title" },
    { value: "description", description: "by description" },
  ];

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts(
      [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort]);
      })
    );
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Post sorting
      </h1>
      <div className="selectMenuWrapper">
        <MySelectMenu
          defaultValue="Sort"
          options={selectedOptions}
          value={selectedSort}
          onChange={sortPosts}
        />
      </div>
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
