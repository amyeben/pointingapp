import styles from "../styles/Pointingpage.module.css";
import {useState} from "react";
import axios from "axios";

export default function DeparturetimeComponent() {
    let date = new Date();
    let heure = ("0" + (date.getHours())).slice(-2);
    let minutes = ("0" + (date.getMinutes())).slice(-2);
    var time = heure + " : " + minutes ;
    var data = {
        "data" : time
    };

    const [commentDeparture, setCommentDeparture] = useState('') ;

    var comment = {
        "comment" : commentDeparture
    };


    const departureTime = (e) => {
        e.preventDefault();

        const handleSuccessData = (res) => { // if success
            date.setMinutes(date.getMinutes() + 5);
            heure = ("0" + (date.getHours())).slice(-2);
            minutes = ("0" + (date.getMinutes())).slice(-2);
            time = heure + ":" + minutes + ":00";
            console.log(res.data);
            console.log(time);
        }

        const handleSuccessComment = (res) => { // if success
            console.log(res.data);
        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        axios.post(`http://localhost:8000/hd`, data)
            .then(handleSuccessData)
            .catch(handleFailure)

        axios.post(`http://localhost:8000/hd/comment`, comment)
            .then(handleSuccessComment)
            .catch(handleFailure)

    }
    return(<>
        <form className={styles.formdep} onSubmit={departureTime}>
            <div className={styles.blanc}>
                <label>{heure} : {minutes}</label><br/><br/>
                <input value={commentDeparture} type={"text"} placeholder={"Commentaires..."} size={(90)} className={styles.input} onChange={(e) => setCommentDeparture(e.target.value) }/><br/>
            </div>
            <input name={"ptndepart"} type={"submit"} value={"Pointer mon départ"} className={styles.ptnarr}/>

        </form>
    </>)
}