import styled from '@emotion/styled';

export const FooterCont = styled.div`
  max-width: 1280px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #2f303a;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactsWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContactsText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: 0.03em;

  color: #ffffff;
  :not(:last-child) {
    margin-bottom: 9px;
  }
`;

export const SubscribeWrap = styled.div`
  display: flex;
`;

export const SubscribeTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #ffffff;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  max-width: 450px;
  height: 50px;
  padding-left: 16px;
  margin-bottom: 20px;
  margin-right: 12px;

  color: #ffffff;
  background-color: #2f303a;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: #2f303a;
  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  :placeholder {
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.03em;

    color: rgba(255, 255, 255, 0.6);
  }
`;

export const SubscribeBtn = styled.button`
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.06em;

  color: #ffffff;
  transition: 0.35s;
  :hover {
    background-color: #188ce8;
  }
`;
