const { useState } = React;
const rootElement = document.getElementById('root');

function App() {
  const initialData = [
    { id: 1, name: 'AAA' },
    { id: 2, name: 'BBB' },
    { id: 3, name: 'CCC' },
    { id: 4, name: 'DDD' },
    { id: 5, name: 'EEE' },
    { id: 6, name: 'FFF' },
    { id: 7, name: 'GGG' },
    { id: 8, name: 'HHH' },
    { id: 9, name: 'III' },
    { id: 10, name: 'JJJ' },
  ];

  const [data, setData] = useState(initialData); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isListVisible, setIsListVisible] = useState(true); 

  const filterData = (term) => {
    return data.filter((item) => item.name.includes(term));
  };

  const addItem = () => {
    const inputValue = document.getElementById('inputValue').value.trim();
    if (inputValue && !data.some((item) => item.name === inputValue)) {
      setData([...data, { id: data.length + 1, name: inputValue }]);
      document.getElementById('inputValue').value = '';
    }
  };

  const toggleVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <label htmlFor="inputValue">Input data here:</label>
      <input type="text" id="inputValue" placeholder="Data..." />
      <button onClick={addItem}>Add</button>

      <label htmlFor="searchInput">Search:</label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search text..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={toggleVisibility}>
        {isListVisible ? 'Hide' : 'Show'}
      </button>

      <ul>
        {isListVisible &&
          (filterData(searchTerm).length === 0 ? (
            <li>Nothing Found</li>
          ) : (
            filterData(searchTerm).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))
          ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(rootElement).render(<App />);