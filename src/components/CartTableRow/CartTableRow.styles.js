import styled from 'styled-components';


export const TableData = styled.td`
  padding: 1rem;
`;

export const ProductDetailsWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProductDetailsTextWrapper = styled.div`
  margin-left: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 25%;
  margin: 5% 10% 0% 0%;
`;

export const Image = styled.img`
  height: 5rem;
  width: 10rem;
`;

export const QuantityWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

export const RemoveButton = styled.button`
  width: 100%;
  height: 1.2rem;
  margin-top: 0.5rem;
  text-align: center;
  border: 1px solid #d0d3d3;
  border-radius: 7px;
  background-color: #f0f2f2;
  box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
`

export const TotalPriceData = styled.td`
  padding: 1rem;
  width: 80px;
  text-align: center;
`;


