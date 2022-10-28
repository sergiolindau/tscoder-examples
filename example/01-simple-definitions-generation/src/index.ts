import tscoder from 'tscoder'

console.log(tscoder.tscoder.test0())
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


    console.log('Synchronous function finished in', timeRun())
    console.log('========================================================')

})();

/* Asynchronous test run */
; (async () => {

    console.log('========================================================')
    console.log('=====           Asynchronous test start            =====')
    console.log('========================================================')


    console.log('Asynchronous function finished in', timeRun())
    console.log('========================================================')

})();

console.log('Synchronous pipeline finished in', timeRun())