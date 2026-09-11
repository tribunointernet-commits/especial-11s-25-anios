const items=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('visible');
});
},{threshold:.2});
items.forEach(i=>observer.observe(i));

document.querySelectorAll('.counter').forEach(counter=>{
let done=false;
const obs=new IntersectionObserver(entries=>{
if(entries[0].isIntersecting&&!done){
done=true;
let target=Number(counter.dataset.target);
let n=0;
let step=Math.max(1,Math.floor(target/80));
let timer=setInterval(()=>{
n+=step;
if(n>=target){n=target;clearInterval(timer)}
counter.textContent=n.toLocaleString();
},20);
}
});
obs.observe(counter);
});
