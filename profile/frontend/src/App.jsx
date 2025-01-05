import { useContext } from "react";
import Home from "./components/Home";
import Post from "./components/Post";
import UserProfile from "./components/UserProfile";
import { Route, Routes } from "react-router-dom";
import { Context } from "./components/context";
import UpdateProfile from "./components/UpdateProfile";
function App() {
  const { user } = useContext(Context);
  console.log(user);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <UserProfile />} />
      <Route path="/userprofile" element={<UserProfile />} />

      <Route path="/post" element={<Post />} />

      <Route path="/updateProfile/:userId" element={<UpdateProfile />} />
    </Routes>
  );
}

export default App;
