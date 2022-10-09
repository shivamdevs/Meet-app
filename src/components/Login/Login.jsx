import css from './Login.module.css';
import base from './../Base.module.css';
import React from 'react';
import { Input } from '../Elements/Elements';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Login() {
    return (
        <div className={`${base.container} ${css.box}`}>
            <div className={css.intro}>
                
            </div>
            <div className={css.login}>
                <Tippy content="Google Meet">
                    <div className={`${base.logo} ${base.s28}`}>Meet</div>
                </Tippy>
                <p className={base.para}>Sign in to your Account to continue.</p>
                <form className={css.form}>
                    <Input
                        label="Username or Email"
                        type="text"
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
