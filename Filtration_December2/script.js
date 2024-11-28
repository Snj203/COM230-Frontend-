const { useState, useEffect } = React;
const rootElement = document.getElementById('root');

function App() {
  const [data, setData] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [isListVisible, setIsListVisible] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((response) => response.json())
      .then((fetchedData) => {
        const formattedData = fetchedData.map((user) => ({
          id: user.id,
          name: user.name,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  const filterData = (term) => {
    return data.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
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