/*
 * @license
 * Copyright 2024-2025 Materia Technologies, Inc.
 *
 * SPDX-License-Identifier: SEE LICENSE IN License.md
 *
 */


import * as React from 'react';
import {  ReactNode } from 'react'

export interface NativeButtonProps {
    children?: ReactNode;
    clicked?: () => void;
}

const noOp = () => { };

const defaultNativeButtonProps: NativeButtonProps = {
    clicked: noOp,
};

export function NativeButton(props: NativeButtonProps) {

    const derivedProps: NativeButtonProps = { ...defaultNativeButtonProps, ...props };

    return (
        <span>
            <input
                onClick={event => derivedProps.clicked()} 
                type="button"
            >
            </input>
            {derivedProps.children}
        </span>
    );
}
