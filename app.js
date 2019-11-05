document.getElementById('getjoke').addEventListener('click', output);

function output(e){
    e.preventDefault();
    
    const number = document.getElementById('number').value;

    fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let output = '';
        if (data.type === 'success') {
            console.log(data);
            data.value.forEach((data) => {
                output += `<li>[${data.id}] ${data.joke} | ${data.categories}</li>`;
            })
            document.querySelector('.joke').innerHTML = output;
        } else {
            console.log('error occured');
        }
        

    })
    .catch(err => console.log(err))


    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    // xhr.onload = function(){
        

    //     if (this.status === 200) {
    //         const res = JSON.parse(this.responseText);
    //         console.log(res);
    //         let output = '';
    //         if (res.type === 'success') {
    //             console.log(res.value);
    //             res.value.forEach(function(data){
    //                 output += `<li>[${data.id}] ${data.joke} | ${data.categories}</li>`;
    //             });
    //         } else {
    //             console.log('error');
    //         }
    //         document.querySelector('.joke').innerHTML = output;
    //     } else {
    //         console.log(this.status);
    //     }

        
        
    // }
    // xhr.onerror = function() {
    //     console.log('Request error...');
    // }

    

    
    // xhr.send();
}