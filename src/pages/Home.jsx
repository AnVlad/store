import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Острые', 'Spicy'];
const sortItems = [
  { name: 'by popular', type: 'popular' },
  { name: 'by price', type: 'price' },
  { name: 'by alphabet', type: 'name' },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const CartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    //
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({ type: 'ADD_PIZZA_CART', payload: obj });
  };

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickCategory={onSelectCategory}
            items={categoryNames}
          />
          <SortPopup activeSortType={sortBy} items={sortItems} onClickSortType={onSelectSortType} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((item) => (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  key={item.id}
                  isLoading={true}
                  addedCount={CartItems[item.id] && CartItems[item.id].items.length}
                  {...item}
                />
              ))
            : Array(3)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
