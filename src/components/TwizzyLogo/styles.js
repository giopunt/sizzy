import styled from 'styled-components';
import flex from 'styles/flex';

export const TwizzyLogo = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.45);
  margin-bottom: 50px;
  margin-top: 15px;
  padding: 12px 10px;
  position: relative;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: all 100ms linear;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Top = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const Title = styled.div`
  font-size: 16px;
`;

export const Description = styled.div`
  font-size: 13px;
  margin-top: 10px;
  line-height: 18px;
`;

export const Ad = styled.div`
  ${{
    backgroundColor: '#745896',
    borderRadius: '3px',
    fontSize: '11px',
    lineHeight: '11px',
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '3px 5px'
  }}
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
