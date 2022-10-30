import * as tscoder from 'tscoder'


const timeWas = performance.now()

console.log('Synchronous pipeline start.')

const timeRun = (): string => {
    return `${((performance.now() - timeWas)/1e3).toString().substring(0,5)}s`
}

/* Synchronous test run */
; (() => {

    console.log('========================================================')
    console.log('=====           Synchronous test start             =====')
    console.log('========================================================')
    let i=0;
    tscoder.lineParser(
        'test.csv',
        'utf-8',
        (line: string) => {
            console.log(i++, line)
        },
        (err: Error) => {
            console.log(err.message);
        },
        () => {
            console.log(i, 'lines read.');
        }
    )
    tscoder.lineTranslator(
        'test.csv',
        'output.csv',
        'utf-8',
        (line: string) => {return line},
        (err) => {
            console.log(err)
        },
        (err) => {
            console.log(err)
        },
        () => {
            console.log('File copied.')
        }
    )

    console.log('Synchronous function finished in', timeRun())
    console.log('========================================================')

})();

/* Asynchronous test run */
/*; (async () => {

    console.log('========================================================')
    console.log('=====           Asynchronous test start            =====')
    console.log('========================================================')


    console.log('Asynchronous function finished in', timeRun())
    console.log('========================================================')

})();/*  */

console.log('Synchronous pipeline finished in', timeRun())