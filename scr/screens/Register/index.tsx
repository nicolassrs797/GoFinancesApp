import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Alert,
    Keyboard,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { CategorySelector } from '../../components/Form/CategorySelector';
import { Button } from '../../components/Form/Button';
import { TypeSelector } from '../../components/Form/TypeSelector';
import {
    Container,
    Header,
    Title,
    FormWrapper,
    TypeSelectorWrapper,
} from './styles';
import { CategorySelect } from '../CategorySelect';
import { InputControlled } from '../../components/Form/InputControlled';

interface FormData {
    name: string;
    amount: string;
}

type NavigationProps = {
    navigate: (screen: string) => void;
}

let schema = Yup.object().shape({
    name: Yup.string().required('Informe Um Nome!'),
    amount: Yup.number()
    .typeError('Apenas Valores Numéricos São Aceitos!')
    .positive('O Valor Não Pode Ser Negativo!')
    .required('Informe Um Valor!')
});

export function Register() {

    let [selectedCategory, setSelectedCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    let [selectedType, setSelectedType] = useState('');

    let [modalVisible, setModalVisible] = useState(false);

    let collectionKey = '@gofinancesapp:transactions';

    let {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    let navigation = useNavigation<NavigationProps>();

    function handleSelectType(type: 'up' | 'down'){
        setSelectedType(type);
    };

    function handleToggleModal(){
        setModalVisible(!modalVisible);
    };

    async function handleRegister(form: FormData) {
        if(!selectedType){
            return Alert.alert('Selecione O Tipo Da Transação!');
        };
        if(selectedCategory.key === 'category'){
            return Alert.alert('Selecione Uma Categoria!');
        };

        let data = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type: selectedType,
            category: selectedCategory.key,
            date: new Date()
        };
        
        try {

            let temp = await AsyncStorage.getItem(collectionKey);
            let dataCheck = temp ? JSON.parse(temp) : [];
            let dataPersist = [
                ...dataCheck,
                data
            ];

            await AsyncStorage.setItem(collectionKey, JSON.stringify(dataPersist));

            reset();
            setSelectedType('');
            setSelectedCategory({
                key: 'category',
                name: 'Categoria'
            });

            navigation.navigate('Início');

        } catch (error) {
            console.log(error);
            Alert.alert("Não Foi Possível Salvar As Informações!");
        };
    };

    useEffect(() => {
        async function loadData(){
          await AsyncStorage.getItem(collectionKey);
        };
        loadData();

    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}    
        >
            <Container>
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <FormWrapper>

                    <InputControlled
                        placeholder="Nome"
                        name="name"
                        control={control}
                        autoCapitalize="words"
                        autoCorrect={false}
                        error={errors.name && errors.name.message}
                    />

                    <InputControlled
                        placeholder="Preço"
                        keyboardType="numeric"
                        name="amount"
                        control={control}
                        error={errors.amount && errors.amount.message}
                    />

                    <TypeSelectorWrapper>

                        <TypeSelector
                            title="Entrada"
                            type="down"
                            onPress={() => handleSelectType('down')}
                            selected={selectedType === 'down'}
                        />


                        <TypeSelector
                            title="Saída"
                            type="up"
                            onPress={() => handleSelectType('up')}
                            selected={selectedType === 'up'}
                        />

                    </TypeSelectorWrapper>

                    <CategorySelector
                        title={selectedCategory.name}
                        onPress={handleToggleModal}
                    />

                    <Modal
                        visible={modalVisible}
                        statusBarTranslucent={true}
                        animationType='slide'
                    >
                        <CategorySelect
                            category={selectedCategory}
                            setCategory={setSelectedCategory}
                            closeSelectCategory={handleToggleModal}
                        />
                    </Modal>

                    <Button
                        title="Enviar"
                        onPress={handleSubmit(handleRegister)}
                    />

                </FormWrapper>

            </Container>
        </TouchableWithoutFeedback>
    );
};