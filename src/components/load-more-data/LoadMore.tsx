import { useEffect, useState } from "react";
import "./LoadMore.scss";

interface Product {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
}

const LoadMore = () => {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${total}`
      );

      if (res.ok) {
        const data = await res.json();

        setList((prev) =>
          total === 0 ? data.products : [...prev, ...data.products]
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [total]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="loadmore-page">
      <div className="products-wrapper">
        {list.map((item) => {
          return (
            <div key={item.id} className="product">
              <div className="img-wrap">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="text-wrap"></div>
            </div>
          );
        })}
      </div>

      <button
        className="loadmore-btn-wrap"
        onClick={() => setTotal((prev) => prev + 20)}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
