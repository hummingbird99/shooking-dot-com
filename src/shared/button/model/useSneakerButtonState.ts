'use client';

import { useState } from "react";

const useSneakerButtonState = () => {

    const [counter, setCounter] = useState<number>(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const doClick = () => {
        setCounter(prev => prev + 1);
        setIsButtonDisabled(true);
    };

    return {counter, isButtonDisabled, doClick};
};

export default useSneakerButtonState;