       
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

var pointsA = 0;
var pointsB = 0;

function vaccumAgent()
{
    
    
    vaccumlocation = Math.round(Math.random(0,1)) ;           //Generates a random number between 0 and 1 represents location of vacum cleaner
    A=document.getElementById('box11');                        // 0 reprensts A  
    B=document.getElementById('box12');                        // 1 represents B
    a=document.getElementById('box1').style.background;                        // 0 reprensts A  
    b=document.getElementById('box2').style.background; 
    
   
    if(vaccumlocation == 0){
       A.style.background="yellow";
       B.style.background="transparent";
   }
   else{
        
        B.style.background="yellow";
        A.style.background="transparent";
   }






   

    if (vaccumlocation == 0)
    {
        console.log('Vaccum is randomly placed at A');
        if(a == 'black'){
            console.log('A is dirty');
            pointsA++;
            document.getElementById('box1').style.background="white";
            B.style.background="yellow";
            A.style.background="transparent";
            console.log('Location A has been cleaned');

            if(b=="black")
            {
                console.log('Location B is dirty');
                console.log("moving to location b");
                pointsB--;
                document.getElementById('box2').style.background="white";
                console.log("location b has been cleaned");
            }

        }

        else{
            if(b == "black")
            {
                B.style.background="yellow";
                A.style.background="transparent";
                console.log("Location b is dirty");
                pointsB--;
                console.log('moving to location b...');
                document.getElementById('box2').style.background="white";
                console.log('location b has been cleaned');
                
            }
        }
        
    }

    else{

        if(vaccumlocation ==1){                                                     //working fine  

            console.log('Vaccum is randomly placed at B');
            if(b== "black"){
            console.log('B is dirty');
            pointsB++;
            document.getElementById('box2').style.background = "white";
            
            console.log('Location B has been cleaned');

            if(a=="black")
            {
                A.style.background="yellow";
                B.style.background="transparent";
                console.log('Location A is dirty');
                console.log("moving to location a");
                pointsA--;
                document.getElementById('box1').style.background="white";
                console.log("location a has been cleaned");
            }

        }

        else{
            if(a=="black")
            {
                A.style.background="yellow";
                B.style.background="transparent";
                console.log("Location a is dirty");
                pointsA--;
                console.log('moving to location a...');
                document.getElementById('box1').style.background="white";
                console.log('location a has been cleaned');
               
            }
        }
        }
    }

    document.getElementById("scoreA").innerHTML = pointsA;
    document.getElementById("scoreB").innerHTML = pointsB;

}
