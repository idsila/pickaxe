
function vexedOn(){
  for(let i = 1; i != 41; i++){
    const startTime = (new Date()).getTime();
    const url = `https://push-bot-vexed${i}.onrender.com/start`;
    //https://dummyjson.com/carts
    fetch(url)
    .then(res => res.json())
    .then(res => {
      const endTime = (new Date()).getTime();
      console.log(`(${i})Response ${endTime-startTime}ms`)
    })
    .catch(() => {
      reFetch(url, startTime, i, 1);
    })
  }
}



function reFetch(url, startTime, i, count){
  console.log(`(${i})REFETCH ${count}`);
  fetch(url)
  .then(res => res.json())
  .then(res => {
      const endTime = (new Date()).getTime();
      console.log(`(${i})ReFetch ${count}  ${endTime-startTime}ms`)
  })
  .catch(() => {
    reFetch(url, startTime, i, count+1);
  })
}

vexedOn();


