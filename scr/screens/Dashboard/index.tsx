import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

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
    TransactionList,
    LoadingContainer
} from './styles';
import theme from '../../global/styles/theme';

export interface DataListProps extends TransactionCardProps {
    id: string;
};

interface HighlightProps { 
    amount: string;
    lastTransaction: string;
};

interface HighlightData {
    income: HighlightProps;
    outcome: HighlightProps;
    total: HighlightProps;
};

export function Dashboard() {

    let [loading, setLoading] = useState(true);

    let [dataList, setDataList] = useState<DataListProps[]>([]);
    let [highlightsAmount, setHighlightsAmount] = useState<HighlightData>({} as HighlightData);
    
    let collectionKey = '@gofinancesapp:transactions';

    function getLastTransactionDate(
        transaction: DataListProps[],
        type: 'down' | 'up'
    ){
        let transactionFilter= Math.max.apply(Math, transaction
        .filter(income => income.type === type)
        .map(income => new Date(income.date).getTime()));

        return Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).format( new Date(transactionFilter));
    };

    async function loadList(){
        let response =  await AsyncStorage.getItem(collectionKey);
        let listCheck = response ? JSON.parse(response) : [];

        let incomeTransactions = 0;
        let outcomeTransactions = 0;

        let listPersist: DataListProps[] = listCheck.map((item: DataListProps) => {
            
            if(item.type === 'down'){
                incomeTransactions += Number(item.amount);
            } else {
                outcomeTransactions += Number(item.amount);
            }

            let amount = Number(item.amount).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });

            let date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format( new Date(item.date));

            return {
                id: item.id,
                name: item.name,
                amount,
                type: item.type,
                category: item.category,
                date,

            }
        });
        
        let lastIncome = '';
        if(incomeTransactions != 0){
            lastIncome = getLastTransactionDate(listCheck, 'down');
        };
        let lastOutcome = '';
        if(outcomeTransactions != 0){
            lastOutcome = getLastTransactionDate(listCheck, 'up');
        };
        let totalDay = new Date().getDate();
        let totalMonth = new Date();


        let totalTransactions = incomeTransactions-outcomeTransactions;
        
        setDataList(listPersist);
        setHighlightsAmount({
            income: {
                amount: incomeTransactions.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransaction: lastIncome
            },
            outcome: {
                amount: outcomeTransactions.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransaction: lastOutcome
            },
            total:{
                amount: totalTransactions.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }),
                lastTransaction: `Período de 1 à ${totalDay} de ${totalMonth.toLocaleString('pt-BR', { month: 'long'})}`
            }
        });

        setLoading(false);

    };

    function removeAll(){
        AsyncStorage.removeItem(collectionKey);
        loadList();
    };

    useFocusEffect(useCallback(() => {
        loadList();
    }, []));

    return (
        <Container>
            
            {

            loading ? 
                
                <LoadingContainer>
                    <ActivityIndicator color={theme.colors.primary}/>
                </LoadingContainer>

            :

            <>
                <Header>
                
                    <UserWrapper>

                        <UserInfo>
                            <Photo source={{ uri: 'https://avatars.githubusercontent.com/nicolassrs797'}}/>
                            <User>
                                <UserGreeting>Olá, </UserGreeting>
                                <UserName>Nícolas Silva</UserName>
                            </User>
                        </UserInfo>

                        <IconWrapper onPress={() => {removeAll()}}>
                            <Icon name="power"/>
                        </IconWrapper>

                    </UserWrapper>

                </Header>

                <HighlightCards>

                    <HighLightCard
                        title="Entradas"
                        amount={highlightsAmount.income.amount}
                        lastTransaction={"Última Entrada " + highlightsAmount.income.lastTransaction}
                        type="down"
                    />

                    <HighLightCard
                        title="Saídas"
                        amount={highlightsAmount.outcome.amount}
                        lastTransaction={"Última Saída " + highlightsAmount.outcome.lastTransaction}
                        type="up"
                    />

                    <HighLightCard
                        title="Total"
                        amount={highlightsAmount.total.amount}
                        lastTransaction={highlightsAmount.total.lastTransaction}
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
            </> }

        </Container>
    );
};