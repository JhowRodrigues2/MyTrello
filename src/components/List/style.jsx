import styled from "styled-components";

export const ListContainer = styled.div`
  padding: 0 15px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 320px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
  }
  ul {
    margin-top: 30px;
  }
  button {
    width: 100%;
    height: 42px;
    background: #7159c1;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
  }
`;
export const TextAreaContainer = styled.div`
  width: 100%;
  background: #fff;

  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  textarea {
    border: 0;
  }
`;
export const CloseAddCard = styled.button`
  background: #fff;
`;
