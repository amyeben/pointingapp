import styles from './layout.module.css'
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { FiMessageCircle } from '@react-icons/all-files/fi/FiMessageCircle';
import axios from 'axios'
import {Nav} from "./Nav";
import {userService} from "../services";
import { useState, useEffect } from 'react';
import {NavLink} from "./NavLink";
import Popup from 'reactjs-popup';


export default function Layout({ children }) {
    let date = new Date();
    let datedujour = ("0" + (date.getDate())).slice(-2)+'/'+("0" + (date.getMonth()+1)).slice(-2)+'/'+date.getFullYear();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;

    var nomduti = user.name + ', ';
    var name = user.name;
    var familyName = user.family_name;

    return (

        <div className={styles.container}>
            <Head>
                <title>Bienvenue sur le site de pointage !</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
        <div className={styles.wrapper}>
            <nav className={styles.navblue}>
                <div className={styles.logo}><NavLink href="/"><Image
                    src="/img/groupeoctopuslogo.jpg" // Route of the image file
                    height={70} // Desired size with correct aspect ratio
                    width={70} // Desired size with correct aspect ratio
                    alt="Groupe Octopus"
                /></NavLink>
                </div>
                <div className={styles.account}>
                    <div>
                        <Image
                            src="/img/pp.png" // Route of the image file
                            height={50} // Desired size with correct aspect ratio
                            width={50} // Desired size with correct aspect ratio
                            alt="Profile Photo"
                            className={styles.pp}
                        />
                    </div>
                    <div className={styles.accountname}>
                        <p> {name} {familyName} </p>
                    </div>
                </div>
                <div className={styles.navlink}>
                    <ul>
                        <NavLink href={"/"}><li>Accueil</li></NavLink><br/>
                        <NavLink href={"/posts/pointingpage"}><li>Pointage Horaire</li></NavLink><br/>
                        <NavLink href={"/posts/myarrivals"}><li>Mes Arrivées</li></NavLink><br/>
                        <NavLink href={"/posts/myresum"}><li>Mon Résumé</li></NavLink><br/>
                        <NavLink href={"/posts/alert"}><li>Avertissements</li></NavLink><br/>
                        <NavLink href={"/posts/chatbox"}><li>Messagerie</li></NavLink><br/>

                    </ul>
                </div>
                <div className={styles.footnav}>
                    <hr className={styles.hr}/><br />

                    <Popup
                        trigger={<button> <i className="fa fa-gear"></i> Paramètre </button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="header"> <p> PARAMETRE </p></div>
                                <div className="content">
                                    {' '}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                    Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                    delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                    Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?</p>
                                    <br />
                                </div>
                            </div>
                        )}
                    </Popup>
                    <button onClick={logout}> <i className="fa fa-sign-out"></i> Déconnexion </button>
                </div>
            </nav>
            <div className={styles.column}>
                <nav className={styles.navwhite}>
                    <p> Bienvenue {nomduti} nous sommes le {datedujour}</p>
                    <FiMessageCircle className={styles.message}/>

                </nav>
                <div className={styles.children}>{children}</div>
            </div>
        </div>
            <style jsx>
                {`.modal {
  font-size: 12px;
  background: white;
  padding: 30px;
  border-radius: 30px;
  margin-left: 600px;
  margin-right: 600px;
  box-shadow: 1px 1px 12px #555;
  font-family: 'Be Vietnam Pro';
  font-weight: 150;
}

.modal > .header {
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
}
.modal > .content {
  padding: 10px 5px;
}
.modal > .actions {
  padding: 10px 5px;
  margin: auto;
  text-align: center;
}
.modal > .close {
  cursor: pointer;
  position: absolute;
  display: block;
  line-height: 20px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
  padding-bottom: 4px;
}

`}
            </style>
    </div>)


}
