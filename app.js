function addValue(){

    ////////////////////////////////////
    //Lien ajout first name     

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
    //Lien ajout Last name

        let inputlastname = document.getElementById("last-name1");
        
        let h3lastname = document.getElementById("last-name-form");
        
        let newh3Content2 = document.createElement("h3");

        if (inputlastname.value !=""){
            
            let newItemh3Content3 = document.createTextNode(inputlastname.value);
            
            newh3Content2.appendChild(newItemh3Content3);
            
            h3lastname.appendChild(newh3Content2);

        }
        else{
            alert("Veuillez entre du texte à afficher pour le Nom")
        }


    ///////////////////////////////////
    //Lien ajout Commentaire 

        
        let textareaparagraphe = document.getElementById("message1");
        
        let paragraphe = document.getElementById("paragraphe1");
        
        let newItemParaphe = document.createElement("p");
        
        if (textareaparagraphe.value !=""){
            
            let paragrapheTexte = document.createTextNode(textareaparagraphe.value);
            
            
            paragraphe.appendChild(paragrapheTexte);
            
            
            paragraphe.appendChild(newItemParaphe);

        }
        else{
            alert("Veuillez entre du texte à afficher dans le commentaire")
        }

        
    
        
    ///////////////////////////////////////
    }
    
    