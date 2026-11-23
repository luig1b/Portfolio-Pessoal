
// LISTA DE PROJETOS
// Altere as informações abaixo para adicionar seus próprios projetos.

const projects = [
    {
        title: "Documentação_3DS_Cointrive_2-1",
        description: "Este trabalho busca demonstrar como a tecnologia pode atuar como uma ferramenta de apoio à organização financeira, promovendo o controle dos seus gastos e auxiliando os usuários no controle de suas finanças pessoais. Além disso, pretende evidenciar a importância do planejamento financeiro desde a juventude, contribuindo para a formação de cidadãos  preparados para lidar com os desafios econômicos da vida adulta.",
        image: "imagens/projeto1.jpg",
        link: "https://1drv.ms/f/c/682b7fcb013261aa/IgAgkH-QX96ESq-415RMuHpwAQrrKOcSuzE1vBadq_Qgm8M?e=Sd4zprshared via OneDrive"
    },

    {
        title: "Registros das atividades do curso técnico",
        description: "aqui estão alguns dos meus projetos durante a minha passagem no curso técnico",
        image: "imagens/projeto2.jpg",
        link: "https://github.com/luig1b/3bim-.git"
    },

];


// MOSTRAR OS PROJETOS NA PÁGINA
const projectGrid = document.getElementById("projectGrid");

projects.forEach(function(project) {

    const card = document.createElement("article");
    card.classList.add("project-card");

    const imageArea = document.createElement("div");
    imageArea.classList.add("project-image");

    if (project.image !== "") {
        const image = document.createElement("img");

        image.src = project.image;
        image.alt = "Imagem do " + project.title;

        imageArea.appendChild(image);
    } else {
        imageArea.textContent = "Imagem do projeto";
    }

    const info = document.createElement("div");
    info.classList.add("project-info");

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.classList.add("project-description");
    description.textContent = project.description;

    const button = document.createElement("a");
    button.classList.add("project-button");
    button.textContent = "Ver projeto";
    button.href = project.link;

    if (project.link === "#") {
        button.addEventListener("click", function(event) {
            event.preventDefault();
        });
    } else {
        button.target = "_blank";
        button.rel = "noopener noreferrer";
    }

    info.appendChild(title);
    info.appendChild(description);
    info.appendChild(button);

    card.appendChild(imageArea);
    card.appendChild(info);

    projectGrid.appendChild(card);

});


// ATUALIZAR O ANO DO RODAPÉ
const yearElements = document.querySelectorAll(".year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});
