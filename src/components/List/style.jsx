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
  .btarea {
    display: flex;
    align-items: center;
    height: 42px;
    gap: 5px;
  }
`;

export const OpenAddCard = styled.button`
  width: 100%;
  height: 42px;
  background: #ebecf0;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #5e6c84;
  font-size: 17px;
  border-radius: 5px;

  &:hover {
    background: var(--ds-background-neutral, rgba(9, 30, 66, 0.08));
  }
`;
export const AddCard = styled.button`
  background: var(--ds-background-brand-bold, #0079bf);
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  color: #fff;
  padding: 6px 12px;
  border: 0;
  border-radius: 3px;
  height: 40px;

  cursor: pointer;
  &:hover {
    background: var(--ds-background-brand-bold, #0068a5);
    transition-duration: 85ms;
  }
`;
export const CloseAddCard = styled.button`
  background: none;
  height: 22px;
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  color: var(--ds-icon, #42526e);
  padding: 6px 12px;
  border: 0;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: var(--ds-icon, #171c25);
    transition-duration: 85ms;
  }
`;
