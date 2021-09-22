import React from 'react';
import { categories } from '../../utils/categories';

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

export interface TransactionCardProps {
    type: 'down' | 'up';
    name: string;
    amount: string;
    category: string;
    date: string;
}

interface DataProps {
    data: TransactionCardProps;
};

export function TransactionCard({data}: DataProps) {

    let [ catFilter ] = categories.filter(
        item => item.key === data.category
    );

    return (
        <Container>

            <Title>{data.name}</Title>

            <Amount type={data.type}>
                {data.type === 'up' && '- '}
                {data.amount}
            </Amount>

            <Details>

                <Category>

                    <IconWrapper>
                        <Icon 
                            name={catFilter.icon}
                            iconColor={catFilter.color}
                        />
                    </IconWrapper>

                    <CategoryName>{catFilter.name}</CategoryName>

                </Category>

                <Date>{data.date}</Date>

            </Details>

        </Container>
    );
};