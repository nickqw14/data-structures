import typescript from 'rollup-plugin-typescript2'
import ttypescript from 'ttypescript'

export default {
    input: 'index.ts',
    output: [
        {
            file: 'dist/index.es.js',
            format: 'esm',
        },
        {
            file: 'dist/index_cjs.js',
            format: 'cjs',
        },
    ],
    plugins: [
        typescript({
            typescript: ttypescript,
        }),
    ],
}
