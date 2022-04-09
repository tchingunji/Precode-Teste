import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";
import CancelButton from "../components/CancelButton";
import Navbar from "../components/Navbar";
import { OrderContext } from "../context/OrderContext";

type OrderType = {
  imageLink: string;
  singlePrice: number;
  quantity: number;
  title: string;
  id: string;
};

function Cart() {
  const { selectedProducts, clearCart } = useContext(OrderContext);
  const [orders, setOrders] = useState<OrderType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setOrders(mapToOrder());
  }, []);

  const mapToOrder = () => {
    const _order: OrderType[] = [];
    selectedProducts.forEach((product) => {
      const index = _order.findIndex(({ id }) => product.id == id);
      if (index == -1) {
        _order.push({
          id: product.id,
          imageLink: product.imageLink,
          quantity: 1,
          singlePrice: product.price,
          title: product.title,
        });
      } else {
        const orderFound = _order[index];
        _order[index] = { ...orderFound, quantity: orderFound.quantity + 1 };
      }
    });
    return _order;
  };

  const totalPayment = orders.reduce(
    (prev, currOrder) => prev + currOrder.quantity * currOrder.singlePrice,
    0
  );

  const onConfirmPayment = () => navigate("/finish");

  const onCancelPayment = () => {
    clearCart();
    navigate("/");
  };

  if (selectedProducts.length == 0)
    return (
      <main className="bg-darkSecondary text-white h-screen">
        <Navbar showHomeButton />
        <div className="max-w-5xl mx-auto w-4/5 flex h-full justify-center items-center">
          <div className="h-full flex items-center justify-center text-2xl">
            <p>Não existem produtos no carrinho</p>
          </div>
        </div>
      </main>
    );

  return (
    <main className="bg-darkSecondary text-white min-h-screen">
      <Navbar showHomeButton />
      <div className="max-w-5xl mx-auto w-4/5">
        <h1 className="text-3xl mt-16">Itens Disponíveis</h1>
        <div className="flex flex-col gap-14 md:flex-row-reverse mt-10">
          <div className="flex-1 text-center">
            <h2 className="text-2xl mb-9">Total a Pagar</h2>
            <p className="text-2xl font-bold mb-4 md:mb-14">
              {totalPayment.toFixed(2)} $
            </p>
            <Button onClick={onConfirmPayment}>Conferir Pagamento</Button>
            <CancelButton onClick={onCancelPayment}>
              Cancelar Pagamento
            </CancelButton>
          </div>
          <div
            className="overflow-y-auto h-96 mb-10 bg-accent 
          p-4 rounded-2xl flex flex-col gap-2 flex-1 "
          >
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center gap-4 border-b pb-2 border-secondary"
              >
                <img
                  className="w-28 h-28 rounded-xl"
                  src={order.imageLink}
                  alt={order.title}
                />
                <div>
                  <p className="text-lg">
                    {order.quantity}x {order.title}
                  </p>
                  <p className="text-lightSecondary">
                    Item: {order.singlePrice.toFixed(2)} $
                  </p>
                  <p>
                    Total: {(order.singlePrice * order.quantity).toFixed(2)} $
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
