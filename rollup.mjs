/**
 * @license
 * Copyright 2024-2025 Materia Technologies, Inc.
 */

import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import summary from "rollup-plugin-summary";

export default [
    {
        input: ".destination/ReactComponents.js",
        "output": [
            {
                "file": ".rollup/react-components.js",
                "format": "esm",
                "sourcemap": true
            }
        ],
        onwarn(warning) {
            if (warning.code !== 'THIS_IS_UNDEFINED') {
                console.error(`(!) ${warning.message}`);
            }
        },
        plugins: [
            peerDepsExternal(),
            replace({ 'Reflect.decorate': 'undefined', preventAssignment: true }),
            resolve(),
            commonjs(),
            summary
        ],
        external: ["react", "react-dom"]
    }
]
