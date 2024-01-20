let semConta = document.querySelector(".tampa_bem_vindo_content button")
let temConta = document.querySelector(".tampa_cadastro_content button")


semConta.addEventListener('click', () =>{
    let tampaBemVindo = document.querySelector(".tampa_bem_vindo")
    let tampaBemVindoContent = document.querySelector(".tampa_bem_vindo_content")
    let login = document.querySelector(".login")
    let tampaCadastro = document.querySelector(".tampa_cadastro_content")
    let cadastro = document.querySelector(".cadastro")

    tampaBemVindo.classList.remove("tampa_bem_vindo_animation_class_reverse")
    tampaBemVindoContent.classList.remove("tampa_bem_vindo_content_animation_class_reverse")
    login.classList.remove("login_class_animation_reverse")
    tampaCadastro.classList.remove("tampa_cadastro_content_class_animation_reverse")
    cadastro.classList.remove("cadastro_class_animation_reverse")

    tampaBemVindo.classList.add("tampa_bem_vindo_animation_class")
    tampaBemVindoContent.classList.add("tampa_bem_vindo_content_animation_class")
    login.classList.add("login_class_animation")
    tampaCadastro.classList.add("tampa_cadastro_content_class_animation")
    cadastro.classList.add("cadastro_class_animation")

})

temConta.addEventListener('click', () =>{
    let tampaBemVindo = document.querySelector(".tampa_bem_vindo")
    let tampaBemVindoContent = document.querySelector(".tampa_bem_vindo_content")
    let login = document.querySelector(".login")
    let tampaCadastro = document.querySelector(".tampa_cadastro_content")
    let cadastro = document.querySelector(".cadastro")

    tampaBemVindo.classList.add("tampa_bem_vindo_animation_class_reverse")
    tampaBemVindoContent.classList.add("tampa_bem_vindo_content_animation_class_reverse")
    login.classList.add("login_class_animation_reverse")
    tampaCadastro.classList.add("tampa_cadastro_content_class_animation_reverse")
    cadastro.classList.add("cadastro_class_animation_reverse")

    tampaBemVindo.classList.remove("tampa_bem_vindo_animation_class")
    tampaBemVindoContent.classList.remove("tampa_bem_vindo_content_animation_class")
    login.classList.remove("login_class_animation")
    tampaCadastro.classList.remove("tampa_cadastro_content_class_animation")
    cadastro.classList.remove("cadastro_class_animation")
})