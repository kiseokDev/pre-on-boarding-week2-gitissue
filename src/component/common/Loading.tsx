import { styled, keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loading;

const rotate = keyframes` 
0%{
    transform: rotate(0deg);
}
100%{
    transform: rotate(350deg);
}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
