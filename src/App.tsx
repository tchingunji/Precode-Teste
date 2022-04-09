import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import FinishCheckout from "./pages/FinishCheckout";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import OrderProvider from "./context/OrderContext";
const App = () => {
  const { clientLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectedRoute user={clientLoggedIn}>
              <OrderProvider>
                <Home />
              </OrderProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute user={clientLoggedIn}>
              <OrderProvider>
                <Cart />
              </OrderProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/finish"
          element={
            <ProtectedRoute user={clientLoggedIn}>
              <OrderProvider>
                <FinishCheckout />
              </OrderProvider>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
