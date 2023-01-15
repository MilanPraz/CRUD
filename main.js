
let inputbox=document.getElementById('name');
const submit=document.getElementById('bookmark-form')

submit.addEventListener('submit',addname)

function addname(){
    const studentnameval=inputbox.value;
    if(studentnameval===""){
        document.getElementById('msg').innerHTML=`<h2>Please Fill the Fields<h2>`
    }
    else{
   
    //if there is sth  in local storage
    //first ma local stiorage ma xa ki nai herne
    //if xaina null xa vane khali dekhaune else kei data xa vane tyo data vlinu paryo get garnu paryoo
    //so tyo agi ko khali thau or array banako mai rakhnu paryo liyerw

    const studentname=localStorage.getItem('student')
    if(studentname===null){
        students=[]
    }else{
        students=JSON.parse(localStorage.getItem('student'))
    }
    //add our value given by user in local storage
    students.push(studentnameval)
    //push tw garyo tara local storage ma haleko xaina so we have to setitem
    // yeta hamle get rw set dubai ma student lekheko xa so tyo hamro key ko so same hunu paryo 
    // and get ma key matra halne vitra tara set garda key ani tesko value ni halnu parxa

    localStorage.setItem('student',JSON.stringify(students))



    
    
}
}


function showName(){
    const studentname=localStorage.getItem('student')
    if(studentname===null){
        students=[]
    }else{
        students=JSON.parse(localStorage.getItem('student'))
    }

    let output='';
    let addstudent=document.getElementById('output')
    //we can give item and index but only item is also enough hamlai vitra item chahiyeko ho ni tw

    students.forEach((item,index) => {
        output+=
        `<ul>
        <li style="list-style:none;" class="control-form ">Name: ${item}   <button class="btn btn-block btn-primary mt-3" onclick="editbtn(${index})" id="editbtn">Edit</button> <button class="btn btn-block btn-danger mt-3" onclick="delbtn(${index})" id="delbtn">Delete</button></li>
        </ul>
        
        
        `
        
    });
    addstudent.innerHTML=output



}





//edit btn

function editbtn(index){

    // first we need the data we get from localstorage
    const studentname=JSON.parse(localStorage.getItem('student'))


    //when we click edit btn we want corresponding value we get index i.e from 0 since it is now object(array)so there may be like this: 0 :milan, 1:kiran ..soon so index mean that 0 1 2,, etc so through this we can get access to data
    // so now we want to put the value of that index inside the input student name box so that we can edit there
    inputbox.value=studentname[index]
    // console.log(studentname[index])

    // Now we want Save btn instead of Add btn

    let addbtn=document.getElementById('addbtn')
    let savebtn=document.getElementById('savebtn')
    addbtn.style.display='none';
    savebtn.style.display='block';
    // now we have to save the index of the data we want to edit
    //this is just like third variable jasma just index ko value store garxam which we gonna need later
    let saveindex=document.getElementById('saveindex')
    saveindex.value=index;
    
}

//save name after edit
let savebtn=document.getElementById('savebtn')
savebtn.addEventListener('click',savedata)

function savedata(){

    // first get garnu paryo data
    const studentname=JSON.parse(localStorage.getItem('student'))
//so yeta array studentname ma index ma vako value chahi edited value from inputbox equal garda aba new edited data tyo array ma specified index ma basne vayo

    let saveindex=document.getElementById('saveindex').value
    studentname[saveindex]=inputbox.value

    localStorage.setItem('student',JSON.stringify(studentname))


    //now we have set the value in the local storage so simply  just call the showname() function
    showName();

    //aftere editing we have to again bring out our ADD btn so do same as above

    let addbtn=document.getElementById('addbtn')
    let savebtn=document.getElementById('savebtn')
    addbtn.style.display='block';
    savebtn.style.display='none';

    // clear fields
    inputbox.value=""

}


//delete btn
function delbtn(index){
    //first we need data in array
    const studentname=JSON.parse(localStorage.getItem('student'))
    // if we know its index we can use splice()
    //eg of splice
/* const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
       At position 2, remove 2 items: 
      fruits.splice(2, 2);// // it means at index 2(starting from 0) from that index delete 2 items */
    studentname.splice(index, 1);
    localStorage.setItem('student',JSON.stringify(studentname))
    showName();


}

document.getElementById('delall').addEventListener('click',delall)

function delall(){

       const studentname=localStorage.getItem('student')
       if(studentname===null){
        const students=[]
       }else{
        students=JSON.parse(localStorage.getItem('student'))
        //pheri naya wala students array lai khali banaidine
        students=[];

       }
       localStorage.setItem('student',JSON.stringify(students))
       showName();

}










