import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <div className={styles.container}>
      <h1>Hello {t('hellotext')}</h1>  
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  // const fetchRepo = await axios.get('https://api.github.com/users/react')
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      // repos: fetchRepo
    },
  }
}