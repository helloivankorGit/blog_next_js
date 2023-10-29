import styled from 'styled-components';

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 30px;
  background-color: #3d9add;
  z-index: 1;
  box-shadow: -1px 2px 2px 0 rgba(0,0,0,.75);
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
  user-select: none;
`;

export const SwitchInput = styled.input`
  appearance: none;
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  margin-right: 5px;

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    left: 2px;
    top: 1px;
    transition: 0.3s;
  }

  &:checked:before {
    left: calc(100% - 22px);
  }
`;