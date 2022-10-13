import css from './Auth.module.css';
import base from './../Base.module.css';
import './../Package.css';
import React, { useState } from 'react';
import { Input, InputCheck } from '../Elements/Elements';

// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

function Auth() {
    const [loginSection, changeSection] = useState(true);
    return (
        <>
            {loginSection && <Login doSection={changeSection}></Login>}
            {!loginSection && <Register doSection={changeSection}></Register>}
        </>
    );
}

function Login(props) {
    return (
        <div className={`${base.container} ${css.box}`}>
            <div className={`${css.section} ${css.atright}`}>
                
            </div>
            <div className={`${css.section} ${css.login}`}>
                <div className={`${base.logo} ${base.s28}`}>Connect</div>
                <div className={base.para}>Sign in to your Account to continue.</div>
                <form className={css.form}>
                    <Input
                        label="Username or email"
                        type="text"
                        icon="far fa-fw fa-user"
                    />
                    <Input
                        label="Password"
                        type="password"
                        icon="far fa-fw fa-key"
                    />
                    <InputCheck
                        label="Show password"
                        keep="left"
                        type="checkbox"
                    />
                    <div className="justify-center">
                        <button type="submit" className={`${base.button} ${css.button}`}>Sign in</button>
                    </div>
                    <p>Don't have an account? <span className={base.link} onClick={() => {props.doSection(false)}}>Create one</span></p>
                </form>
            </div>
        </div>
    );
}
function Register(props) {
    // const handleUsers = (event) => {
    //     const val = event.target.value;
    //     userinput.current.removeAttribute('error');
    //     userinput.current.removeAttribute('finish');
    //     if (val.length < 5) {
    //         userinput.current.setAttribute('error', '');
    //         userinput.current.setAttribute('throw', 'Username must contain 5 characters');
    //     }
    // };
    return (
        <div className={`${base.container} ${css.box} scrollable`}>
            <div className={`${css.section} ${css.register}`}>
                <div className={`${base.logo} ${base.s28}`}>Connect</div>
                <div className={base.para}>Create an Account to continue.</div>
                <form className={css.form}>
                    <div className="flex-row-break">
                        <Input
                            label="First name"
                            type="text"
                            className={css.inline}
                        />
                        <Input
                            label="Last name"
                            type="text"
                            className={css.inline}
                        />
                    </div>
                        <Input
                            label="Create username"
                            type="text"
                            icon="far fa-user"
                            info={<span>Usernames are unique to each user.<br />Contain only letters, numbers, - and _.<br />Start with letter and end with letter or number.<br />Length should be between 5 - 15 characters.</span>}
                        />
                        <div className="flex-row-break">
                            <Input
                                label="Create password"
                                type="password"
                                className={css.inline}
                            />
                            <Input
                                label="Confirm password"
                                type="password"
                                className={css.inline}
                            />
                        </div>
                        <InputCheck
                            label="Show password"
                            keep="left"
                            type="checkbox"
                        />
                    <div className="justify-center">
                        <button type="submit" className={`${base.button} ${css.button}`}>Sign in</button>
                    </div>
                    <p>Already have an account? <span className={base.link} onClick={() => {props.doSection(true)}}>Login instead</span></p>
                </form>
            </div>
            <div className={`${css.section} ${css.atleft}`}>
                
            </div>
        </div>
    );
}

export default Auth;
