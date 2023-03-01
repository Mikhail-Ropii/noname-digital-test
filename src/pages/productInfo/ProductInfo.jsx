import { useEffect, useState } from 'react';
import data from '../../data';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'components/common.styled';
import {
  CardName,
  CardPrice,
} from '../../components/productCard/productCard.styled';
import {
  CardDescription,
  ProductInfoWrap,
  ProductImg,
} from './productInfo.styled';

const ProductInfo = () => {
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const selectedProduct = data.find(
      product => product.id.toString() === id.toString()
    );
    if (selectedProduct) {
      setProductDetail(selectedProduct);
    }
  }, [id]);

  return (
    <Container>
      {productDetail && (
        <ProductInfoWrap>
          <ProductImg src={productDetail.image} width="300px" alt="game" />
          <div>
            <CardName>{productDetail.name}</CardName>
            <CardDescription>{productDetail.description}</CardDescription>
            <CardPrice>{productDetail.price} грн.</CardPrice>
            <Button>Купить</Button>
          </div>
        </ProductInfoWrap>
      )}
    </Container>
  );
};
export default ProductInfo;
