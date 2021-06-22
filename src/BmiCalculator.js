import React,{useState} from 'react';

const BmiCalculator = () => {
    const [height,setHeight] = useState();
    const [weight,setWeight] = useState();
    const [bmiLevel,setBmiLevel] = useState();
    const [bmiClass,setBmiClass] = useState();



    const calculateBMI = (e) => {
        e.preventDefault();
        // calculate the BMI range
      
        let bmiVal = (weight/ (height/100) ** 2).toFixed(2);
        setBmiLevel(bmiVal);

        // using BMI range - kg/m2 find category
        let bmiClass = getBmi(bmiVal);
        setBmiClass(bmiClass);
    }

    const getBmi = (bmi) => {

        console.log("bmi");
        if(bmi < 16){
            return "Severe Thinness";
        }
        
        if(bmi >= 16 && bmi < 17){
            return "Moderate Thinness";
        }
            
        if(bmi >= 17 && bmi< 18.5){
            return "Mild Thinness";
        } 
            
        if(bmi >= 18.5 && bmi < 25){
            return "Normal";
        }
            
        if(bmi >= 25 && bmi < 30){
            return "Overweight";
        }
            
        if(bmi >= 30 && bmi < 35){
            return "Obese Class I";
        }
            
        if(bmi >= 35 && bmi < 40){
            return "Obese Class II";
        }
            
        if(bmi >= 40){
            return "Obese Class III"; 
        }                        
    }


    const clearData = () => {
        setHeight("");
        setWeight("");
        setBmiLevel("");
        setBmiClass("");

    }
   

    return(
        <div className="container">
            <h1>BMI Calculator</h1> 
            <div className="form-container">
                <form onSubmit={calculateBMI}>
                    <div className="ipfield">
                        <label>Height</label>
                        <div>
                            <input placeholder="Enter height in cm"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="ipfield">
                        <label>Weight</label>
                        <div>
                            <input placeholder="Enter Weight in kg"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <button type="submit" className="result-btn">Calculate BMI</button>
                </form>
                <button onClick={clearData} className="clear-btn">Clear</button>
            </div> 
            
            <div className="result-container">
                <h3>Your BMI : {bmiLevel}</h3> 
            </div>

            <div className="result-container">
                <h3>{bmiClass}</h3>
            </div>

        </div>
    )
}

export default BmiCalculator;