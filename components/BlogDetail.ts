import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  line-height: 1.6;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;