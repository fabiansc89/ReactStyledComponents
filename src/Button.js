import styled from "styled-components";

const CuteButton = styled.button`
  background: ${(props) => props.theme.shadow};
  border: 1px solid transparent;
  padding: 5px 10px;
  transition: border 0.15s;

  &:hover {
    border: 1px solid ${(props) => props.color};
    cursor: pointer;
  }
`;

function Button(props) {
  const saveOnClick = (event) => {
    event.preventDefault();
    props.power();
  };

  return (
    <CuteButton onClick={saveOnClick} {...props}>
      {props.text}
    </CuteButton>
  );
}

export { Button };
