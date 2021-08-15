import React from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from '../../components/Form/Button';
import { categories } from '../../utils/categories';
import {
    Container,
    Header,
    Title,
    CategoriesWrapper,
    CategoryItem,
    CategoryIcon,
    CategoryName,
    ButtonWrapper
} from './styles';

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
};

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props) {

    function handleSelectedCategory(selectedCategory: Category){
        setCategory(selectedCategory);
    };

    return (
        <Container>

            <Header>
                <Title>
                    Categorias
                </Title>
            </Header>

            <CategoriesWrapper>
                <FlatList
                    data={categories}
                    style={{ width: '100%'}}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => (
                        <CategoryItem
                            onPress={() => handleSelectedCategory(item)}
                            selected={category.key === item.key}
                        >
                            <CategoryIcon
                                name={item.icon}
                                size={24}
                                selected={category.key === item.key}
                                iconColor={item.color}
                            />
                            <CategoryName
                                selected={category.key === item.key}
                            >{item.name}</CategoryName>
                        </CategoryItem>
                    )}
                />
            </CategoriesWrapper>

            <ButtonWrapper>
                <Button
                    title="Selecionar"
                    onPress={closeSelectCategory}
                />
            </ButtonWrapper>

        </Container>
    );
};