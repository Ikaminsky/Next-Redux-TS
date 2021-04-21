import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>MY APP</h1>
      </main>

      <footer className={styles.footer} />
    </div>
  );
}
