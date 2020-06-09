import React, { Component } from 'react'

class StepTwo extends Component{

    /*
    nomResponsable, telephone, adresse, siteweb, logo, description
    */
   continue = e => {
       e.preventDefault();
       this.props.nextStep();
       
   }

   back = e =>{
       e.preventDefault();
       this.props.prevStep();
       
   }




    render(){
        const {handleChange, nomResponsable, telephone, adresse, siteweb, logo, description } = this.props;
        return(   
            <>        
                <input 
                    type="text"
                    name="nomResponsable"
                    placeholder="entrer le nom de responsable"
                    value={nomResponsable}
                    onChange={handleChange('nomResponsable')}
                />
                <input 
                    type="number"
                    name="telephone"
                    placeholder="entrer votre numéro de telephone"
                    value={telephone}
                    onChange={handleChange('telephone')}
                />
                <input 
                    type="text"
                    name="adresse"
                    placeholder="entrer votre adresse"
                    value={adresse}
                    onChange={handleChange('adresse')}
                />
                <input 
                    type="text"
                    name="siteweb"
                    placeholder="ajouter le lien de votre site web"
                    value={siteweb}
                    onChange={handleChange('siteweb')}
                />
                

                <div>
                    <input 
                    type="file"
                    name="logo"
                    placeholder="ajouter votre logo"
                    value={logo}
                    onChange={handleChange('logo')}
                />
                    <input className="file-path validate"
                    type="text" />
                </div>









                <input 
                    type="text"
                    name="description"
                    placeholder="ajouter la description de votre commerce"
                    value={description}
                    onChange={handleChange('description')}
                />
                <button className="back" onClick={this.back}>
                « Back 
                </button>
                <button className="save">
                SAVE !!
                </button>
                <button className="next btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={this.continue}>
                    Next >>
                </button>
            </>
        )
    }
}

export default StepTwo;