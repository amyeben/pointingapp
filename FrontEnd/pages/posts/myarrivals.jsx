import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Myarrivals.module.css'
import Head from 'next/head'

export default function Myarrivals() {
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.myarrivals}>Mes Arrivées</p>
                <div className={styles.blue}>
                    <p>EXEMPLE DE TABLEAU</p>
                </div>
            </div>
        </Layout>
    </>)
}