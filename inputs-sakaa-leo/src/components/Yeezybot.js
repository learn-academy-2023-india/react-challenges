import React from "react"
const yeezyQuotes = [ "I feel like I'm too busy writing history to read it.", "George Bush doesn't care about black people.", "Fashion is merely an opinion. And I've got a lot of opinions.", "You know what should be banned? Stuff that's whack. The world is controversial. The world is classist. The world is racist.", "I don't use blue. I don't like it. It bugs me out. I hate it.", "You aint got the answers Sway!","In Paris, you're as far as possible from the land of pleasant smiles.", "I have decided in 2020 to run for president.", "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.", " The most genius thing about the way I create is to create with other geniuses."]
const Yeezybot = (props) => {

    const modifiedUserInput2 = (string, index) => {
        
        const randomArray = yeezyQuotes[Math.floor(Math.random()* yeezyQuotes.length)] 
            return randomArray
           }   
               return ( 
            <>
            <h3>Yeezybot:</h3>
            <p>It doesnt matter what you said cuz Yeezy told me... {modifiedUserInput2(props.userInput)}</p>
            
            </>
    
        )
        

    }



export default Yeezybot



  












