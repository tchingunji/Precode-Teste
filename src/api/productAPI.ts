import Product from "../models/Product";
import axios from "./axios.config";
import { AxiosError } from "axios";

type ProductDataResponse = {
  id: string;
  attributes: {
    title: string;
    description: string;
    price: number;
    link_image: string;
  };
};

type GetProductResponse = {
  data: ProductDataResponse;
};

type AllProductsResponse = {
  data: ProductDataResponse[];
};

async function getProduct(id: string) {
  try {
    const response = await axios.get<GetProductResponse>(`/products/${id}`);
    return mapToProduct(response.data.data);
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(axiosError.response);
    return axiosError.response?.status;
  }
}

async function getAllProducts() {
  try {
    const response = await axios.get<AllProductsResponse>("/products");
    return mapToProducts(response.data);
  } catch (error) {
    console.error(error);
  }
}

function mapToProduct(productResponse: ProductDataResponse) {
  const { attributes, id } = productResponse;
  const { description, link_image, price, title } = attributes;
  const product = new Product({
    description,
    id,
    imageLink: link_image,
    price,
    title,
  });
  return product;
}

function mapToProducts(productsResponse: AllProductsResponse) {
  return productsResponse.data.map((productResponse) =>
    mapToProduct(productResponse)
  );
}

export default {
  getProduct,
  getAllProducts,
};
