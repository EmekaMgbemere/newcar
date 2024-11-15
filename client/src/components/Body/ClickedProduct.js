import React, { useContext} from 'react';
import { useParams } from 'react-router-dom';
import { MockData } from '../../components/Body/Apipage';
import Nav from '../Nav/Nav';

export default function ClickedProduct() {

    const { id } = useParams();

    const mockapi = useContext(MockData);
        
    const item = mockapi.find(item => item.id === parseInt(id, 10));

    if (!item) {
      return <div>Product not found</div>;
  }

  return (
    <div>
      <div className=''>
        <Nav />
            <div className=''>
              <p>HOW MANY: {mockapi.length}</p>
              <p>This ID {id}</p>
              <p className='text-danger'><img src={item.avatar} alt='avatar' /></p>
              <div className='text-danger'>{item.first_name}</div>
              <div className='text-success'>{item.last_name}</div>
            </div>
          </div>
      </div>
)
}


