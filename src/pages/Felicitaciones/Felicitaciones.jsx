import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/dvj7ctojo/image/upload/c_scale,w_357/v1700855022/felicitaciones_erptlw.png'
          alt=''
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Compra Exitosa!</TitleStyled>
          <p>Tu pedido ya esta listo para ser enviado !</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
    </div>
  );
};

export default Felicitaciones;