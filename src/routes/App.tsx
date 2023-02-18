import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { AuthLayout } from "../layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
