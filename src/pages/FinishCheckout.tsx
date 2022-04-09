import { useContext } from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import { OrderContext } from "../context/OrderContext";

function FinishCheckout() {
  const { clearCart } = useContext(OrderContext);
  const navigate = useNavigate();

  return (
    <main className="bg-darkSecondary h-screen text-white">
      <div
        className="flex justify-center items-center h-full max-w-5xl 
      w-8/12 mx-auto flex-col gap-8 text-center"
      >
        <BsFillBagCheckFill size={180} color="#c7c7c7" />
        <h1 className="font-semibold text-3xl">
          Compra concluída com sucesso!
        </h1>
        <p className="text-2xl">Obrigado pela compra na nossa loja</p>
        <div className="max-w-xs w-full">
          <Button
            onClick={() => {
              clearCart();
              navigate("/");
            }}
          >
            Ir para Home
          </Button>
        </div>
      </div>
    </main>
  );
}

export default FinishCheckout;
