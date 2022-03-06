import React from "react";
import styled from "styled-components";

export interface SwipeViewProps {
    content?: string,
    render?: any,
    title: string,
    isVisible?: boolean
}

const HideableDiv = styled.div`
    display: ${(props: { isVisible?: boolean; }) => props.isVisible ? "flex" : "none"};
    min-width: 300px;
    width: ${Math.min(window.innerWidth, 640)}px;
    flex-flow: column;
    justify-content: center;
    padding: 8px;
    border: 1px solid red;
`
export const SwipeView = ({ content, render, title, isVisible }: SwipeViewProps) => {
    return (
        <HideableDiv isVisible={isVisible}>
            <h3>{title}</h3><br/>
            { content ? <p>content</p> : null }
            { render ? render : null }
        </HideableDiv>
    )
}
