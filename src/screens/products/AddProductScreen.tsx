import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../components/Header';
import { CTButton } from '../../components/CTButton';
import { useNavigation } from '@react-navigation/native';
import { AddProductScreenNavigationProp, Product } from '../../types/types';
import { CTInput } from '../../components/CTInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addProduct } from '@/src/store/productSlice';
import { globalStyles } from '@/src/styles/globalStyles';

const validationSchema = Yup.object().shape({
  title: Yup.string().trim().min(3, 'Назва товару має бути не менша 3 символів').required('Введіть назву товару'),
  description: Yup.string().trim().min(10, 'Опис має бути не менший 10 символів').required('Введіть опис товару'),
  price: Yup.number().min(1, 'Ціна повинна бути більша 0').required('Введіть ціну товару'),
});

export const AddProductScreen = () => {
  const navigation = useNavigation<AddProductScreenNavigationProp>();
  const dispatch = useDispatch();

  const saveProduct = async (product: { title: string; description: string; price: string; id?: number }) => {
    const existingProducts = await AsyncStorage.getItem('productsList');
    const products = existingProducts ? JSON.parse(existingProducts) : [];
    const price = parseFloat(product.price);
    const newProduct: Product = {
      ...product,
      price,
      id: product.id ?? products.length + 1,
    };

    products.push(newProduct);
    dispatch(addProduct(newProduct));
    await AsyncStorage.setItem('productsList', JSON.stringify(products));
    navigation.goBack();
  };

  return (
    <View style={globalStyles.flex1}>
      <Header isBackArrow={true} navigation={navigation} title='Додати товар' />
      <Formik
        initialValues={{ title: '', description: '', price: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          saveProduct(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={globalStyles.formContainer}>
            <CTInput
              label='Назва товару'
              value={values.title}
              onChange={handleChange('title')}
              onBlur={handleBlur('title')}
              placeholder='Cotton Jacket'
              error={errors.title}
            />
            <CTInput
              label='Опис товару'
              value={values.description}
              onChange={handleChange('description')}
              onBlur={handleBlur('description')}
              placeholder='Опис'
              error={errors.description}
              propStyles={{ height: 100 }}
            />
            <View style={globalStyles.priceContainer}>
              <CTInput
                label='Ціна товару'
                value={values.price}
                onChange={handleChange('price')}
                onBlur={handleBlur('price')}
                placeholder='1000'
                error={errors.price}
                type='numeric'
              />
              <Icon name='dollar' size={28} color={colors.textSecondary} />
            </View>
            <CTButton text='Додати товар' onClick={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};
