import React, {Component} from 'react';

//styled-components
import * as S from './styles';

//images
import twizzyLogo from 'img/twizzy.png';

class TwizzyLogo extends Component {
  render() {
    return (
      <S.TwizzyLogo href="https://twizzy.app" target="_blank" rel="noopener">
        <S.Ad>ad</S.Ad>
        <S.Top>
          <S.Img src={twizzyLogo} />
          <S.Title>Twizzy</S.Title>
        </S.Top>
        <S.Description>Finally a standalone app for Twitter DM.</S.Description>
      </S.TwizzyLogo>
    );
  }
}

export default TwizzyLogo;
