import { useEffect, useState } from "react";
import "./ScrollIndicator.scss";

const ScrollIndicator = ({ url }: { url: string }) => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [percentHeight, setPercentHeight] = useState(0);

  const fetchData = async (getUrl: string) => {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error: any) {
      setIsError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handlePageScroll = () => {
    // We need to check the full height, how much we've scrolled

    // Check how far down the user has scrolled
    const scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition, "scrollPosition");

    // Check the total height of the document
    const totalHeight = document.documentElement.scrollHeight;
    console.log(totalHeight, "totalHeight");

    // Check the visible height of the viewport
    const viewportHeight = document.documentElement.clientHeight;
    console.log(viewportHeight, "viewHeight");

    // The maximum scrollable height
    const scrollableHeight = totalHeight - viewportHeight;
    console.log(scrollableHeight, "scrollablesheight");

    // Determine if the user has scrolled to the bottom
    if (scrollPosition + viewportHeight >= totalHeight) {
      console.log("User has reached the bottom of the page!");
    }

    const heightPercentage = (scrollPosition / scrollableHeight) * 100;
    console.log(heightPercentage, "percent");

    setPercentHeight(heightPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);

    // on unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (isError !== null) return <h2>Error occured {isError}</h2>;

  return (
    <div>
      <div className="scroll-container">
        <div className="scrollbar" style={{ width: `${percentHeight}%` }}></div>
      </div>
      <h1>Scroll Indicator</h1>

      {products && products.length > 0 ? (
        products.map((item: any) => {
          return <p key={item.id}>{item.title}</p>;
        })
      ) : (
        <p>No item available</p>
      )}
    </div>
  );
};

export default ScrollIndicator;
