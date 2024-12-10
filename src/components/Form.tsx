import React, { useState } from 'react';

const Form: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [submitted, setSubmitted] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
      {submitted && <p>Submitted: {submitted}</p>}
    </form>
  );
};

export default Form;
