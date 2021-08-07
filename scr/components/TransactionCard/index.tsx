import React from 'react';

import {
    Container,
    Title,
    Amount,
    Details,
    Category,
    IconWrapper,
    Icon,
    CategoryName,
    Date
} from './styles';

interface Category {
    name: string;
    icon: string;
};

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface DataProps {
    data: TransactionCardProps;
};

export function TransactionCard({data}: DataProps) {
    return (
        <Container>

            <Title>{data.title}</Title>

            <Amount type={data.type}>
                {data.type === 'negative' && '- '}
                {data.amount}
            </Amount>

            <Details>

                <Category>

                    <IconWrapper>
                        <Icon name={data.category.icon}/>
                    </IconWrapper>

                    <CategoryName>{data.category.name}</CategoryName>

                </Category>

                <Date>{data.date}</Date>

            </Details>

        </Container>
    );
};