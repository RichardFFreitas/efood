import styled from "styled-components";
import { Link } from "react-router-dom";
import { Props } from ".";
import { colors } from "../../styles";

export const ButtonContainer = styled(Link)<Props>`
    background-color: ${colors.pink};
    color: ${colors.peach};
    text-decoration: none;
    font-size: ${(Props) => (Props.type === "link" ? '14px' : '12px')};
    cursor: ${(Props) => (Props.type === "link" ? 'pointer' : 'default')};
    margin-top: 16px;
    margin-bottom: 8px;
    margin-left: 8px;
    padding: 6px 4px;
    font-weight: bold;
    display: inline-block;

`