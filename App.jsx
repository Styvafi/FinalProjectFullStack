import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClothingWebsite() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/get');
    setItems(response.data);
  };

  const handleFilterChange = event => {
    const searchQuery = event.target.value;
    setFilter(searchQuery);
    
    const filtered = items.filter(item => {
      return (
        item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.size.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.price <= parseFloat(searchQuery)
      );
    });
    
    setFilteredItems(filtered);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search by color, size, category, or price" />
      {filter !== '' ? (
        filteredItems.length > 0 ? (
          <ul>
            {filteredItems.map(item => (
              <li key={item._id}>
                <div>{item.category}</div>
                <div>{item.price}</div>
                <div>{item.color}</div>
              </li>
            ))}
          </ul>
        ) : (
          <h3>There are no products that fit your search</h3>
        )
      ) : null}
    </div>
  );
}

export default ClothingWebsite;
