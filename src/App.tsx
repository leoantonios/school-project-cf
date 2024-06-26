import "./App.css";
import { Toaster } from 'sonner';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Confirm from "./pages/Confirm";
import Panel from "./pages/Panel";
import Estudiantes from "./pages/Estudiantes";
import RegistrosNotas from "./pages/RegistrosNotas";

function App() {
  return (
    <>
      <main className="min-h-screen w-full grid ">
        <div className="container mx-auto px-5">
          <Navbar />
          <div className="hero py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/confirm"element={<Confirm/>} />
              <Route path="/panel"element={<Panel/>} />
              <Route path="/estudiantes"element={<Estudiantes/>} />
              <Route path="/registros"element={<RegistrosNotas/>} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </div>
        </div>
      </main>
      <Toaster richColors expand={true}/>
    </>
  );
}

export default App;
