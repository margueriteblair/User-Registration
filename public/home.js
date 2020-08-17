
window.onload = () => {
    //create a form and append to a div
    //create blank elements 
    //set properties and event listeners
    //append to the dom
    const header = document.createElement('h1')
    const mainDiv = document.createElement('div');
    const form = document.createElement('form');
    const emailInput = document.createElement('input')
    const favoriteMovie = document.createElement('input')
    const id = document.createElement('input')
    const submitButton = document.createElement('button')
    
    emailInput.placeholder = 'Email';
    emailInput.type = 'email';
    emailInput.id = 'email'
    emailInput.name = 'email'
    favoriteMovie.placeholder = 'movie';
    favoriteMovie.type = 'text'
    favoriteMovie.name = 'movie'
    favoriteMovie.id = 'movie'
    id.placeholder = 'id';
    id.type = 'text'
    id.name = 'id';
    id.id = 'id'
    submitButton.innerText = 'Submit';
    header.innerText = 'Submit your favorite movie!';
    form.id = 'form';
    
    
    document.body.appendChild(header)
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(form);
    mainDiv.appendChild(submitButton)
    form.appendChild(id)
    form.appendChild(emailInput)
    form.appendChild(favoriteMovie)
    
    let inputs = document.querySelectorAll('input');
    for (const input of inputs) {
        input.classList.add('input');
    }
    let results = document.createElement('div')
    document.body.appendChild(results);
    

    submitButton.onclick = submitReg;

    
    }
    
    function submitReg() {
        const formElem = document.getElementById('form');
        const reqBody = {};
        for (const input of formElem) {
            reqBody[input.name] = input.value
        }
        console.log(reqBody)
        const endpoint = location.origin + '/profile/movies';
        const xhr = new XMLHttpRequest();
        xhr.open('POST', endpoint)
        xhr.onload = () => {
            const res = JSON.parse(xhr.responseText)
            console.log(res)
        }
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(reqBody))
        
    }