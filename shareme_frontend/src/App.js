import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "./container/Home";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="463004564850-5e6adb26e1fr81n6d4e6rm8j5e5l67c1.apps.googleusercontent.com">
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
