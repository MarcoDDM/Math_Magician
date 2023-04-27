import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const category = 'success';
    const fetchData = async () => {
      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: {
          'X-Api-Key': '4ClfOE/97HHOf/lDFSpIJA==JqOaqEP6vNaKD1HF',
        },
      });
      const data = await res.json();
      setQuotes(data);
    };
    fetchData();
  }, []);

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
