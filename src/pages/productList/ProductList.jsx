import data from '../../data';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Container } from 'components/common.styled';
import { ProductItem, ListContainer } from './productList.styled';
import { Link } from 'react-router-dom';

const ProductList = () => {
  // const filteredList =
  return (
    <Container>
      <ListContainer>
        <ProductItem>
          {data.map(item => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <li>
                <ProductCard item={item} />
              </li>
            </Link>
          ))}
        </ProductItem>
      </ListContainer>
    </Container>
  );
};
export default ProductList;
