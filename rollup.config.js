import typescript from 'rollup-plugin-typescript2'
import ttypescript from 'ttypescript'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/bundle_esm.js',
            format: 'esm',
        },
        {
            file: 'dist/bundle_cjs.js',
            format: 'cjs',
        },
    ],
    plugins: [
        typescript({
            typescript: ttypescript,
        }),
    ],
}
