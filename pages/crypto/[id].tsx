import { GetStaticPaths, GetStaticProps } from 'next';
import { axiosInstance } from '../../api/config';
import { ICrypto } from '../../types/ICrypto';
import React from 'react';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

interface ICryptoTypeInfo {
  crypto: ICrypto;
}

const CryptoTypeInfo: React.FC<ICryptoTypeInfo> = ({
  crypto,
}: ICryptoTypeInfo) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <div>
      <p>{crypto.name}</p>
      <p>Id: {crypto.id}</p>
    </div>
  );
};

export default CryptoTypeInfo;

export const getStaticPaths: GetStaticPaths = async () => {
  const response: AxiosResponse = await axiosInstance.get(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  );
  const data: ICrypto[] = response.data.data;

  const paths = data?.map((crypto: ICrypto) => ({
    params: { id: crypto.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const {
    data: { data },
  } = await axiosInstance.get(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  );
  const id = params?.id;
  return {
    props: {
      crypto: data.filter((item: ICrypto) => {
        return item.id.toString() === id;
      })[0],
    },
  };
};
