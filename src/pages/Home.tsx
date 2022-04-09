import { useEffect, useState } from "react";
import productAPI from "../api/productAPI";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import Product from "../models/Product";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    productAPI
      .getAllProducts()
      .then((productsResponse) => {
        setLoading(false);
        setError(false);
        setProducts(productsResponse as Product[]);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        console.error(error);
      });
  }, []);

  if (error)
    return (
      <div
        className="bg-darkSecondary text-white min-h-screen flex 
      justify-center items-center"
      >
        <h1>Erro na busca dos produtos. Tente recarregar a página</h1>
      </div>
    );

  return (
    <>
      {isLoading && <Loading />}
      <main className="bg-darkSecondary text-white min-h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto w-4/5">
          <h1 className="text-3xl mt-16">Itens Disponíveis</h1>
          {products.length == 0 && (
            <div className="h-1/2 flex items-center justify-center text-2xl">
              <p>Não existem produtos</p>
            </div>
          )}
          <ProductsList products={products} />
        </div>
      </main>
    </>
  );
}

export default Home;
