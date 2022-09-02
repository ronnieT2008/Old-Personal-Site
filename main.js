const toggleThemesBtn = document.querySelector('.toggle-themes-btn'); 

renderTheme();

toggleThemesBtn.addEventListener('click', () =>{
    console.log('idk');
    document.body.classList.toggle('dark');
    saveTheme();
})

function saveTheme(){
    if('dark-theme' in localStorage)
    {
        localStorage.removeItem("dark-theme");
        return;
    }
    localStorage.setItem("dark-theme", " ")
}

function renderTheme(){
    if("dark-theme" in localStorage){
        document.body.classList.toggle('dark');
        return;
    }
    return;
}