import React from 'react';
import PropTypes from 'prop-types';

//Se trabaja con Functional Components
const PrimeraApp = ( { saludo, subtitulo } ) => {

    //const saludo = 'Hola Mundo';

    //console.log(props);

    return(
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicacion</p>
        </>
    );
}

PrimeraApp.PropTypes ={
    saludo: PropTypes.string.isRequired
}

/*PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}*/

export default PrimeraApp;