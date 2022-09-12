import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import type { NextPage } from 'next';

import Head from 'next/head';

import Form from '../components/Form';
import UrlBox from '../components/UrlBox';
import { encodeUrl } from '../lib/urlExtender';
import { urlValidator } from '../lib/urlValidator';

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [encodedUrl, setEncodedUrl] = useState('');
  const [error, setError] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (urlValidator(inputValue)) {
      setError('');
      setEncodedUrl(`${window.location.origin}/${encodeUrl(inputValue)}`);
    } else {
      setError('Invalid URL.');
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(encodedUrl);
  };

  return (
    <>
      <Head>
        <title>URL Extender</title>
        <meta name="description" content="Stupid and useless URL extender" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        onCopy={handleCopy}
        error={error}
      />
      {encodedUrl && <UrlBox>{encodedUrl}</UrlBox>}
    </>
  );
};

export default Home;
