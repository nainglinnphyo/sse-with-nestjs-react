import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [facts, setFacts] = useState<{ message: string }>();
  const [listening, setListening] = useState(false);

  useEffect(() => {
    // if (!listening) {
    const eventSource = new EventSource('http://localhost:3000/sse/1');
    eventSource.onmessage = (e) => {
      console.log(e)
    };
    eventSource.onerror = (err) => {
      // alert(JSON.stringify(err))
    }
    //   setListening(true);
    // }
  }, []);

  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Fact</th>
          {/* <th>Source</th> */}
        </tr>
      </thead>
      <tbody>
        {
          facts && facts.message
        }
      </tbody>
    </table>
  );
}

export default App;