const addMemberButton = document.querySelector('.AddMemberButton');
addMemberButton.addEventListener('click', addMemberFunction);

const calculateButton = document.querySelector('.CalculateButton');
calculateButton.addEventListener('click', calculateFunction);

const overallExpenseContainer = document.querySelector('#overallExpenseContainer');

function calculateFunction(){
    if(overallExpenseContainer.childElementCount==0){
        addOverallExpenseTable();
    }
    else{
        removeOverallExpenseTable();
        addOverallExpenseTable();
    }
}

function addOverallExpenseTable(){
    const MemberNames = document.querySelectorAll('.MemberName');
    const Contributions = document.querySelectorAll('.Contribution');
    const DaysEaten = document.querySelectorAll('.DaysEaten');

    const overallExpenseTable=document.createElement('table');
    const newTableHeader = document.createElement('thead');
    overallExpenseTable.appendChild(newTableHeader);
    const newTableHeaderRow = document.createElement('tr');
    newTableHeader.appendChild(newTableHeaderRow);
    newTableHeaderRow.appendChild(document.createElement('th'));
    newTableHeaderRow.appendChild(document.createElement('th'));
    newTableHeaderRow.appendChild(document.createElement('th'));
    newTableHeaderRow.appendChild(document.createElement('th'));

    newTableHeaderRow.children[0].innerHTML = "Member Name";
    newTableHeaderRow.children[1].innerHTML = "Contribution";
    newTableHeaderRow.children[2].innerHTML = "Total Contribution";
    newTableHeaderRow.children[3].innerHTML = "Days Eaten";

    const newTableBody = document.createElement('tbody');
    overallExpenseTable.appendChild(newTableBody);

    for(let i=0;i<MemberNames.length;i++){
        const newTableBodyRow = document.createElement('tr');
        newTableBody.appendChild(newTableBodyRow);
        
        for(let j=0;j<4;j++){
            newTableBodyRow.appendChild(document.createElement('td'));
        }
    }

    for(let i=0;i<MemberNames.length;i++){
        newTableBody.children[i].children[0].innerHTML=MemberNames[i].firstChild.value;
        newTableBody.children[i].children[3].innerHTML=DaysEaten[i].firstChild.value;
    }
    overallExpenseContainer.appendChild(overallExpenseTable);
}

function removeOverallExpenseTable(){
    overallExpenseContainer.removeChild(overallExpenseContainer.children[0]);
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
        
    if(overallExpenseContainer.childElementCount>0){
        removeOverallExpenseTable();
    }
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
