import React from 'react'
import Layout from './Layout'

const Solicitar = () => {
        function SolicitarBase(){
            
        }


  return (
<Layout>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <center>
    <div>Solicitar base de datos
        
       <form>
        <label htmlFor="Ingrese su nombre">Nombre</label>
       <br/><br/> <input type="text" placeholder="Escriba su nombre"/>
       <p></p><label htmlFor="Ingrese su correo electronico">Correo</label>
        <br/><br/> <p></p><input type="text" placeholder="Email"/>
        <p></p><label htmlFor="Ingrese su número telefónico">Nombre</label>
        <br/><br/><p></p><input type="text" placeholder="Contacto"/>
        <p></p><label htmlFor="Ingrese la razón por la que desea la base de datos">Razon</label>
        <br/><br/> <p></p><textarea type="text" placeholder="Razón o motivo"/>
        <p></p><button onClick={SolicitarBase}>Enviar solicitud</button>
        

        </form> 
    </div>
    </center>
    </Layout>
  )
}

export default Solicitar