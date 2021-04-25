import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { Header } from '@/components/layout/Header';
import { NAVBAR_LINKS } from '../constants/nabarLinks';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header
          headerText="Binance.RUS"
          links={NAVBAR_LINKS}
          icon="monetization_on"
        />
      </main>
    </div>
  );
}
