import React from 'react';
import {
    Container,
    Title,
    Amount,
    ColorMark,
    ContentWrapper
} from './styles';

interface SummaryCardProps {
    color: string;
    title: string;
    amount: string;
};

export function SummaryCard({
    color,
    title,
    amount,
} : SummaryCardProps) {
    return (
        <Container>

            <ColorMark color={color}/>

            <ContentWrapper>

                <Title>{title}</Title>

                <Amount>{amount}</Amount>
                
            </ContentWrapper>

        </Container>
    );
};