import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Alert.module.css'
import Head from 'next/head'

export default function Alert() {
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.alert}>Avertissments</p>
                <div className={styles.blue}>
                    <p>Aucun Avertissement</p>
                </div>
            </div>
        </Layout>
    </>)
}