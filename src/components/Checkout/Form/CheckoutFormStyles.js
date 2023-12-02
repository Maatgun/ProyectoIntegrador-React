import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 950px) {
    width: 100%;

    h2 {
      text-align: center;
    }
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`;