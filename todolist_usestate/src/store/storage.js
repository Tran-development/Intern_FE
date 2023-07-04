const storage = {
    // save data to storage
    setStorage(todos) {
        return localStorage.setItem('todos', JSON.stringify(todos))
    },
    // get data from storage
    getStorage() {
        return JSON.parse(localStorage.getItem('todos'))
    }
}

export default storage