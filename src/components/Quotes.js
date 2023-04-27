import { useState, useEffect } from 'react';

function Quotes() {
  // Initialize state for quotes
  const [quotes, setQuotes] = useState([]);
  // Initialize state for loading status
  const [isLoading, setIsLoading] = useState(true);
  // Initialize state for error status
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'success';
    const fetchData = async () => {
      try {
        // Set loading state to true while fetching data
        setIsLoading(true);
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': '4ClfOE/97HHOf/lDFSpIJA==JqOaqEP6vNaKD1HF',
          },
        });
        const data = await res.json();
        // Update quotes state with fetched data
        setQuotes(data);
      } catch (error) {
        // Set error state if fetch fails
        setError(error);
      } finally {
        // Set loading state to false once fetch completes (with or without errors)
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Show loading state while data is being fetched
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // Show error state if fetch fails
  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  // Show each quote returned by the API in a div with class "quotes"
  return (
    <ul>
      {quotes.map((quote) => (
        <div key={quote.id} className="quotes">
          <p>
            {quote.quote}
            <br />
            -
            {quote.author}
          </p>
        </div>
      ))}
    </ul>
  );
}

export default Quotes;
