import React from 'react';
import { FeatureContainer, FeatureButton, FeatureH1, FeatureP } from './featureElement';

const Feature = () => {
    return (
        <FeatureContainer>
            <FeatureH1>Pizza of the Day</FeatureH1>
            <FeatureP>Truffle alfredo sauce topped with 24 carat gold dust.</FeatureP>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature
