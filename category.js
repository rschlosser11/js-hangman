class Category {
    static all = [];

    constructor({id, name, words}) {
        this.id = id;
        this.name = name;
        this.words = words;

        this.button = document.createElement('button');
        this.button.addEventListener('click', e => this.selectCategory(e));
        Category.all.push(this)
    }

    renderCategory() {
        document.querySelector('div.cat-container').appendChild(this.button);
        this.button.innerText = `${this.name}`
        this.button.classList.add('cat-button');
        this.button.setAttribute('data-category-id', this.id);
    }

    selectCategory () {
        let game = new GamePlay
        game.startGame();
        let words = Word.all.filter(word => word.category_id === this.id)
        Word.selectWord(words);
        document.getElementById('category-chosen').innerText = `The chosen category is ${this.name}:`;
        document.querySelector('div.cat-container').classList.add('hidden')
        document.querySelector('p.instructions').classList.add('hidden')
        document.querySelector('#new-category-btn').classList.add('hidden')
        document.querySelector('#new-word-btn').classList.add('hidden')
    }

    static renderCreateForm = () => {
        document.getElementById('new-category-btn').classList.add('hidden')
        let div = document.createElement('div');
        div.classList.add('modal');
        let content = document.createElement('div');
        content.classList.add('modal-content');
        div.append(content)
        content.innerHTML = '<span class="close">&times</span><h3>Add a New Category</h3>'
        let form = document.createElement('form');
        content.appendChild(form)
        document.getElementById('body-container').append(div);
        form.classList.add('category-form');
        form.innerHTML = `
            <label><span>Category Name:</span><input id="category-name-field" type="text" name="name"></label>
            <br/>
            <label><span>Word:</span><input id="word-field" type="text" name="word"></label>
            <br/>
            <input type="submit" value="Submit">
        `
    }

    static submitNewCategory (e) {
        e.preventDefault();
        let modal = document.querySelector('div.modal');
        let name = document.getElementById('category-name-field').value
        let word = document.getElementById('word-field').value
        modal.remove();;
        document.getElementById('new-category-btn').classList.remove('hidden')
        CategoryAdaptor.newCategory(name, word);
    }

    static renderSelectOptions(parent) {
        console.log(Category.all)
        Category.all.forEach(category => {
            parent.innerHTML += `<option value="${category.id}">${category.name}</option>`
        })
    }
}