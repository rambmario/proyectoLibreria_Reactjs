import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

// Componentes
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import Categoria from "./container/Categoria/Categoria";
import AdminTablero from "./container/AdminTablero/AdminTablero";
import Buscador from "./components/Buscador/Buscador";
import NotFound from "./components/NotFound/NotFound";
import Register from './container/Register/Register';
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AllCategories from "./container/AllCategories/AllCategories";
import Perfil from "./components/Perfil/Perfil";

function App() {
  return (
    <div>
      <AuthProvider>
          <Nav />
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/categoria/:categoria" element={<Categoria />} />
            <Route path="/buscador" element={<Buscador />} />
            <Route path="/admin" element={<AdminTablero />} />
            <Route path="/buscador" element={<Buscador />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/allcategories" element={<AllCategories />}/>
            <Route path="/perfil"  element={<Perfil />}/>
          </Routes>
          <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
