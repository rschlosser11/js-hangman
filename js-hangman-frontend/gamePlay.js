class GamePlay {
    constructor() {
        this.alphCont = document.createElement('div')
        this.alphCont.classList.add('alphabet-container');
        this.livesLeft = 10;
        this.lives = document.createElement('p');
        this.lives.id = 'lives'
        this.lives.innerText = `You have ${this.livesLeft} lives`
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'hangman-box'
        this.ctx = this.canvas.getContext('2d')
        this.category = document.createElement('p');
        this.category.id = 'category-chosen'
        this.newGame = document.createElement('button');
        this.newGame.id = 'start-new-game';
        this.newGame.innerText = "Play Again"
        this.newGame.classList.add('hidden')
        document.getElementById('game-board').append(this.alphCont, this.category, this.lives, this.newGame, this.canvas)
        document.addEventListener('click', e => {
            let button = e.target
            if (button.classList.contains('alphabet-letter')) {
                this.playGame(button);
            }
        });       
        this.newGame.addEventListener('click', this.playAgain)
    }

    startGame() {
        this.renderAlphabet();
    }

    renderAlphabet () {
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        alphabet.forEach(letter => {
            let button = document.createElement('button');
            button.classList.add('alphabet-letter');
            button.innerText = letter;
            this.alphCont.appendChild(button)
        })
    }

    displayGuessResponse(button) {
        let letter = button.innerText;
        let word = Word.chosenWord.word;
        button.disabled = true;
        if (word.includes(letter)) {
            Word.chosenWord.displayLetter(letter)
        } else {
            this.incorrectGuess()
        }
    }

    incorrectGuess() {
        if (this.livesLeft > 1) {
            this.livesLeft -= 1
            this.lives.innerHTML = `You have ${this.livesLeft} lives`
            this.drawHangman(this.livesLeft);
        } else {
            this.lives.innerHTML = 'Game Over!'
            this.drawHangman(0)
            this.newGame.classList.remove('hidden')
        }
    }

    drawHangman = (lives) => {
        const drawArr = [this.rightLeg, this.leftLeg, this.rightArm, this.leftArm, this.torso, this.head, this.rope, this.topFrame, this.leftFrame, this.btmFrame]
        if (this.canvas.getContext) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#999';
            this.ctx.lineWidth = 2;
            drawArr[lives]();
        }
    }

    drawPart = (moveX, moveY, endX, endY) => {
        this.ctx.moveTo(moveX, moveY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }

    btmFrame = () => {this.drawPart(0, 150, 100, 150)}
    leftFrame = () => {this.drawPart(0, 150, 0, 0)}
    topFrame = () => {this.drawPart(0, 0, 150, 0)}
    rope = () => {this.drawPart(150, 0, 150, 10)}
    head = () => {
        this.ctx.arc(150, 25, 15, 0, 2*Math.PI)
        this.ctx.stroke()
    }
    torso = () => {this.drawPart(150, 40, 150, 100)}
    leftArm = () => {this.drawPart(150, 60, 120, 30)}
    rightArm = () => {this.drawPart(150, 60, 180, 30)}
    leftLeg = () => {this.drawPart(150, 100, 130, 130)}
    rightLeg = () => {this.drawPart(150, 100, 170, 130)}

    playAgain = () => {
        let toRemove = [this.alphCont, this.category, this.lives, this.newGame, this.canvas, document.getElementById('word-container')]
        toRemove.forEach(child => this.removeElement(document.getElementById('game-board'), child))
        document.querySelector('div.cat-container').classList.remove('hidden')
        document.querySelector('p.instructions').classList.remove('hidden')
        document.querySelector('#new-category-btn').classList.remove('hidden')
        document.querySelector('#new-word-btn').classList.remove('hidden')
    }

    removeElement(parent, child) {
        parent.removeChild(child);
    }

    playGame(button) {
        this.displayGuessResponse(button)
        if (Word.wordComplete()) {
            this.lives.innerText = 'YOU WON!'
            this.newGame.classList.remove('hidden')
        }
    }
}