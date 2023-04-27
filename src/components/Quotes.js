import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const category = 'success';
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': '4ClfOE/97HHOf/lDFSpIJA==JqOaqEP6vNaKD1HF',
          },
        });
        const data = await res.json();
        setQuotes(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

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
