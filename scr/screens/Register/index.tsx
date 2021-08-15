import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

    let {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleSelectType(type: 'up' | 'down'){
        setSelectedType(type);
    };

    function handleToggleModal(){
        setModalVisible(!modalVisible);
    };

    function handleRegister(form: FormData) {
        if(!selectedType){
            return Alert.alert('Selecione O Tipo Da Transação!');
        };
        if(selectedCategory.key === 'category'){
            return Alert.alert('Selecione Uma Categoria!');
        };

        let data = {
            name: form.name,
            amount: form.amount,
            selectedType,
            category: selectedCategory.key
        };
        console.log(data);
    };

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