import './App.css';

function App() {
  return (
    <div className='container'>

      <div className='logo'>
        <img src='/static/images/super-shoes.png' alt='Super Shoes Logo'/>
      </div>

      <div className='carrosel'>
        <div className='item'>
          <div className='image'>
            <img src='https://imgcentauro-a.akamaihd.net/230x230/94313731.jpg' alt='Shoe'/>
          </div>

          <div className='info'>
            <span className='name'>Super Shoe 1</span>
            <span className='oldPrice'>U$299.00</span>
            <span className='price'>U$199.00</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
