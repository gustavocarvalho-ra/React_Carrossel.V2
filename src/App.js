import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
    .then((response)=> response.json())
    .then(setData);
  }, [])

  const handleLeftClick = (e) => {
    
  }

  const handleRightClick = (e) => {

  }
  
  
  if(!data || !data.length) return null;

  return (
    <div className='container'>

      <div className='logo'>
        <img src='/static/images/super-shoes.png' alt='Super Shoes Logo'/>
      </div>

      <div className='carrosel'>
        {data.map((item) => {
          const {id, name, price, oldPrice, image} = item
          return (
            <div className='item' key={id}>
              <div className='image'>
                <img src={image} alt='{name}'/>
              </div>

              <div className='info'>
                <span className='name'>{name}</span>
                <span className='oldPrice'>{oldPrice}</span>
                <span className='price'>{price}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className='buttons'>
        <button onClick={handleLeftClick}><img src='/static/images/216151_right_chevron_icon.png' alt='Scroll Left'/></button>
        <button onClick={handleRightClick}><img src='/static/images/216151_right_chevron_icon.png' alt='Scroll Right'/></button>
      </div>
    </div>
  );
}

export default App;
