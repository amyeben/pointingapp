import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Alert.module.css'
import Head from 'next/head'
import axios from "axios";
import {useEffect, useState} from "react";
import {userService} from "../../services";

export default function Alert() {

    const [user, setUser] = useState('');
    const [adContent, setAdContent] = useState('');
    const [isButtonAd, setButtonAd] = useState(true);


    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;

    var nameuser = user.name

    var name = {
        "name" : nameuser
    }

    const loadDataAd  = (e) => {
        setButtonAd(false);

        const handleSuccess = (res) => { // if success
            console.log(res.data);
            console.log(res.data.length);
            var ligneHtml = "";
            //setAdContent("Écrit le " + res.data['date_ad'] + " : " + res.data['message'])
            for (let i = 0; i < res.data.length; i++) {
                console.log(res.data[i])
                ligneHtml += "<tr><td>"+res.data[i]['date_ad']+"</td><td>"+res.data[i]['message']+"</td></tr>"
            }

            setAdContent(ligneHtml);
        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        axios.post(`http://localhost:8000/get_all_advertissements`, name)
            .then(handleSuccess)
            .catch(handleFailure)

    }


    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.alert}>Avertissments</p>
                <div className={styles.blue}>
                    <button className={isButtonAd ? styles.loadbutton : styles.hidden} onClick={loadDataAd}>CHARGER</button>
                    <table className={isButtonAd ? styles.hidden : styles.white}>
                        <thead className={styles.tbody}>
                        <tr>
                            <th>Date de vacances</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody className={styles.tbody} dangerouslySetInnerHTML={{__html: adContent}}/>
                    </table>                </div>
                <p className={"cas"}>Vos avertissements se trouvent ci-contre. Pour toutes autres informations referrez-vous au Pôle RH ou à votre responsable.</p>
            </div>
        </Layout>
        <style jsx>
            {`.cas {
                text-align: center;
                font-size: 12px;
                color: darkred;
                font-weight: 150;
                text-shadow: black 0.05em 0.05em 0.05em;
                padding-bottom: 20px;
                
}`}
        </style>
    </>)
}