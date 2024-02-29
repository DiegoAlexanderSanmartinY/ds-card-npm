import React from 'react';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';
import renderer from 'react-test-renderer';

describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(
      <ProductImage
        img="https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-testing/pcr-test.png?_=15023"
        className="custom-class"
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
