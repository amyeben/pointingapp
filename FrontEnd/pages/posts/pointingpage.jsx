import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import styles from '../../styles/Pointingpage.module.css'
import Head from 'next/head'
import axios from 'axios'
import {useState} from "react";
import ArrivaltimeComponent from "../../components/ArrivaltimeComponent";
import DeparturetimeComponent from "../../components/DeparturetimeComponent";
import React from 'react';
import ReactDOM from "react-dom";


export default function Pointingpage() {


    return (<>
        <Layout>
            <div className={styles.container}>
                <p className={styles.pointagehoraire} >Pointage Horaire</p>
                <div className={styles.blue}>
                   <ArrivaltimeComponent/>
                    <DeparturetimeComponent/>
                    <p className={"cas"}>En cas de soucis, au niveau des saisies referrez-vous au Pôle RH ou à votre responsable.</p>
                </div>
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