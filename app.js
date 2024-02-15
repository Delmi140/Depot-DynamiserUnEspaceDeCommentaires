function addValue(){

    ////////////////////////////////////
        
        //Récuperation de la balise first-name1
        let inputfirstname = document.getElementById("first-name1");
        //Récupération de balise h3firstname
        let h3firstname  = document.getElementById("first-name-form");
        //Création de la balise newh3Content
        let newh3Content = document.createElement("h3"); 
        
        if (inputfirstname.value !=""){
            //Création d'un text, repris de texte de la balise inputfirstname
            let newItemh3Content2 = document.createTextNode(inputfirstname.value);
            
            //Ajout du texte à la balise h3firname 
            newh3Content.appendChild(newItemh3Content2);
            
            //Ajout du texte 
            h3firstname.appendChild(newh3Content);

        }
        else{
            alert("Veuillez entre du texte à afficher pour le Prénom")
        }
    
        
    /////////////////////////////////
     
        //Récuperation de la balise last-name1 
        let inputlastname = document.getElementById("last-name1");
        //Récupération de balise h3lastname
        let h3lastname = document.getElementById("last-name-form");
        //Création de la balise newh3Content2
        let newh3Content2 = document.createElement("h3");

        if (inputlastname.value !=""){
            //Création d'un text, repris de texte de la balise inputlastname
            let newItemh3Content3 = document.createTextNode(inputlastname.value);
            //Ajout du texte à la balise h3firname
            newh3Content2.appendChild(newItemh3Content3);
            //Ajout du texte
            h3lastname.appendChild(newh3Content2);

        }
        else{
            alert("Veuillez entre du texte à afficher pour le Nom")
        }


        
    
    ///////////////////////////////////
    
        //Récuperation de la balise textarea
        let textareaparagraphe = document.getElementById("message1");
        //Récupération d'une balise paragraphe1 
        let paragraphe = document.getElementById("paragraphe1");
        //Creation d'un paragraphe "p"
        let newItemParaphe = document.createElement("p");
        
        if (textareaparagraphe.value !=""){
            //Création d'un texte, repris de text la balise textarea
            let paragrapheTexte = document.createTextNode(textareaparagraphe.value);
            
            //Ajout du texte à la balise paragraphe1
            paragraphe.appendChild(paragrapheTexte);
            
            //Ajout du paragraphe a la balise 
            paragraphe.appendChild(newItemParaphe);

        }
        else{
            alert("Veuillez entre du texte à afficher dans commentaire")
        }

        
    
        
    ///////////////////////////////////////
    }
    
    