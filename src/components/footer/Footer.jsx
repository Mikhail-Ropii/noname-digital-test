import { Container } from 'components/common.styled';
import {
  FooterCont,
  ContactsWrap,
  ContactsText,
  SubscribeWrap,
  Input,
  SubscribeTitle,
  SubscribeBtn,
} from './footer.styled';

export const Footer = () => {
  return (
    <FooterCont>
      <Container>
        <ContactsWrap>
          <div>
            <ContactsText>г. Киев, пр-т Леси Украинки, 26</ContactsText>
            <ContactsText>info@example.com</ContactsText>
            <ContactsText>+38 099 111 11 11</ContactsText>
          </div>
          <div>
            <SubscribeTitle>Подпишитесь на рассылку</SubscribeTitle>
            <SubscribeWrap>
              <form>
                <Input type="email" name="email" placeholder="E-mail" />
              </form>
              <SubscribeBtn type="submit">Подписаться</SubscribeBtn>
            </SubscribeWrap>
          </div>
        </ContactsWrap>
      </Container>
    </FooterCont>
  );
};
