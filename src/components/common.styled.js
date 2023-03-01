import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavLinkStyle = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #212121;
  transition: 0.35s;
  :hover {
    color: #2196f3;
  }
  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const AuthorizationText = styled.p`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 10px;
`;

export const AuthorizationBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f4fa;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 40px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  color: red;
`;

export const FieldStyle = styled(Field)`
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
`;

export const Button = styled.button`
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding: 10px 32px;
  color: #ffffff;
  margin-bottom: 10px;

  transition: 0.35s;
  :hover {
    background-color: #188ce8;
  }
`;

export const GoogleBtn = styled.button`
  display: flex;
  padding: 10px 32px;
  background-color: #ffffff;
  border-radius: 4px;
  border-color: #188ce8;
  border: 1px solid #2196f3;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const GoogleIcon = styled.img`
  margin-right: 10px;
  align-self: baseline;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 250px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
