import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Chatbox.module.css'
import Head from 'next/head'

export default function Chatbox() {
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.chatbox}>Messagerie</p>
                <div className={styles.blue}>
                    <p>CHATBOX</p>
                </div>
            </div>
        </Layout>
    </>)
}