import image1 from "../../assets/peli1.jpeg";

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, text, imgSrc }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={imgSrc} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export const CardGrid = () => {
  const cards = [
    {
      title: "Card title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: image1,
    },
    {
      title: "Card title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: image1,
    },
    {
      title: "Card title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      imgSrc: image1,
    },
    {
      title: "Card title",
      text: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imgSrc: image1,
    },
  ];

  return (
    <div className="container d-flex justify-content-center">
      <div className="w-75">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
