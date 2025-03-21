import { CarouselComponent } from "./carousel";
import { CardGrid } from "./resenia";
import { CardLanzamientos } from "./lanzamientos";
import "../../css/home.css";
export const Home = () => {
  return (
    <>
        <h1 className="text-center">Los 10 mejores</h1>
        <div className="custom-carousel">
          <CarouselComponent />
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
    </>
  );
};
