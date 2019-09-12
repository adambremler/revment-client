import React from 'react';
import HomeContainer from './styled/HomeContainer';
import HomeCard from './HomeCard';
import { times } from 'lodash';

export default function Home() {
    return (
        <HomeContainer>
            {times(10, () => (
                <HomeCard />
            ))}
        </HomeContainer>
    );
}
