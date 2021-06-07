import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const initialValues = defaults;

  function updateValues(e) {
    const { value } = e.target;

    setValues({
      ...values,
      [e.target.name]: value,
    });
  }
  async function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const body = {
      title: values.title,
      email: values.email,
      description: values.description,
    };
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/submitForm`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );
    const text = JSON.parse(await res.text());
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setMessage('');
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Success!');
      setValues(initialValues);
    }
  }
  return { values, updateValues, submitOrder, error, message, loading };
}
