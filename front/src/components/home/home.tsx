import { CarouselComponent } from "./carousel";
import { CardGrid } from "./resenia";
import { CardLanzamientos } from "./lanzamientos";
import "../../css/home.css";
export const Home = () => {
  return (
    <>
      <div className="container-home">
        <h1 className="text-center">
          Escribe y comparte reseñas. Crea tus propias listas. Comparte tu vida
          en el cine. A continuación, se muestran algunas reseñas y listas
          populares de esta semana. Regístrate para crear la tuya.
        </h1>
        <div className="container-top">
          <h1 className="text-center">Mejores pelis en esta semana</h1>
          <div className="custom-carousel">
            <CarouselComponent />
          </div>
        </div>
        <h1 className="text-center">Reseñas recientes</h1>
        <div className="custom-cardGrid">
          <CardGrid />
        </div>
        <h1 className="text-center">Nuevos lanzamientos</h1>
        <div className="custom-cardGrid">
          <CardLanzamientos />
        </div>
        <h1 className="text-center">Publicaciones</h1>
        <h1 className="text-center">Celebridades</h1>
      </div>
    </>
  );
};
