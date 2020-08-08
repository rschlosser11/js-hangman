const baseurl = 'http://localhost:3000/'
document.addEventListener('DOMContentLoaded', () => {
    WordAdaptor.getWords();
    CategoryAdaptor.getAndMakeCategories();
    document.getElementById('new-category-btn').addEventListener('click', Category.renderCreateForm)
})

document.addEventListener('submit', (e) => {
    if (e.target.classList.contains('category-form')) {
        console.log(e)
        Category.submitNewCategory(e);
    } else if (e.target.id === 'word-form') {
        console.log(e)
        Word.submitNewWord(e);
    }
    
})
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        document.querySelector('div.modal').remove()
        document.getElementById('new-category-btn').classList.remove('hidden');
        document.getElementById('new-word-btn').classList.remove('hidden');
    } else if (e.target.id === 'new-word-btn') {
        e.target.classList.add('hidden');
        Word.renderNewWordForm();
    }
})