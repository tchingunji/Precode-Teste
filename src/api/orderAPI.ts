import Order from "../models/Order";
import axios from "./axios.config";

type OrderData = {
  id: string;
  attributes: {
    price_order: number;
  };
};

type AllOrderResponse = {
  data: OrderData[];
};

type OrderResponse = {
  data: OrderData;
};

async function deleteOrder(id: string) {
  try {
    const response = await axios.delete(`/orders/${id}`);
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

async function getOrder(id: string) {
  try {
    const response = await axios.get<OrderResponse>(`/orders/${id}`);
    return mapToProduct(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

async function createOrder(order: Order) {
  try {
    const data = { price_order: order.totalPrice };
    const response = await axios.post(`/orders`, { data });
    return response.status;
  } catch (error) {
    console.error(error);
  }
}

async function getAllOrders() {
  try {
    const response = await axios.get<AllOrderResponse>("/orders");
    return mapToProducts(response.data);
  } catch (error) {
    console.error(error);
  }
}

function mapToProduct(orderResponse: OrderData) {
  const { attributes, id } = orderResponse;
  const { price_order } = attributes;
  const order = new Order({
    id,
    totalPrice: price_order,
  });
  return order;
}

function mapToProducts(ordersResponse: AllOrderResponse) {
  return ordersResponse.data.map((orderResponse) =>
    mapToProduct(orderResponse)
  );
}

export default {
  deleteOrder,
  getOrder,
  createOrder,
  getAllOrders,
};
