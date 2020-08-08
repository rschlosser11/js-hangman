class CategoryAdaptor {
    static baseUrl = "http://localhost:3000/categories"

    static getAndMakeCategories() { 
        fetch(`${CategoryAdaptor.baseUrl}`).then(resp => resp.json()).then(obj => obj.forEach(cat => {
            let category = new Category(cat)
            category.renderCategory();
        })).catch(error => console.log(error))
    }

    static newCategory(name, word) {
        fetch(`${CategoryAdaptor.baseUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                word: word
            })
        }).then(resp => resp.json())
        .then(obj => {
            let cat = new Category(obj);
            cat.renderCategory();
            WordAdaptor.getWordsFromCategory(cat.id)
        }).catch(error => console.log(error))
    }
}