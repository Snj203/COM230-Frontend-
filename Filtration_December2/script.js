
document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { id: 1, name: 'AAA' },
    { id: 2, name: 'BBB' },
    { id: 3, name: 'CCC' },
    { id: 4, name: 'DDD' },
    { id: 5, name: 'EEE' },
    { id: 6, name: 'FFF' },
    { id: 7, name: 'GGG' },
    { id: 8, name: 'HHH' },
    { id: 9, name: 'III' },
    { id: 10, name: 'JJJ' }
  ];

  const searchInput = document.getElementById('searchInput');
  const dataList = document.getElementById('dataList');

  function renderData(filteredData) {
    dataList.innerHTML = '';

    if (filteredData.length === 0) {
      dataList.innerHTML = '<li>Nothing Found</li>';
      return;
    }

    filteredData.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name; 
      dataList.appendChild(listItem);
    });
  }




  renderData(data);
});