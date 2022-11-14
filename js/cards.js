let cards = document.querySelector('.cards')

let comm = [
    [1, "Казбек Казбеков", 180, 23],
    [2, "Казбек Казбеков", 181, 23],
    [3, "Казбек Казбеков", 182, 23],
    [4, "Казбек Казбеков", 183, 23],
    [5, "Казбек Казбеков", 184, 23],
    [6, "Казбек Казбеков", 185, 23],
    [7, "Казбек Казбеков", 186, 23],
    [8, "Казбек Казбеков", 187, 23],
    [9, "Казбек Казбеков", 188, 23],
    [10, "Казбек Казбеков", 189, 23],
]

for (i = comm.length - 1; i >= 0; i--) {
    cards.insertAdjacentHTML(
        "afterbegin", 
        `
        <div class="card">
            <img class="photo" src="./img/avatar.jpg" alt="player">
            <div class="card_text">
                <p>${comm[i][1]}</p>
                <p>Рост: ${comm[i][2]}</p>
                <p>Возраст: ${comm[i][3]}</p>
            </div>
        </div>
        `
    )
}