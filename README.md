# FLP-Product-Card

Este es un paquete de ejemplo de despliegue a NPM

## Felipe Mireles Cruz

# Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'flp-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }} >
{
    ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )
}
</ProductCard>
```
