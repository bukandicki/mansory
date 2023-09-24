import {default as NextImage} from "next/image";
import styled from "styled-components";

export const MansoryContainer = styled.section<{ gap?: number, column: number }>`
    display: grid;
    gap: ${props => `${props.gap ?? 10}px`};
    grid-template-columns: ${props => `repeat(${props.column}, 1fr)`};
    @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 640px) and (max-width: 1023px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const MansoryItem = styled.section<{ gap?: number }>`
    display: grid;
    height: fit-content;
    gap: ${props => `${props.gap ?? 10}px`};
    grid-auto-flow: row;
`

export const Image = styled(NextImage)`
    position: relative !important;
    height: auto !important;
    transition: all ease-in-out;
`