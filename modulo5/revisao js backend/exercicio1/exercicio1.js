const converteCelsius = (temp, type) => {
    if (isNaN(temp)) 
    {console.log(`“Erro. Parâmetro inválido (${temp} não é um número válido!).`)}

    else {if  (type === type.toLowerCase()) 
        {console.log(`“Erro. Parâmetro inválido ${type} deve ser escrita com maiúscula!).`)
        
        
        if ((type !== "f" || type !=="k") && type === type.toUpperCase()) 
        {console.log(`“Erro. Parâmetro inválido ${type} não é uma temperatura válida!).`)}}

        

       
    else {console.log(`${temp} ${type} equivalem a 86° Farenheit!`)}}}
    


converteCelsius("trinta", "F")
converteCelsius(30, "G")
converteCelsius("30", "k")
converteCelsius(30, "F")
converteCelsius(303, "K")