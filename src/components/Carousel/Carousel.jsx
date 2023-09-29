import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom'; // Importa el componente Link
import { AlimentoWrapper, VerProductosButton } from './CarouselStyle';

const AlimentosDestacados = () => {
  const alimentosDestacados = [
    { id: 2, name: "Dog Chow Perros Adultos Razas Medianas y Grandes 17kg", img: "https://res.cloudinary.com/dvj7ctojo/image/upload/v1693451171/dogchow-5_mfhopg_dqfze8.png" },
    { id: 4, name: "Dog Chow Perros Adultos Essencial 1.5kg", img: "https://res.cloudinary.com/dvj7ctojo/image/upload/v1693451169/galletas-2_d1hvkc_ztojtu.png" },
    { id: 7, name: "Dog Chow Abrazzos Integral Mini 500g", img: "https://res.cloudinary.com/dvj7ctojo/image/upload/v1693451171/comida-humeda-2_yxcn3j_hkdgbf.png"},
  ];

  return (
    <AlimentoWrapper>
      <div className="alimentos-destacados-carousel">
        <h2>ALIMENTOS DESTACADOS</h2>
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showStatus={false}  className="fullscreen-carousel"> 
          {alimentosDestacados.map(alimento => (
            <Link to="/productos" key={alimento.id}>
              <div>
                <img src={alimento.img} alt={alimento.name} />
                <p className="legend">{alimento.name}</p>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </AlimentoWrapper>
  );
};

export default AlimentosDestacados;



