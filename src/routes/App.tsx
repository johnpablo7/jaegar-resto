import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
// Menu
import { Cold } from "../components/pages/menu/Cold";
import { Grill } from "../components/pages/menu/Grill";
import { Home } from "../components/pages/menu/Home";
import { Hot } from "../components/pages/menu/Hot";
import { Soup } from "../components/pages/menu/Soup";
// Order
import { DineIn } from "../components/pages/orden/DineIn";
import { ToGo } from "../components/pages/orden/ToGo";
import { Delivery } from "../components/pages/orden/Delivery";
import { NotFound } from "../components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="" element={<Home />} />
          {/* Menu */}
          <Route path="/hot-diches" element={<Hot />} />
          <Route path="/cold-diches" element={<Cold />} />
          <Route path="/soup" element={<Soup />} />
          <Route path="/grill" element={<Grill />} />
          {/* Order */}
          <Route path="/dine-in" element={<DineIn />} />
          <Route path="/to-go" element={<ToGo />} />
          <Route path="/delivery" element={<Delivery />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
