function getinputvaluebyid (id){
    const input=document.getElementById(id)
    const inputtext=input.value;
    if(!isNaN(inputtext)){
        const inputparse=parseFloat(inputtext)
        input.value=' '
        Swal.fire(
            'Good job!',
            'successfully deposited!',
            'success'
          )
        return inputparse;
        
    }
    else{
        input.value=' '
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please input valide number!',
      })
    }
    
}

function getinnertextbyid(id){
    const innert=document.getElementById(id)
    const innermony=innert.innerText;

    if(!isNaN(innermony)){
        const innertextparse=parseFloat(innermony)
        innermony.value=' '
        Swal.fire(
            'Good job!',
            'successfully deposited!',
            'success'
          )
        return innertextparse;
        
    }
    else{
        innermony.value=' '
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please input valide number!',
      })
    }
    return innertextparse;

}

function setnewvalue(id,value){
    const dipositetotal=document.getElementById(id)
    dipositetotal.innerText=value;
}

document.getElementById('diposite_btn').addEventListener('click', function(){
    const dipositinput=getinputvaluebyid('diposite_input')
    const previouswvalue=getinnertextbyid('diposite')
    const dipositetotal=dipositinput+previouswvalue
    
    setnewvalue('diposite',dipositetotal)

    const totalpv=getinnertextbyid('Total_balance')
    const totalcv=totalpv+dipositinput
    setnewvalue('Total_balance',totalcv)
    

    
    

})

document.getElementById('withdrow_btn').addEventListener('click', function(){
    const withdrowmony=getinputvaluebyid('withdrowInput')
    const previouswvalue=getinnertextbyid('withdrow')
    const withdrowtotal=previouswvalue+withdrowmony
    setnewvalue('withdrow',withdrowtotal)


    const totalpv=getinnertextbyid('Total_balance')
    const totalcv=totalpv-withdrowmony
    setnewvalue('Total_balance',totalcv)
    

   
    
})