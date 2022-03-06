import React, {useState} from 'react';
import {SwipeView, SwipeViewProps} from "./SwipeView";
import styled from "styled-components";

export interface SwipeContainerProps {
    steps: SwipeViewProps[]
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid green;
`

const LeftButton = styled.button`
    position: absolute;
    left: 0;
    height: 32px;
    min-width: 64px;
`
const RightButton = styled.button`
    position: absolute;
    right: 0;
    height: 32px;
    min-width: 64px;
`

const SwipeContainer = ({steps}: SwipeContainerProps) => {
    const [step, setStep] = useState(0);
    const goNext = () => setStep(step + 1);
    const goBack = () => setStep(step - 1);
    return (
        <div>
            <Container>
                {
                    steps.map(({content, title, render }, index) => (
                        <SwipeView content={content} render={render} title={title} isVisible={step === index}/>
                    ))
                }
            </Container>
            <LeftButton disabled={step === 0} onClick={goBack}>Back</LeftButton>
            <RightButton disabled={step >= steps.length - 1} onClick={goNext}>Next</RightButton>
        </div>
    );
};

export default SwipeContainer;