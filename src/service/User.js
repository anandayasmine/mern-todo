export async function getUsers() {
	const response = await fetch('http://localhost:3000/u');
    return await response.json()
}

export async function addUser(dataObj) {
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataObj)
    };
	const response = await fetch('http://localhost:3000/u/reg',requestOptions);

    return await response.json()
}

export async function loginUser(email, password) {
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        	"email": email,
        	"password" : password
        })
    };
	const response = await fetch('http://localhost:3000/u/login',requestOptions);

    return await response.json()
}

