
 function environment(){
    a=document.getElementById('box1');                        // 0 reprensts A  
    b=document.getElementById('box2'); 
    envA =  Math.round(Math.random(0,1)) ;
    envB =  Math.round(Math.random(0,1)) ;

    //Custom environment settings for A

    if(envA==1)
    {
        a.style.background="black";
    }
    else{
        a.style.background="white";
    }


    //Custom environment settings for B

    if(envB==1)
    {
        b.style.background="black";
    }
    else{
        b.style.background="white";
    }

        
 }



function vaccumAgent()
{
    points = 0;
    
    vaccumlocation = Math.round(Math.random(0,1)) ;           //Generates a random number between 0 and 1 represents location of vacum cleaner
    A=document.getElementById('box11');                        // 0 reprensts A  
    B=document.getElementById('box22');                        // 1 represents B
   
   
    if(vaccumlocation=0){
       A.style.background="yellow";
   }
   else{
        A.style.background="transparent"
   }


   if(vaccumlocation=1){
    B.style.background="yellow";
    }
    else{
    B.style.background="transparent"
    }



   

    if (vaccumlocation == 0)
    {
        console.log('Vaccum is randomly placed at A');
        if(a==1){
            console.log('A is dirty');
            points++;
            a=0;
            console.log('Location A has been cleaned');

            if(b==1)
            {
                console.log('Location B is dirty');
                console.log("moving to location b");
                points--;
                b=0;
                console.log("location b has been cleaned");
            }

        }

        else{
            if(b==1)
            {
                console.log("Location b is dirty");
                points--;
                console.log('moving to location b...');
                b=0;
                console.log('location b has been cleaned');
                points++;
            }
        }
        
    }

    else{

        if(vaccumlocation ==1){

            console.log('Vaccum is randomly placed at B');
            if(b==1){
            console.log('B is dirty');
            points++;
            b=0;
            console.log('Location A has been cleaned');

            if(a==1)
            {
                console.log('Location A is dirty');
                console.log("moving to location a");
                points--;
                a=0;
                console.log("location a has been cleaned");
            }

        }

        else{
            if(a==1)
            {
                console.log("Location a is dirty");
                points--;
                console.log('moving to location a...');
                a=0;
                console.log('location a has been cleaned');
                points++;
            }
        }
        }
    }

}

score = document.getElementById('score');
score.innerHtml="points"; 