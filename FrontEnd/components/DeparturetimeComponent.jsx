import styles from "../styles/Pointingpage.module.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {userService} from "../services";
import Popup from 'reactjs-popup';


export default function DeparturetimeComponent() {
    let date = new Date();
    let heure = ("0" + (date.getHours())).slice(-2);
    let minutes = ("0" + (date.getMinutes())).slice(-2);
    var time = heure + " : " + minutes ;
    var data = {
        "data" : time
    };

    const [commentDeparture, setCommentDeparture] = useState('') ;
    const [user, setUser] = useState('');
    const [departureTimePopup, setDepartureTimePopup] = useState('');
    const [commentPopup, setCommentPopup] = useState('');
    const [isComment, setIsComment] = useState(false);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;

    var comment = {
        "comment" : commentDeparture
    };

    var nameuser = user.name

    var name = {
        "name" : nameuser
    }

    const REGEXP = /^$/;

    const validate = (text) => {
        return REGEXP.test(text);
    }


    const departureTime = (e) => {
        e.preventDefault();

        const handleSuccessData = (res) => { // if success
            console.log(res.data);
        }

        const handleSuccessComment = (res) => { // if success
            console.log(res.data);
        }

        const handleFailure = (error) => {
            console.log("ERROR");
        }

        const handleSuccess = (res) => { // if success

            console.log(res.data);
            setDepartureTimePopup(res.data.departuretime)
            //alert("Vous êtes arrivée à " + res.data.departuretime)
            console.log(res.data.comment)
            const isEmpty = validate(res.data.comment)
            if (!isEmpty) {
                setCommentPopup(res.data.comment)
                setIsComment(true)
            }

        }

        function getData() { return axios.post(`http://localhost:8000/hd`, data)}
            //.then(handleSuccessData)
            //.catch(handleFailure)

        function getComment() { return axios.post(`http://localhost:8000/hd/comment`, comment)}
            //.then(handleSuccessComment)
            //.catch(handleFailure)

        function getDate() { return axios.post(`http://localhost:8000/date`)}
        //.then(handleSuccessDate)
        //.catch(handleFailure)}

        function getUserId() { return axios.post(`http://localhost:8000/user_id`, name)}
        //.then(handleSuccessUserId)
        //.catch(handleFailure)}

        Promise.all([getUserId(), getDate(), getData(), getComment()])
            .then(function (results) {
                var user_id = {
                    "user_id" : results[0].data.toString()
                } ;
                var date = {
                    "date" : results[1].data.toString()
                };
                var departuretime = {
                    "departuretime" : results[2].data.toString()
                };
                var comment = {
                    "comment" : results[3].data.toString()
                };

                axios.post(`http://localhost:8000/departure_time`, {user_id, date, departuretime, comment})
                    .then(handleSuccess)
                    .catch(handleFailure)
            });

    }
    return(<>
        <form className={styles.formdep} onSubmit={departureTime}>
            <div className={styles.blanc}>
                <label>{heure} : {minutes}</label><br/><br/>
                <input value={commentDeparture} type={"text"} placeholder={"Commentaires..."} size={(90)} className={styles.input} onChange={(e) => setCommentDeparture(e.target.value) }/><br/>
            </div>
            <Popup
                trigger={<input name={"ptndepart"} type={"submit"} value={"Pointer mon départ"} className={styles.ptnarr}/>}
                modal
                nested
            >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> <p> HEURE DE DÉPART </p></div>
                        <div className="content">
                            {' '}
                            <p><strong>{nameuser}</strong>, vous êtes parti à : <strong>{departureTimePopup}</strong>.<br/></p>
                                <p className={isComment ? styles.content : styles.hidden}>Votre commentaire : "<strong>{commentPopup}</strong>" a bien été envoyé. </p>

                        </div>
                    </div>
                )}
            </Popup>

        </form>
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
  padding-left: 100px;
  padding-right: 100px;
}
.modal > .content {
  padding: 10px 5px;
  text-align: center;
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

.hidden {
    opacity: 0;
    height: 0;
}

`}
        </style>

    </>)
}