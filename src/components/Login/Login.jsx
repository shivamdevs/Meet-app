import css from './Login.module.css';
import base from './../Base.module.css';
import React from 'react';
import { Input, InputCheck } from '../Elements/Elements';

// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

function Login() {
    return (
        <div className={`${base.container} ${css.box}`}>
            <div className={css.intro}>
                
            </div>
            <div className={css.login}>
                <div className={`${base.logo} ${base.s28}`}>Meet</div>
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
                        keep="right"
                        type="checkbox"
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
