const alas = document.getElementById('alas');
const tinggi = document.getElementById('tinggi');
const sisi1 = document.getElementById('sisi1');
const sisi2 = document.getElementById('sisi2');
const sisi3 = document.getElementById('sisi3');
const Hitung = document.getElementById('Hitung');
const HitungKel = document.getElementById('HitungKel');
const ResetLuas = document.getElementById('ResetLuas');
const ResetKel = document.getElementById('ResetKel');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');

Hitung.addEventListener('click', function(){
    let a = parseFloat(alas.value);
    let t = parseFloat(tinggi.value);
    let l = 0.5 * a * t;
    output1.innerText = `L = 1/2 * ${a} * ${t}`;
    output2.innerText = `L = ${l}`;
});

HitungKel.addEventListener('click', function(){
    let s1 = parseFloat(sisi1.value);
    let s2 = parseFloat(sisi2.value);
    let s3 = parseFloat(sisi3.value);
    let k = s1 + s2 + s3;
    output3.innerText = `K = ${s1} + ${s2} + ${s3}`;
    output4.innerText = `K = ${k}`;
});

ResetLuas.addEventListener('click', function(){
    alas.value = '';
    tinggi.value = '';
    output1.innerText = '';
    output2.innerText = '';
});

ResetKel.addEventListener('click', function(){
    sisi1.value = '';
    sisi2.value = '';
    sisi3.value = '';
    output3.innerText = '';
    output4.innerText = '';
})