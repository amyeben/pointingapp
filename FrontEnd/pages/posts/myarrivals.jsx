import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Myarrivals.module.css'
import Head from 'next/head'
import {userService} from "../../services";
import {useEffect, useState} from "react";
import axios from "axios";


export default function Myarrivals() {

    const [user, setUser] = useState('');

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();

        }, []);

    function logout() {
        userService.logout();
    }

    var nameuser = user.name;

    var name = {
        "name" : nameuser
    }

    const handleSuccess = (res) => { // if success
        console.log(res.data);
    }

    const handleFailure = (error) => {
        console.log("ERROR");
    }

    //const load = (e) => {}




    // only show nav when logged in
    if (!user) return null;
    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.myarrivals}>Mes Arrivées</p>
                <div className={styles.blue}>
                    <button>CHARGER</button>
                </div>
            </div>
        </Layout>
    </>)
}