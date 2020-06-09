import React, { Component, useEffect, useState } from 'react';
//import {useHistory} from 'react-router-dom'
//import M from 'materialize-css'

class AllInfo extends Component {
    back = e => {
        e.preventDefault()
        this.props.prevStep()

    }

 


    render(){
        const { nomCom, numRegistre, email, typeCom, password, nomResponsable, telephone, adresse, siteweb, logo, description } = this.props;
        return(
            <>
                <h6>Here is the information you entered:</h6>
                nom de commerce: <b>{nomCom}</b><br />
                numéro de registre: <b>{numRegistre}</b><br />
                email <b>{email}</b><br />
                type de commerce: <b>{typeCom}</b><br />
                password: <b>{password}</b><br />
                nom de responsable: <b>{nomResponsable}</b><br />
                numéro de telephone: <b>{telephone}</b><br />
                adresse: <b>{adresse}</b><br />
                lien de site web: <b>{siteweb}</b><br />
                logo: <b>{logo}</b><br />
                description: <b>{description}</b><br />
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Save">
                    save
                </button>
            </>
        );
    }
}

export default AllInfo;