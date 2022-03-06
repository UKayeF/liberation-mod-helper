import React, {useState} from 'react';

interface SwipeViewProps {
    content: string,
    title: string,
}

const SwipeView = ({ content, title }: SwipeViewProps) => {
    return (
        <div>
            { content }
        </div>
    )
}

interface SwipeContainerProps {
    steps: SwipeViewProps[]
}

const SwipeContainer = ({ steps }: SwipeContainerProps) => {
    const [step, setStep] = useState(0);
    return (
        <div>
            {
                steps.map(({ content, title}) => (
                    <SwipeView content={content} title={title}/>
                ))
            }
            <button >{}</button>
        </div>
    );
};
// SwipeContainer.propTypes = {
//     steps: PropTypes.array
// }

export default SwipeContainer;