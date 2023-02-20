import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cold } from "../components/pages/Cold";
import { Grill } from "../components/pages/Grill";
import { Home } from "../components/pages/Home";
import { Hot } from "../components/pages/Hot";
import { Soup } from "../components/pages/Soup";
import { AuthLayout } from "../layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/hot-diches" element={<Hot />} />
          <Route path="/cold-diches" element={<Cold />} />
          <Route path="/soup" element={<Soup />} />
          <Route path="/grill" element={<Grill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
