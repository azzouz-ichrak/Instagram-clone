import React, { Component } from 'react'

class StepOne extends Component{

    /*
    nomCom, numRegistre, email, typeCom, password,
    */
   continue = e => {
       e.preventDefault();
       this.props.nextStep();
       
   }

    render(){
        const {handleChange, nomCom, numRegistre, email, typeCom, password } = this.props;
        return(   
            <> 
                  
                <input 
                    type="text"
                    name="nomCom"
                    placeholder="entrer votre nom de commerce"
                    value={nomCom}
                    onChange={handleChange('nomCom')}
                />
                <input 
                    type="text"
                    name="numRegistre"
                    placeholder="entrer votre numéro de registre"
                    value={numRegistre}
                    onChange={handleChange('numRegistre')}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="entrer votre email"
                    value={email}
                    onChange={handleChange('email')}
                />
                <input 
                    type="text"
                    name="typeCom"
                    placeholder="choisir votre type de commerce"
                    value={typeCom}
                    onChange={handleChange('typeCom')}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="entrer votre mot de passe"
                    value={password}
                    onChange={handleChange('password')}
                />
                <button className="next btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={this.continue}>
                    Next >>
                </button>
            </>
        )
    }
}

export default StepOne;