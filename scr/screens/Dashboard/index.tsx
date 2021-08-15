import React from 'react';

import { HighLightCard } from '../../components/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    IconWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {


    let dataList: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de site',
            amount: 'R$ 12.000,00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: '13/04/2020'
        },
        {
            id: '2',
            type: 'negative',
            title: 'Hamburgueria Pizzy',
            amount: 'R$ 59,00',
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: '10/04/2020'
        },
        {
            id: '3',
            type: 'negative',
            title: 'Aluguel do apartamento',
            amount: 'R$ 1.200,00',
            category: {
                name: 'Contas',
                icon: 'calendar'
            },
            date: '27/03/2020'
        },
    ];

    return (
        <Container>
            <Header>
            
                <UserWrapper>

                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/nicolassrs797'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Nícolas Silva</UserName>
                        </User>
                    </UserInfo>

                    <IconWrapper onPress={() => {}}>
                        <Icon name="power"/>
                    </IconWrapper>

                </UserWrapper>

            </Header>

            <HighlightCards>

                <HighLightCard
                    title="Entradas"
                    amount="17.400"
                    cents="00"
                    lastTransaction="Última entrada dia 13 de abril"
                    type="down"
                />
                <HighLightCard
                    title="Saídas"
                    amount="1.259"
                    cents="00"
                    lastTransaction="Última saída dia 03 de abril "
                    type="up"
                />
                <HighLightCard
                    title="Total"
                    amount="16.141"
                    cents="00"
                    lastTransaction="01 à 16 de abril"
                    type="total"
                />

            </HighlightCards>

            <Transactions>

                <Title>Últimos Registros</Title>

                <TransactionList
                    data={dataList}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item}/>}
                />

            </Transactions>

        </Container>
    );
};