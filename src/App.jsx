import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const login = async (details) => {
    const response = await fetch(`http://localhost:8000/api/angkot/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    const data = await response.json();
    localStorage.setItem("token", JSON.stringify(data.token));
    setToken(localStorage.getItem("token"));
  };

  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString == "") {
      return "";
    }
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const logout = () => {
    setToken("");
    localStorage.setItem("token", "");
  };

  useEffect(() => {
    setToken(getToken());
  }, []);

  return (
    <div className="relative min-h-screen bg-white border-gray-200 dark:bg-gray-900">
      <Navbar logout={logout} getToken={getToken} />
      <div>
        {getToken() == "" ? (
          <LoginForm login={login} error={error} />
        ) : (
          <Search getToken={getToken} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
