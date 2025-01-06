import { lazy, Suspense, useContext } from "react";

const Home = lazy(() => import("./components/Home"));
const Post = lazy(() => import("./components/Post"));

const UserProfile = lazy(() => import("./components/UserProfile"));
const UpdateProfile = lazy(() => import("./components/UpdateProfile"));

import { Route, Routes } from "react-router-dom";
import { Context } from "./components/context";

function App() {
  const { user } = useContext(Context);
  console.log(user);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={user ? <Home /> : <UserProfile />} />
        <Route path="/userprofile" element={<UserProfile />} />

        <Route path="/post" element={<Post />} />

        <Route path="/updateProfile/:userId" element={<UpdateProfile />} />
      </Routes>
    </Suspense>
  );
}

export default App;
