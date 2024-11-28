
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

  const inputValue = document.getElementById('inputValue');
  const addButton = document.getElementById('addButton');
  const searchInput = document.getElementById('searchInput');
  const dataList = document.getElementById('dataList');
  const toggleButton = document.getElementById('toggleButton');

  let isListVisible = true;

  toggleButton.addEventListener('click', () => {
    isListVisible = !isListVisible; 
    if (isListVisible) {
      toggleButton.textContent = 'Hide'; 
      renderData(filterData(searchInput.value)); 
    } else {
      toggleButton.textContent = 'Show';
      dataList.innerHTML = ''; 
    }
  });

  function filterData(searchTerm) {
    return data.filter(item =>
      item.name.includes(searchTerm) 
    );
  }

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value; 
    renderData(filterData(searchTerm));
  });

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

  addButton.addEventListener('click', () => {
    const value = inputValue.value.trim();
    if (value && !data.some(item => item.name === value)) { 
      data.push({ name: value }); 
      inputValue.value = ''; 
    }
    renderData(data);
  });

  renderData(data);
});