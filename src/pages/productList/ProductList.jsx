import data from '../../data';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Container } from 'components/common.styled';
import { ProductItem, ListContainer, SortWrap } from './productList.styled';
import { useState } from 'react';

const ProductList = () => {
  const [platform, setPlatform] = useState();
  const [sort, setSort] = useState();

  const changePlatform = platform => {
    setPlatform(platform);
  };
  const changeSort = sort => {
    setSort(sort);
  };

  const filteredList = data.filter(item => {
    if (platform) {
      return item.category === platform;
    }
    return data;
  });

  const sortList = filteredList.sort(function (a, b) {
    let sorted;
    if (sort === 'all') {
      sorted = filteredList;
    }
    if (sort === 'min') {
      sorted = a.price > b.price ? 1 : -1;
    }
    if (sort === 'max') {
      sorted = a.price < b.price ? 1 : -1;
    }
    if (sort === 'pop') {
      sorted = a.popularity < b.popularity ? 1 : -1;
    }
    return sorted;
  });

  return (
    <Container>
      <SortWrap>
        <form>
          <select
            name="platform"
            onChange={event => changePlatform(event.target.value)}
            value={platform}
            defaultValue={''}
          >
            <option value="">Категория</option>
            <option value="PS">PS</option>
            <option value="XBOX">XBOX</option>
          </select>
        </form>
        <form>
          <select
            name="sort"
            onChange={event => changeSort(event.target.value)}
            value={sort}
            defaultValue={'all'}
          >
            <option value="all">Сортировка</option>
            <option value="min">От дешевых</option>
            <option value="max">От дорогих</option>
            <option value="pop">По популярности</option>
          </select>
        </form>
      </SortWrap>
      <ListContainer>
        <ProductItem>
          {sortList.map(item => (
            <li key={item.id}>
              <ProductCard item={item} />
            </li>
          ))}
        </ProductItem>
      </ListContainer>
    </Container>
  );
};
export default ProductList;
