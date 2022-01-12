import {React, useState} from 'react'

function Categories({items, onClick}) {
  const [active, setActive] = useState(null);


  return (
    <div className="categories">
      <ul>
        <li className={active === null ? 'active' : ''}  onClick={() => setActive(null)}>All</li>
        {items &&
          items.map((item, index) => <li className={active === index ? 'active' : ''} key={`${index}_${item}`} onClick={() => setActive(index)}>{item}</li>)
        }
        

      </ul>
    </div>
  )
}

export default Categories;
