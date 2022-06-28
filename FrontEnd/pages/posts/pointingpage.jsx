import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Pointingpage.module.css'
import Head from 'next/head'


export default function Pointingpage() {
    let date = new Date();
    let heure = ("0" + (date.getHours())).slice(-2);
    let minutes = ("0" + (date.getMinutes())).slice(-2);
    let time = heure + " : " + minutes
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.pointagehoraire}>Pointage Horaire</p>
                <div className={styles.blue}>
                    <form className={styles.formarr}>
                        <div className={styles.blanc}>
                            <label>{heure} : {minutes}</label><br/><br/>
                            <input name={"comment"} type={"text"} placeholder={"Commentaires..."} size={(90)} className={styles.input}/><br/>
                        </div>
                        <input name={"ptnarriver"} type={"submit"} value={"Pointer mon arrivée"} className={styles.ptnarr}/>

                    </form>
                    <form className={styles.formdep}>
                        <div className={styles.blanc}>
                            <label>{heure} : {minutes}</label><br/><br/>
                            <input name={"comment"} type={"text"} placeholder={"Commentaires..."} size={(90)} className={styles.input}/><br/>
                        </div>
                        <input name={"ptndepart"} type={"submit"} value={"Pointer mon départ"} className={styles.ptnarr}/>

                    </form>

                </div>

            </div>
        </Layout>
    </>)
}