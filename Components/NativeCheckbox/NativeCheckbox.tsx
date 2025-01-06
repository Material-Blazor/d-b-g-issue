/*
 * @license
 * Copyright 2024-2025 Materia Technologies, Inc.
 *
 * SPDX-License-Identifier: SEE LICENSE IN License.md
 *
 */


import * as React from 'react';
import {  ReactNode } from 'react'

export interface NativeCheckboxProps {
    children?: ReactNode;
    value?: boolean;
    valueChanged?: (value: boolean) => void;
}

const noOp = () => { };

const defaultNativeCheckboxProps: NativeCheckboxProps = {
    value: false,
    valueChanged: noOp,
};

export function NativeCheckbox(props: NativeCheckboxProps) {

    const derivedProps: NativeCheckboxProps = { ...defaultNativeCheckboxProps, ...props };

    return (
        <span>
            <input
                onChange={event => derivedProps.valueChanged(event.target.checked)} 
                type="checkbox"
                checked={derivedProps.value}
            >
            </input>
            {derivedProps.children}
        </span>
    );
}
