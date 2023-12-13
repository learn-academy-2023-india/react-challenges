import React from "react"



const ApologizeBot = (props) => {

        // badResponse function takes in string parameter and splits into an array
        const badResponse = (string) =>{
    
            let newArr = string.split("")
            //array gets mapped and looks for indexes that are divisble by 3 and returns a B
            return newArr.map((value, index) => {
                if(index % 3 === 0){
                    
                    return "B"
                // else if statement for non divisble by 3 and returns an L
                }else if(index % 3 === 1){
    
                    return "L"
                // else statement to return an A
                }else{
    
                    return "A"
                }
    
                //join back together to say BLA
            }).join("")
              
            
        }
        // console.log(badResponse("hello"))

    

    return (
        <>
            {props.userInput && <p>I'm sorry, Bad Robot isn't supposed to say <span>{badResponse(props.userInput)}</span>, it's supposed to say <span>{props.userInput}</span>!</p>}
        </>
    )
}

export default ApologizeBot