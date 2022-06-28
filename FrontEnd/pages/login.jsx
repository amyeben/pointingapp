import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'

import { userService } from 'services';

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        // redirect to home if already logged in
        if (userService.userValue) {
            router.push('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // form validation rules
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {


        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);

            })
            .catch(error => {
                setError('apiError', { message: error });
            });
    }
    const useractive = userService.getAll()

    return (
        <div>
            <div className={"container"}>

                    <main className={"main"}>
                    <Image
                        src="/img/groupeoctopuslogo.jpg" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={300} // Desired size with correct aspect ratio
                        alt="Groupe Octopus"
                    />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="username" type="text" {...register('username')} className={` input form-control ${errors.username ? 'is-invalid' : ''}`} placeholder={"Nom d'utilisateur - Email"} required/>
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <input name="password" type="password" {...register('password')} className={` input form-control ${errors.password ? 'is-invalid' : ''}`} placeholder={"Mot de Passe"} required/>
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className="connexion">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Se connecter
                        </button>
                        {errors.apiError &&
                            <div className="messageerror">{errors.apiError?.message}</div>
                        }
                    </form>
                    </main>

            </div>
            <style jsx>{`
                .container {
                    padding: 0 0rem;
                    background: linear-gradient(131.1deg, #F9FAFD 8.46%, #F6F7FB 73.3%);
                
                }
                
                .main {
                    min-height: 100vh;
                    padding: 4rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                }
                
                .form-pass{
                    text-align: center;
                }
                
                .input {
                    padding: 5px;
                    text-align: center;
                    padding-bottom: 8px;
                    padding-top: 8px;
                    border: hidden;
                    margin-bottom: 8px;
                    display: inline-block;
                    background: rgba(229, 229, 229, 0.45);
                    box-shadow: inset 1px 0px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 33px;
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 29px;
                    letter-spacing: 0em;
                }
                
                .connexion {
                    margin-top: 15px;
                    background: #A8B5D3;
                    box-shadow: 1px 9px 7px rgba(0, 0, 0, 0.11);
                    border: hidden;
                    border-radius: 37px;
                    color: white;
                    font-size: 20px;
                    padding-left: 25px;
                    padding-right: 25px;
                    padding-top: 5px;
                    padding-bottom: 8px;
                    margin-bottom: 20px;
                }
                
                .connexion:hover {
                    margin-top: 15px;
                    background: #A8B5D3;
                    box-shadow: 1px 10px 7px rgba(0, 0, 0, 0.20);
                    border: hidden;
                    border-radius: 37px;
                    color: white;
                    font-size: 20px;
                    padding-left: 25px;
                    padding-right: 25px;
                    padding-top: 5px;
                    padding-bottom: 8px;
                    margin-bottom: 20px;
                
                }
                
                .messageerror{
                  background: #e3cdcd;
                  padding: 5px;
                  padding-left: 20px;
                  padding-right: 20px;
                  border-radius: 8px;
                  border: solid #690e0e 1px;
                    color: #690e0e;
                    font-size: 15px;
                }`}</style>
        </div>


    );
}
