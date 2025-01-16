import { useEffect, useState } from "react";
import "./ImageSlider.scss";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

interface ImageType {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
}

const ImageSlider = ({ url, limit }: { url: string; limit: string }) => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [currentId, setCurrentId] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async (getUrl: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const dataItem = await res.json();

      if (dataItem) {
        setImages(dataItem);
        setLoading(false);
      }
    } catch (e: any) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  const handleForward = () => {
    setCurrentId((id) => (id === images.length - 1 ? 0 : id + 1));
  };

  const handleBack = () => {
    setCurrentId((id) => (id === 0 ? images.length - 1 : id - 1));
  };

  const handleRadioClick = (value: number) => {
    setCurrentId(value);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error !== null) {
    return <div>Error occured while fetching data {error}</div>;
  }

  return (
    <div className="container">
      <div className="slider-wrap">
        <div className="image-wrap">
          {images && images.length > 0 ? (
            images.map((item, index) => {
              return (
                <img
                  key={index}
                  alt={item.download_url}
                  src={item.download_url}
                  className={+item.id !== currentId ? "inactive" : ""}
                />
              );
            })
          ) : (
            <h3>No Image to show</h3>
          )}
        </div>

        <div className="icons-wrap">
          <div className="arrows-wrap">
            <div className="arrow-circle">
              <MdArrowBackIos size={20} className="arr" onClick={handleBack} />
            </div>

            <div className="arrow-circle" onClick={handleForward}>
              <MdArrowForwardIos size={20} className="arr" />
            </div>
          </div>

          <div className="buttons-wrap">
            {images &&
              images.length > 0 &&
              images.map((item, index) => {
                return (
                  <div
                    className={
                      +item.id === currentId
                        ? "radio-btns active"
                        : "radio-btns"
                    }
                    key={index}
                    onClick={() => handleRadioClick(+item.id)}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
