import React, { Component } from 'react';
import StepOne from './FormStepOne'
import StepTwo from './FormStepTwo'
import imgSingup from './img/imgSignup.png'
import {Link} from 'react-router-dom'
import AllInfo from './FormStepFinal'



class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
                step: 1,
                //  step1
                nomCom: '',
                numRegistre: '',
                email: '',
                typeCom: '',
                password: '',

                //  step 2
                nomResponsable: '',
                telephone: '',
                adresse: '',
                siteweb: '',
                logo: '',
                description: ''

    }}

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }


    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    

    showStep = () => {
        const { step, nomCom, numRegistre, email, typeCom, password, nomResponsable, telephone, adresse, siteweb, logo, description } = this.state;
        if(step === 1)
           return( 
           <StepOne 
                handleChange = {this.handleChange}
                nextStep = {this.nextStep}
                nomCom = {nomCom}
                numRegistre = {numRegistre}
                email = {email}
                typeCom = {typeCom}
                password = {password}
           /> );
        if(step === 2)
        return(
            <StepTwo 
            handleChange = {this.handleChange}
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            nomResponsable = {nomResponsable}
            telephone = {telephone}
            adresse = {adresse}
            siteweb = {siteweb}
            logo = {logo}
            description = {description}

            />
        )
        if(step === 3)
        return(
           <AllInfo 
            nomCom = {nomCom}
            numRegistre = {numRegistre}
            email = {email}
            typeCom = {typeCom}
            password = {password}
            nomResponsable = {nomResponsable}
            telephone = {telephone}
            adresse = {adresse}
            siteweb = {siteweb}
            logo = {logo}
            description = {description}
            prevStep = {this.prevStep}
           /> 
        )
    }

    render(){
        const {step} = this.state;
        return(
            <div className="form" id="form">
                <div>
                    <img className="img" src={imgSingup} alt="imgSingup"/>
                    </div>
                <div className="form input-field">
                    <h2>anti-gaspillage</h2>
                    <h6>Step {step} of 2.</h6>
                    {this.showStep()}
                    <h5><Link to="/login">Already have an account ?</Link>
                     </h5>
                </div>
            </div>
        )
    }
}

export default Signup