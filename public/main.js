//This is where you put the code that reaches out to the server to send info back and forth. Info can travel back and forth using fetches

document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#petNameIn").textContent = data.name
  document.querySelector("#petSexIn").textContent = data.status
  document.querySelector("#petAgeIn").textContent = data.currentOccupation
}