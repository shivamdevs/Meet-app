import css from './Elements.module.css';
// import base from './../Base.module.css';
import React from 'react';

function Input(props) {
    return (
        <div className={css.group}>
            <div className={css.area}>
                {props.label && <label className={css.label}>{props.label}</label>}
                <input type="text" className={css.input} />
            </div>
        </div>
    );
}

export {Input};
