import { styled } from 'styled-components';

const ADVERTISEMENT_IMG_URL =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

const ADVERTISEMENT_URL = 'https://www.wanted.co.kr/';

const Ad = () => {
  return (
    <AdContent href={ADVERTISEMENT_URL}>
      <img src={ADVERTISEMENT_IMG_URL} alt="wanted-Advertisement" />
    </AdContent>
  );
};
export default Ad;

const AdContent = styled.a`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
