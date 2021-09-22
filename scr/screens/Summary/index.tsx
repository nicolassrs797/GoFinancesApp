import React, { useState, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { categories } from '../../utils/categories';
import { SummaryCard } from '../../components/SummaryCard';
import { TransactionCardProps } from '../../components/TransactionCard';

import { VictoryPie } from 'victory-native';
import {
    addMonths,
    subMonths,
    format,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

import theme from '../../global/styles/theme';
import {
    Container,
    Header,
    Title,
    CategoryList,
    ChartWrapper,
    DateSelector,
    SelectorButton,
    ButtonIcon,
    SelectorDisplay,
    LoadingContainer,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

interface CategoryData {
    key: string;
    name: string;
    amount: string;
    amountNumeric: number;
    color: string;
    percent: string;
}

export function Summary() {

    let [loading, setLoading] = useState(false);
    let [categoryList, setCategoryList] = useState<CategoryData[]>([]);
    let [selectedDate, setSelectedDate] = useState(new Date());

    let collectionKey = '@gofinancesapp:transactions';

    function handleChangeMonth(action: 'next' | 'previous'){

        if( action === 'next'){
            let newSelected = addMonths(selectedDate, 1);
            setSelectedDate(newSelected);
        }else{
            let newSelected = subMonths(selectedDate, 1);
            setSelectedDate(newSelected);
        }

    };

    async function loadCats() {
        setLoading(true);
        let temp = await AsyncStorage.getItem(collectionKey);
        let dataCheck = temp ? JSON.parse(temp) : [];

        let outcomeTransactions = dataCheck
        .filter((outcomeTransactions: TransactionCardProps) => 
            outcomeTransactions.type === 'up' &&
            new Date(outcomeTransactions.date).getMonth() === selectedDate.getMonth() &&
            new Date(outcomeTransactions.date).getFullYear() === selectedDate.getFullYear()
        );

        let totalOutcome = outcomeTransactions
        .reduce((totalSum: number , outcomes: TransactionCardProps) => {
            return totalSum + Number(outcomes.amount);
        }, 0);

        let totalByCat: CategoryData[] = [];

        categories.forEach(category => {
            let categorySum = 0;

            outcomeTransactions.forEach((outcomeTransactions: TransactionCardProps) => {
                if(outcomeTransactions.category === category.key){
                    categorySum += Number(outcomeTransactions.amount);
                };
            });

            if(categorySum > 0){

                let amount = categorySum.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });

                let percent = (categorySum / totalOutcome * 100).toFixed(0) + "%"

                totalByCat.push({
                    key: category.key,
                    name: category.name,
                    amount,
                    amountNumeric: categorySum,
                    color: category.color,
                    percent
                });

            }
            setLoading(false);
        });

        setCategoryList(totalByCat);
    };

    useFocusEffect(useCallback(() => {
        loadCats();
    }, [selectedDate]));

    return (
        <Container>
            <Header>
                <Title>
                    Resumo de Gastos Mensal
                </Title>
            </Header>
            {

                loading ? 
                                
                    <LoadingContainer>
                        <ActivityIndicator color={theme.colors.primary}/>
                    </LoadingContainer>

                :

                    <CategoryList>

                        <DateSelector>

                            <SelectorButton 
                                onPress={() => handleChangeMonth('previous')}
                            >
                                <ButtonIcon name='chevron-left'/>
                            </SelectorButton>

                            <SelectorDisplay>
                                { format(selectedDate, 'MMMM, yyyy', {locale: ptBR}) }
                            </SelectorDisplay>

                            <SelectorButton
                                onPress={() => handleChangeMonth('next')}
                            >
                                <ButtonIcon name='chevron-right'/>
                            </SelectorButton>

                        </DateSelector>

                        <ChartWrapper>
                            <VictoryPie
                                data={categoryList}
                                x="percent"
                                y="amountNumeric"
                                height={RFValue(300)}
                                colorScale={categoryList.map(category => category.color)}
                                style={{
                                    labels: {
                                        fontSize: RFValue(16),
                                        fontWeight: 'bold',
                                        fill: theme.colors.shape,
                                    },
                                    data: {
                                        fillOpacity: 0.8,
                                        stroke: theme.colors.primaryDarkB,
                                    }
                                }}
                                innerRadius={RFValue(90)}
                                cornerRadius={2}
                                padAngle={1}
                            />
                        </ChartWrapper>

                        {
                            categoryList.map(item => (
                                <SummaryCard
                                    key={item.key}
                                    color={item.color}
                                    title={item.name}
                                    amount={item.amount}
                                />
                            ))
                        }
                    </CategoryList>
            }

        </Container>
    );
};