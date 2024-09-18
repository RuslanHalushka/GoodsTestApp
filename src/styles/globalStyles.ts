import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productsContainer: {
    flexGrow: 1,
  },
  product: {
    backgroundColor: colors.primaryWhite,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: '50%',
  },
  productImage: {
    height: 180,
    width: 160,
    resizeMode: 'center',
  },
  productTitle: {
    fontSize: 16,
    fontFamily: 'Barlow-Bold',
    marginVertical: 8,
    color: colors.textPrimary,
  },
  productPrice: {
    fontSize: 14,
    fontFamily: 'Barlow-Medium',
    color: colors.textSecondary,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  productImageRelative: {
    width: '100%',
    height: '50%',
    resizeMode: 'stretch',
  },
  aboutProductContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    gap: 8,
  },
  productTitleLarge: {
    fontSize: 24,
    fontFamily: 'Barlow-Bold',
    color: colors.textPrimary,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Barlow-Regular',
    color: colors.textPrimary,
  },
});
