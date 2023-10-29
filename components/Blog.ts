import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 0 10px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
`;

export const Select = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    width: 100%;
    transition: border-color 0.3s;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUwIiB3aWR0aD0iNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGg1MHY1MEgweiIvPjxwYXRoIGQ9Im00Ny4yNSAxNS0yLjA4Ni0yLjA4NkwyNSAzMy4wNzggNC44MzYgMTIuOTE0IDIuNzUgMTUgMjUgMzcuMjV6Ii8+PC9zdmc+);
    background-position: calc(100% - 10px) 14px;
    background-repeat: no-repeat;
    background-size: 12px;

    &:hover {
        border-color: #007bff;
    }

    @media (min-width: 768px) {
      max-width: 200px;
    }
`;

export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
    margin-top: 30px;
`;

export const PostTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px;
  opacity: 0;
  transition: opacity 0.2s;
  box-sizing: border-box;
  &:hover {
    opacity: 1;
  }
`;

export const Li = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  flex-basis: calc(50% - 20px);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  &:hover ${PostTitle} {
    opacity: 1;
  }
  @media (min-width: 768px) {
    flex-basis: calc(25% - 20px);
  }
`;

export const Img = styled.img`
  max-width: 100%;
  display: block;
`;
