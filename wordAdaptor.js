class WordAdaptor {
    static baseUrl = 'http://localhost:3000'

    static getWords () {
        fetch(`${WordAdaptor.baseUrl}/words`).then(resp => resp.json()).then(obj => obj.forEach(word => new Word(word))).catch(error => console.log(error));
    }

    static getWordsFromCategory(catId) {
        fetch(`${WordAdaptor.baseUrl}/categories/${catId}/words`).then(resp => resp.json()).then(obj => obj.forEach(word => {
            Word.findOrCreateWord(word)
        })).catch(error => console.log(error))
    }

    static newWord(catId, word) {
        fetch(`${WordAdaptor.baseUrl}/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                category_id: catId,
                word: word
            })
        }).then(resp => resp.json())
        .then(obj => {
            console.log(obj)
            let word = new Word(obj)
            console.log(word);
        })
        .catch(error => console.log(error))
    }
}