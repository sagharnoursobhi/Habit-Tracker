
// target from html
const addBtn = document.querySelector('.addBtn')//finding all elements with addBtn class
const habitInput = document.querySelector('#habit-name')
const habitColorInput = document.querySelector('#habit-color')
const habitList = document.querySelector('#habit-list')
const errorEmpty = document.querySelector('.error')
const newWeek = document.querySelector('.btn')



//event listeners
addBtn.addEventListener('click', addHabit)//invocking addHabbit function with clicking on it
// habitList.addEventListener('click', deleteAction)//if use this function when at the second time of clicking,deleteaction will  
//the  
// newWeek.addEventListener('click', addWeek)
document.addEventListener('click', function (event) {
  const element = event.target;
  if(element.classList.contains('habit-day')){
    if (element.classList.contains('selected')) {
      element.style.backgroundColor = '#00000038';
      element.classList.remove('selected');
    } else {
      const color = element.parentElement.parentElement.getElementsByTagName('input')[0].value;
      element.style.backgroundColor = color;
      element.classList.add('selected');
    }
  }
});






function addHabit(){
    //prevent form from submitting
    //event.preventDefault()-->then we will not need to write this function

    //if the field is empty
    if (habitInput.value === '' ) {
        // errorEmpty.classList.remove('hidden')
        alert("please insert habit name");
    
    }else {
        // errorEmpty.classList.add('hidden')
        //create a habit div
       
        const habitName = habitInput.value;
        const habitClolor = habitColorInput.value;
        let sample = `
        <tr>
              <input type="hidden" value="${habitClolor}">
              <td><button onclick = "habitRemover(this)">remove</button></td>
              <td style="color:${habitClolor}">${habitName}</td>
              <td><span class="habit-day"></span></td>
              <td><span class="habit-day"></span></td>
              <td><span class="habit-day"></span></td>
              <td><span class="habit-day"></span></td>
              <td><span class="habit-day"></span></td>
              <td><span class="habit-day"></span></td>
              <td><span class="habit-day"></span></td>
        </tr>
        `;//in line 64 
      habitList.innerHTML = habitList.innerHTML + sample;//getting all html tags in habitList and add new sample
        
    }  
    
    //to clear the input after adding
    habitInput.value= ''
    
}

function habitRemover(element)
{
  element.parentElement.parentElement.remove();//receiving the element and removing the habit that have been added
}





function addWeek(x) {
  const section = document.createElement('section');
  section.setAttribute('id', 1);
  document.getElementById('wrapper').appendChild(section); 
  var h3 = document.createElement('h3');
  h3.innerText = document.getElementById('sectionText').value;
  section.appendChild(h3);
  var input = document.createElement('INPUT');
  input.setAttribute('type', 'text')
  section.appendChild(input);
  var btn = document.createElement('button');
  btn.innerText = 'New List Item'
  section.appendChild(btn);
}

