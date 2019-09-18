import React from 'react';
import PageContainer from '../common/PageContainer';
import HomeCard from './HomeCard';
import { times } from 'lodash';

export default function Home() {
    return (
        <PageContainer>
            {times(10, () => (
                <HomeCard />
            ))}
        </PageContainer>
    );
}
