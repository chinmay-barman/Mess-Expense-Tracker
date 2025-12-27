const addMemberButton = document.querySelector('.AddMemberButton');
addMemberButton.addEventListener('click', addMemberFunction);

const calculateButton = document.querySelector('.CalculateButton');
calculateButton.addEventListener('click', calculateFunction);


function calculateFunction(){
    document.getElementById('overallExpenseTable').hidden = false;
}

function removeButtonFunction(deleteButton){
    deleteButton.parentElement.parentElement.remove();
}
function addMemberFunction(){
    const newRow=document.createElement('tr');
    document.querySelector('.MemberDetailsTable tbody').appendChild(newRow);
    newRow.appendChild(createNewMember());
    newRow.appendChild(createNewcontribution());
    newRow.appendChild(createNewDaysEaten());
    newRow.appendChild(createNewAddExpense());
    newRow.appendChild(createNewDeleteMember());
    
    document.getElementById('overallExpenseTable').hidden = true;
}
let memberCount =1;
function createNewMember(){
    const newmembername =document.createElement('td');
    newmembername.classList.add('MemberName');
    newmembername.innerHTML=`<input type="text" placeholder="${memberCount+1} Member Name">`;
    memberCount+=1;
    return newmembername;
}
function createNewcontribution(){
    const newcontribution = document.createElement('td');
    newcontribution.classList.add('Contribution');
    newcontribution.innerHTML=`<p>0</p><button>View</button>`;
    return newcontribution;
}
function createNewDaysEaten(){
    const newdaysEaten = document.createElement('td');
    newdaysEaten.classList.add('DaysEaten');
    newdaysEaten.innerHTML=`<input type="number" placeholder="Days">`;
    return newdaysEaten;
}
function createNewAddExpense(){
    const newaddExpense = document.createElement('td');
    newaddExpense.classList.add('AddExpense');
    newaddExpense.innerHTML=`<button>Add Expense</button>`;
    return newaddExpense;
}
function createNewDeleteMember(){
    const newdeleteMember = document.createElement('td');
    newdeleteMember.classList.add('DeleteMember');
    newdeleteMember.innerHTML=`<button onclick="removeButtonFunction(this)">Remove</button>`;
    return newdeleteMember;
}
