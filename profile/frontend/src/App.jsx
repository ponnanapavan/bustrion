import Home from "./components/Home";
import Post from "./components/Post";
import UserProfile from "./components/UserProfile";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userprofile" element={<UserProfile />} />

      <Route path="post" element={<Post />} />
    </Routes>
  );
}

export default App;
