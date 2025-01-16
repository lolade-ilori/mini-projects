import { useEffect, useState } from "react";
import "./LoadMore.scss";

const LoadMore = () => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState<number>(0);
  const [err, setErr] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      console.log(data);

      if (data && data.products.length > 0) {
        setProducts((prevData: any) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error: any) {
      setErr(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setBtnDisabled(true);
    }
  }, [products]);

  if (loading) return <div>Loading...</div>;

  if (err !== null) return <div>Error Occured: {err}</div>;

  return (
    <div className="loadmore-page">
      <div className="products-wrapper">
        {products.map((item: any, index: any) => (
          <div key={index} className="product">
            <div className="img-wrap">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="text-wrap">
              <h4>{item.title}</h4>
              <p>{item.brand}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="loadmore-btn-wrap">
        <button disabled={btnDisabled} onClick={() => setCount(count + 1)}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
