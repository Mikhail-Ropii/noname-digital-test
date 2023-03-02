import styled from '@emotion/styled';

export const CartItemWrap = styled.li`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f4fa;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const CartTitle = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

export const CartWrap = styled.div`
  margin-bottom: 40px;
`;

export const ItemText = styled.p`
  margin-right: 10px;
`;

export const ProductImg = styled.img`
  margin-right: 10px;
`;

export const RemoveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

export const BtnText = styled.div`
  color: white;
`;

export const EmtyCartText = styled.div`
  text-align: center;
`;
