document.addEventListener('DOMContentLoaded', () => {
    const profileList = document.getElementById('profile-list');

    const medicos = [
        {
            nome: "Dr. João Silva",
            especialidade: "Cardiologista",
            imagem: "https://randomuser.me/api/portraits/men/1.jpg",
            descricao: "Especialista em cardiologia com 10 anos de experiência."
        },
        {
            nome: "Dra. Maria Souza",
            especialidade: "Dermatologista",
            imagem: "https://randomuser.me/api/portraits/women/1.jpg",
            descricao: "Experiência em tratamento de doenças da pele."
        },
        {
            nome: "Dr. Carlos Pereira",
            especialidade: "Ortopedista",
            imagem: "https://randomuser.me/api/portraits/men/.jpg",
            descricao: "Atua na área de ortopedia e traumatologia."
        },
        {
            nome: "Dra. Ana Gomes",
            especialidade: "Pediatra",
            imagem: "https://randomuser.me/api/portraits/women/2.jpg",
            descricao: "Cuida da saúde infantil com dedicação."
        },
        {
            nome: "Dr. Pedro Oliveira",
            especialidade: "Neurologista",
            imagem: "https://randomuser.me/api/portraits/men/3.jpg",
            descricao: "Especialista em neurologia com foco em doenças neurodegenerativas."
        },
        {
            nome: "Dra. Carla Mendes",
            especialidade: "Ginecologista",
            imagem: "https://randomuser.me/api/portraits/women/3.jpg",
            descricao: "Experiência em saúde da mulher e cuidados ginecológicos."
        },
        {
            nome: "Dr. Rafael Costa",
            especialidade: "Psiquiatra",
            imagem: "https://randomuser.me/api/portraits/men/4.jpg",
            descricao: "Atua na área de saúde mental e psiquiatria."
        },
        {
            nome: "Dra. Juliana Ferreira",
            especialidade: "Oftalmologista",
            imagem: "https://randomuser.me/api/portraits/women/4.jpg",
            descricao: "Especialista em cuidados com a visão e cirurgias oculares."
        }
    ];

    medicos.forEach(medico => {
        const card = document.createElement('div');
        card.classList.add('profile-card');

        const img = document.createElement('img');
        img.src = medico.imagem;
        img.alt = medico.nome;

        const name = document.createElement('h2');
        name.textContent = medico.nome;

        const specialty = document.createElement('p');
        specialty.textContent = medico.especialidade;
        specialty.classList.add('specialty');

        const description = document.createElement('p');
        description.textContent = medico.descricao;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(specialty);
        card.appendChild(description);

        profileList.appendChild(card);
    });

    // Adiciona evento de clique ao botão de voltar ao índice
    const voltarBtn = document.getElementById('voltar-index');
    voltarBtn.addEventListener('click', () => {
        window.location.href = 'index.html'; // Substitua 'index.html' pela URL correta da página inicial
    });
});
