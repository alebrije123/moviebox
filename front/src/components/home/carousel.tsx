import "../../css/carousel.css";

const imags = [
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%207.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%202.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%203.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%204.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%205.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%206.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%209.png",
  "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%2010.png",
];

const images = [
  {
    src: "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%207.png",
    title: "Pelicula 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis, feugiat magna consequat fames accumsan cum lobortis posuere, inceptos ante ut tempor euismod in libero dapibus. Enim ultricies placerat molestie blandit mauris non ad ut vestibulum inceptos donec lacinia risus a quis, eleifend purus varius nascetur venenatis dictumst habitasse scelerisque est accumsan duis hendrerit hac viverra.",
    tiempo: "1h 27 min",
    fecha: "2020",
    genero: "Aventura, Fantasía, Acción, Familia",
    actores:
      "Jason Scott Lee, Yoson An, Tzi Ma, Rosalind Chao, Ming-Na Wen, Xana Tang",
    valoracion: "4",
  },
  {
    src: "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%202.png",
    title: "Pelicula 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis, feugiat magna consequat fames accumsan cum lobortis posuere, molestie massa vel mattis egestas nascetur ut. Sed turpis habitant ad purus elementum mi sapien cras vulputate, morbi vehicula feugiat auctor nunc quam proin litora primis, inceptos ante ut tempor euismod in libero dapibus. Enim ultricies placerat molestie blandit mauris non ad ut vestibulum inceptos donec lacinia risus a quis, eleifend purus varius nascetur venenatis dictumst habitasse scelerisque est accumsan duis hendrerit hac viverra.",
    tiempo: "1h 27 min",
    fecha: "2020",
    genero: "Aventura, Fantasía, Acción, Familia",
    actores:
      "Jason Scott Lee, Yoson An, Tzi Ma, Rosalind Chao, Ming-Na Wen, Xana Tang",
    valoracion: "4",
  },
  {
    src: "https://raw.githubusercontent.com/kunaal438/disney-plus-clone/master/images/poster%203.png",
    title: "Pelicula 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis, feugiat magna consequat fames accumsan cum lobortis posuere, molestie massa vel mattis egestas nascetur ut. Sed turpis habitant ad purus elementum mi sapien cras vulputate, morbi vehicula feugiat auctor nunc quam proin litora primis, inceptos ante ut tempor euismod in libero dapibus.",
    tiempo: "1h 27 min",
    fecha: "2020",
    genero: "Aventura, Fantasía, Acción, Familia",
    actores:
      "Jason Scott Lee, Yoson An, Tzi Ma, Rosalind Chao, Ming-Na Wen, Xana Tang",
    valoracion: "4",
  },
];

export const FeaturedMoviesCarousel = () => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carrusel-container">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="carousel-content">
                <img
                  src={item.src}
                  className="d-block"
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-information">
                  <h2 className="title-pointer">{item.title}</h2>
                  <div className="container-time-date">
                    <div className="time-container">
                      <i className="bi bi-clock-fill"></i>
                      <h6>{item.tiempo}</h6>
                    </div>
                    <div className="calendar-container">
                      <i className="bi bi-calendar2-week-fill"></i>
                      <h6>{item.fecha}</h6>
                    </div>
                  </div>
                  <div className="description-container">
                    <p className="parrafo">{item.description}</p>
                  </div>
                  <h6>Género:&nbsp; {item.genero}</h6>
                  <h6>Actores:&nbsp; {item.actores}</h6>

                  <div className="d-flex align-items-center w-100">
                    <div className="movie-stars">
                      {[...Array(4)].map((_, index) => (
                        <i key={index} className="bi bi-star-fill"></i>
                      ))}
                    </div>{" "}
                    <h2 className="movie-vote ms-2">{item.valoracion}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon w-75 h-75"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon w-75 h-75"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
