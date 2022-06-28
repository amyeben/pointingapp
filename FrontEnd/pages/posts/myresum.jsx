import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Myresum.module.css'
import Head from 'next/head'

export default function Myresum() {
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.myresum}>Mon Résumé</p>
                <div className={styles.blue}>
                    <p>EXEMPLE DE GRAPHIQUE EN PYTHON</p>
                </div>
            </div>
        </Layout>
    </>)
}