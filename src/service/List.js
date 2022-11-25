export async function getLists() {
	const response = await fetch('http://localhost:3000/list');
    return await response.json()
}

export async function addList(dataObj) {
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataObj)
    };
	const response = await fetch('http://localhost:3000/list/add',requestOptions);

    return await response.json()
}

export async function updateList(dataObj) {
    // console.table(dataObj)
	const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: dataObj.content,
            isDone: dataObj.isDone
        })
    };
	const response = await fetch('http://localhost:3000/list/upd/'+dataObj.id, requestOptions)
    return await response.json()
}
export async function deleteList(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch('http://localhost:3000/list/del/'+id, requestOptions)
    return await response.json()
}

