// clicking plus
document.getElementById('plus').addEventListener('click',()=>{
    document.getElementById('txt').style.display='flex';
    document.getElementById('plus').style.display='none';
    document.getElementById('minus').style.display='flex'
})
// clicking minus
document.getElementById('minus').addEventListener('click',()=>{
    document.getElementById('txt').style.display='none';
    document.getElementById('plus').style.display='flex';
    document.getElementById('minus').style.display='none'
})
// click 2nd plus
document.getElementById('plus1').addEventListener('click',()=>{
    document.getElementById('txt1').style.display='flex';
    document.getElementById('plus1').style.display='none';
    document.getElementById('minus1').style.display='flex';
    document.getElementById('box').style.height='550px';
})
// click 2nd minus
document.getElementById('minus1').addEventListener('click',()=>{
    document.getElementById('txt1').style.display='none';
    document.getElementById('plus1').style.display='flex';
    document.getElementById('minus1').style.display='none';
    document.getElementById('box').style.height='400px';
})
// click 3rd plus
document.getElementById('plus2').addEventListener('click',()=>{
    document.getElementById('txt2').style.display='flex';
    document.getElementById('plus2').style.display='none';
    document.getElementById('minus2').style.display='flex';
    document.getElementById('box').style.height='550px';
})
// click 3rd minus
document.getElementById('minus2').addEventListener('click',()=>{
    document.getElementById('txt2').style.display='none';
    document.getElementById('plus2').style.display='flex';
    document.getElementById('minus2').style.display='none';
    document.getElementById('box').style.height='450px';
})
// click 4thplus
document.getElementById('plus3').addEventListener('click',()=>{
    document.getElementById('txt3').style.display='flex';
    document.getElementById('plus3').style.display='none';
    document.getElementById('minus3').style.display='flex';
    document.getElementById('box').style.height='650px';
}) 
// click 4th minus
document.getElementById('minus3').addEventListener('click',()=>{
    document.getElementById('txt3').style.display='none';
    document.getElementById('plus3').style.display='flex';
    document.getElementById('minus3').style.display='none';
    document.getElementById('box').style.height='550px';
})