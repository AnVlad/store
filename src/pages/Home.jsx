import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
    };
  });

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            onClick={(e) => console.log(e)}
            items={['Meat', 'Vegetarian', 'Grill', 'Острые', 'Spicy']}
          />
          <SortPopup
            items={[
              { name: 'by popular', type: 'popular' },
              { name: 'by price', type: 'price' },
              { name: 'by alphabet', type: 'alphabet' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
