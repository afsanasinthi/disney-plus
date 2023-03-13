import React from 'react';
import styled from 'styled-components';
function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut,
            aliquam eveniet magnam minima rem delectus eligendi fuga eaque
            officia tempora tenetur quia hic possimus voluptatum. Eos enim error
            similique.
          </Description>
          <CTAlogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
  height: calc(100vh - 70px);

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;
const Content = styled.div``;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTAlogoOne = styled.img``;
const CTAlogoTwo = styled.img`
  width: 90%;
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
