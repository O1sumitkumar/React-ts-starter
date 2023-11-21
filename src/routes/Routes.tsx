import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";
import Login from "../Pages/SignUp/Login";
import SignUp from "../Pages/SignUp/SignUp";
import WelcomePage from "../Pages/WelcomeScreen/WelcomePage";
import ChatScreen from "../Pages/ChatScreen/chatScreen";

const Home = () => <h1>Home</h1>;
const Profile = () => <h1>Profile</h1>;
// const ChatScreen = () => <h1>ChatScreen</h1>;
// const Welcome = () => <h1>Welcome</h1>;
// const Login = () => <h1>Login</h1>;
// const SignUp = () => <h1>SignUp</h1>;

const ChatRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/chat" element={<PrivateRoute />}>
        <Route index element={<ChatScreen />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default ChatRoutes;
