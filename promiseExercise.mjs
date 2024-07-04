function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw('Joe')
.then((data1)=> console.log('data1:',data1))
.then(()=>{ return luckyDraw('Caroline')})
.then((data2)=> console.log('data2:',data2))
.then(()=>{ return luckyDraw('Sabrina')})
.then((data3)=> console.log('data3:',data3))
.catch((error)=> console.error('error:',error))

