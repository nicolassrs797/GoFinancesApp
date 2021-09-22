import React from 'react';

import {
    Container,
    Details,
    Title,
    Icon,
    Content,
    Amount,
    LastTransaction
} from './style';

interface Props {
    title: string;
    type: 'up' | 'down' | 'total';
    amount: string;
    lastTransaction: string;
};

let icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
};

export function HighLightCard({
    title,
    type,
    amount,
    lastTransaction,
}: Props){
    return (
        <Container type={type}>

            <Details>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type}></Icon>
            </Details>
            
            <Content>

                <Amount type={type}>
                    {amount}
                </Amount>

                <LastTransaction type={type}>{lastTransaction}</LastTransaction>

            </Content>

        </Container>
    );
};