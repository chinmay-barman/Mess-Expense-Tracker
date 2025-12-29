const addMemberButton = document.querySelector('.AddMemberButton');
addMemberButton.addEventListener('click', addMemberFunction);

const calculateButton = document.querySelector('.CalculateButton');
calculateButton.addEventListener('click', calculateFunction);

const overallExpenseContainer = document.querySelector('#overallExpenseContainer');
const overallExpenseTable = document.querySelector('#overallExpenseTable');
const newTableHeader = document.createElement('thead');
const MemberSettlementTable = document.querySelector('.MemberSettlementTable');

function addMemberFunction(){
    const newRow=document.createElement('tr');
    document.querySelector('.MemberDetailsTable tbody').appendChild(newRow);
    newRow.appendChild(createNewMember());
    newRow.appendChild(createNewcontribution());
    newRow.appendChild(createNewDaysEaten());
    newRow.appendChild(createNewAddExpense());
    newRow.appendChild(createNewDeleteMember());
        
    if(overallExpenseContainer.childElementCount>0 && MemberSettlementTable.childElementCount>1){
        removeOverallExpenseTableBody();
        removeMemberSettlementTableBody();
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

function removeButtonFunction(deleteButton){
    deleteButton.parentElement.parentElement.remove();
}

function calculateFunction(){
    if(overallExpenseTable.childElementCount== 1 && MemberSettlementTable.childElementCount == 1 ){
        addOverallExpenseTableBody();
        addMemberSettlementTableBody();
    }
    else{
        removeOverallExpenseTableBody();
        addOverallExpenseTableBody();

        removeMemberSettlementTableBody();
        addMemberSettlementTableBody();
    }
}


function addOverallExpenseTableBody(){
    const MemberNames = document.querySelectorAll('.MemberName');
    const Contributions = document.querySelectorAll('.Contribution');
    const DaysEaten = document.querySelectorAll('.DaysEaten');

    const newTableBody = document.createElement('tbody');

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
    overallExpenseTable.appendChild(newTableBody);
}

function removeOverallExpenseTableBody(){
    overallExpenseTable.children[1].remove();
}

function addMemberSettlementTableBody(){
    const MemberSettlementTableBody = document.createElement('tbody');
    MemberSettlementTable.appendChild(MemberSettlementTableBody);
    const MemberNames = document.querySelectorAll('.MemberName');
    for(let i=0;i<MemberNames.length;i++){
        MemberSettlementTableBody.appendChild(document.createElement('tr'));
        for(let j=0;j<4;j++){
            MemberSettlementTableBody.children[i].appendChild(document.createElement('td'));
        }
        MemberSettlementTableBody.children[i].children[0].innerHTML=MemberNames[i].firstChild.value;
    }
}

function removeMemberSettlementTableBody(){
    MemberSettlementTable.children[1].remove();
}