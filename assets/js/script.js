// Interação com botões
document.querySelectorAll('.btn, .btn-doe').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => btn.style.transform = 'scale(1)', 150);
    });
});

// Cadastro de voluntários
const form = document.getElementById('formVoluntario');
const lista = document.getElementById('voluntarios');
let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];

function atualizarLista() {
    lista.innerHTML = "";
    voluntarios.forEach(v => {
        const li = document.createElement('li');
        li.textContent = `${v.nome} - ${v.email}`;
        lista.appendChild(li);
    });
}

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const motivo = document.getElementById('motivo').value;

        voluntarios.push({ nome, email, motivo });
        localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

        form.reset();
        atualizarLista();
        alert('Voluntário cadastrado com sucesso!');
    });
}

if (lista) atualizarLista();
