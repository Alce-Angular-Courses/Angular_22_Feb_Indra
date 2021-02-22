/** Asincronía y callbacks */

function hacerAsincrono(data, calback) {
    setTimeout(()=>{
        calback(data)
    }, 1000)
}

hacerAsincrono(23, (dato) => {console.log('Resultado:', dato )})

/** Asincronía y promesas */

function hacerAsincronoPromesa() {
    return new Promise( (resolve,reject) => {
        setTimeout(()=>{
            let num = Math.random()
            if (num > 0.5) {
                resolve(num)
            } else {
                reject(new Error(num))
            }
        }, 1000)
    })

}

hacerAsincronoPromesa()
    .then( (dato) => {console.log('Resultado:', dato)})
    .catch( (error) => {console.error('Error', error.message)});


/** Asincronía y asinc/await - ES2017 (ES8)  */

(async () => {
    console.log('Función anónima autoinvocada')
    try {
        const dato = await hacerAsincronoPromesa()
        console.log('Resultado (await):', dato)
    } catch (error) {
        console.error('Error (await)', error.message)
    }
})()