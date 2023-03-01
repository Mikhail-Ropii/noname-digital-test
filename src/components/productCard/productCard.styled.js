import styled from '@emotion/styled';

export const CardWrap = styled.div`
  background: #f5f4fa;
  border-radius: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const CardName = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 15px;

  text-align: center;
  color: #212121;
`;

export const CardImg = styled.img`
  border-radius: 100%;
  margin-bottom: 15px;
`;

export const CardPrice = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  text-align: center;

  color: #2196f3;
  margin-bottom: 15px;
`;
