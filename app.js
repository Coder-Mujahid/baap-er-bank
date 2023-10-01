function getinputvaluebyid (id){
    const input=document.getElementById(id)
    const inputtext=input.value;
    const inputparse=parseFloat(inputtext)
    input.value=' '
    return inputparse;
}

function getinnertextbyid(id){
    const innert=document.getElementById(id)
    const innermony=innert.innerText;
    const innertextparse=parseFloat(innermony)
    return innertextparse;

}

document.getElementById('diposite_btn').addEventListener('click', function(){
    const dipositmony=getinputvaluebyid('diposite_input')
    const previousdvalue=getinnertextbyid('diposite')
    console.log(previousdvalue);

})

document.getElementById('withdrow_btn').addEventListener('click', function(){
    const withdrowmony=getinputvaluebyid('withdrowInput')
    const previouswvalue=getinnertextbyid('withdrow')
    console.log(previouswvalue);


})