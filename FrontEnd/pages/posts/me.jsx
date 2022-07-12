import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Chatbox.module.css'
import Head from 'next/head'

export default function Me() {
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.chatbox}>Mon Profil</p>
                <div className={styles.blue}>
                    <p>Mon Profil</p>
                </div>
            </div>
        </Layout>
    </>)
}