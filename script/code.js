
const friends = []

function add()
 {
    let firstName = document.querySelector('[firstName]').value 
    let lastName = document.querySelector('[lastName]').value 

    //Add reference
   friends.push({ firstName, lastName })  

   console.table(friends)
}

  








