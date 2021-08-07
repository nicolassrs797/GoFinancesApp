import React from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import {
    Container,
    Header,
    Title,
    FormWrapper,
    CategorySelect,
} from './styles';

export function Register() {
    return (
        <Container>

            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>

            <FormWrapper>

                <Input placeholder="Nome"/>

                <Input placeholder="Preço"/>

                <CategorySelect/>

                <Button title="Enviar"/>

            </FormWrapper>

        </Container>
    );
};