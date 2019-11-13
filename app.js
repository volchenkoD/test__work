// форма регистрации нового соискателя
let addUserButton = document.querySelector('.new__user');
addUserButton.onclick = () => {
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.close').style.display = "block";
    document.querySelector('.close').onclick = () => {
        document.querySelector('.modal').style.display = "none";
        document.querySelector('.close').style.display = "none";
    }
}
document.querySelector('.remove').onclick = () => {
    document.querySelector('.modal').style.display = "none";
    document.querySelector('.close').style.display = "none";
}