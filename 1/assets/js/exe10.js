const form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    total = (n1, n2)=>{
        const inputN1 = event.target.querySelector('#n1');
        const inputN2 = event.target.querySelector('#n2');
        const resultado = document.querySelector('#resultado');    
        
        const n1 = Number(inputN1.value);
        const n2 = Number(inputN2.value);
    
        if (n1 === n2) {
            return resultado.innerHTML = `<span style="text-align: center;"> ${n1} e ${n2} são identicas</span>`;
        } else if (n1 > n2) {
            return resultado.innerHTML = `<span style="text-align: center;"> ${n1} é maior que ${n2}</span>`;
        } else if (n2 > n1) {
            return resultado.innerHTML = `<span style="text-align: center;"> ${n2} é maior que ${n1}</span>`;
        } else {
            return 'ERROR';
        }    
    };

});

