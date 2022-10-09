import css from './Elements.module.css';

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Input(props) {
    const uniqueID = uuid();

    const [focusState, setfocusState] = useState(false);
    const [inputState, setinputState] = useState(false);

    const inputFocus = () => setfocusState(true);
    const inputBlur = () => setfocusState(false);
    const inputInput = (event) => event.target.value && event.target.value.length ? " " === event.target.value ?event.target.value = "" : void setinputState(true) : setinputState(false);
    return (
        <div className={`${css.formgroup} ${focusState ? css.focus : ''} ${inputState ? css.active : ''} ${props.error ? css.error : ''} ${props.finish ? css.finish : ''}`}>
            <div className={css.inputarea}>
                {props.label && <label className={`${css.inputlabel} ${props.icon ? css.withicon : ''} ${props.info ? css.withinfo : ''}`} htmlFor={uniqueID}><span>{props.label}</span></label>}
                <div className={css.inputbox}>
                    {props.icon && <span className={css.icon}><i className={props.icon}></i></span>}
                    <input
                        type={props.type || "text"}
                        value={props.value || ""}
                        disabled={props.disabled ?? false}
                        required={props.required ?? false}
                        autoComplete={props.autoComplete || "off"}
                        name={props.name || ""}
                        id={uniqueID}
                        className={`${css.input} ${props.className || ""}`}
                        onFocus={(event) => { inputFocus(event); if (props.onFocus) props.onFocus(event); }}
                        onBlur={(event) => { inputBlur(event); if (props.onBlur) props.onBlur(event); }}
                        onInput={(event) => { inputInput(event); if (props.onInput) props.onInput(event); }}
                    />
                    {props.info && <Tippy content={props.info}><span className={css.info}><i className={props.infoIcon || 'far fa-fw fa-info-circle'}></i></span></Tippy>}
                </div>
            </div>
            <div className={css.throw}>{props.throw}</div>
        </div>
    );
}

function InputCheck(props, {children}) {
    const uniqueID = uuid();
    const [checkState, setcheckState] = useState(!!props.checked);

    const checkEvent = (event) => setcheckState(!!event.target.checked);
    return (
        <div className={`${css.formgroup} ${props.error ? css.error : ''} ${props.finish ? css.finish : ''}`}>
            <label className={`${css.checklabel} ${checkState ? css.checked : ''} ${props.keep && props.keep === "right" ? css.keepright: css.keepleft}`} htmlFor={uniqueID}>
                <input
                    type="checkbox"
                    value={props.value || ""}
                    name={props.name || ""}
                    required={props.required || false}
                    disabled={props.disabled || false}
                    checked={checkState}
                    id={uniqueID}
                    className={`${css.checkinput} ${props.className || ""}`}
                    onChange={(event) => { checkEvent(event); if (props.onChange) props.onChange(event); }}
                />
                {props.keep && props.keep !== "right" && <span className={css.checkbox}><span></span><svg width="12px" height="10px" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>}
                <span className={css.checktext}>{children || props.label}</span>
                {props.keep && props.keep === "right" && <span className={css.checkbox}><span></span><svg width="12px" height="10px" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span>}
            </label>
        </div>
    );
}

export {Input, InputCheck};
