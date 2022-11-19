import React from "react";
import styled from "styled-components";
const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 80px;
  height: 40px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  transition: background-color 0.2s;
  padding-right: 8px;
  padding-left: 8px;
`;

const SwitchButton = styled.span`
  content: "hello";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background: blue;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;
type Props = {
  id: any;
  toggled: boolean;
  onChange: any;
};

const Switch = ({ id, toggled, onChange }: Props) => {
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        {toggled ? <div>light</div> : <div> </div>}
        <SwitchButton className="switch-button" />
        {!toggled ? <div>dark</div> : <div></div>}
      </SwitchLabel>
    </>
  );
};

export default Switch;
