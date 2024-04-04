// roteamento
function loadPage(page) {
    const contentDiv = document.getElementById('content');
    switch (page) {
        case 'index':
            contentDiv.innerHTML = `
            <link rel="stylesheet" href="./arquivos/estilos/index/sessao1.css">
            <section class="home-section">
                <div class="hero-image">
                    <h2>Bem-vindo à Vidraçaria XYZ</h2>
                    <p>Sua vidraçaria de confiança para todos os projetos de vidro.</p>
                </div>
            </section>
            `;
            break;
        case 'servicos':
            contentDiv.innerHTML = `
                <link rel="stylesheet" href="./arquivos/estilos/servicos/sessao1.css">
                <h2>Nossos Serviços</h2>
                <section class="services-section">
                    <div class="service">
                        <img src="https://picsum.photos/700?random=1">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                    <div class="service">
                        <img src="https://picsum.photos/700?random=2">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                    <div class="service">
                        <img src="https://picsum.photos/700?random=3">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                    <div class="service">
                        <img src="https://picsum.photos/700?random=4">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                    <div class="service">
                        <img src="https://picsum.photos/700?random=5">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                    <div class="service">
                        <img src="https://picsum.photos/700?random=6">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                    <div class="service">
                        <img src="https://picsum.photos/700?random=3">
                        <h3>Instalação de Vidros</h3>
                        <p>Nós oferecemos serviços profissionais de instalação de vidros para todas as necessidades residenciais e comerciais.</p>
                    </div>
                </section>
            `;
            break;
        case 'portfolio':
            contentDiv.innerHTML = `
            <link rel="stylesheet" href="./arquivos/estilos/portifolio/sessao1.css">
            <section class="portfolio-section">
                <h2>Nosso Portfólio</h2>
                <div class="gallery">
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=1" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=2" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=3" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=4" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=5" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=6" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=7" alt="Projeto 1">
                    </div>
                    <div class="portfolio-item">
                        <img src="https://picsum.photos/400?random=8" alt="Projeto 1">
                    </div>
                </div>
            </section>
            `;
            break;
        case 'sobre':
            contentDiv.innerHTML = `
            <link rel="stylesheet" href="./arquivos/estilos/sobre/sessao1.css">
            <section class="about-section">
                <div class="container">
                    <div class="about-content">
                        <h2>Sobre Nós</h2>
                        <p>A Vidraçaria XYZ é uma empresa familiar que atua no mercado há mais de 20 anos. Nossa missão é fornecer produtos de vidro de alta qualidade e serviços excepcionais para nossos clientes.</p>
                        <p>Nós nos especializamos em uma variedade de serviços, incluindo instalação de vidros, fabricação de box para banheiro, portas e janelas de vidro, guarda-corpos e espelhos personalizados.</p>
                        <p>Estamos comprometidos em oferecer soluções sob medida para atender às necessidades específicas de cada projeto, garantindo satisfação e confiança aos nossos clientes.</p>
                    </div>
                    <div class="about-image">
                        <img src="https://picsum.photos/500?random=1" alt="Sobre Nós">
                    </div>
                </div>
            </section>
            `;
            break;
        case 'contato':
            contentDiv.innerHTML = `
            <link rel="stylesheet" href="./arquivos/estilos/contato/sessao1.css">
            <section class="container">
                <div class="contact-info">
                    <h2>Entre em Contato</h2>
                    <p>Estamos prontos para ajudá-lo com suas necessidades de vidraçaria. Entre em contato conosco pelos seguintes meios:</p>
                    <ul>
                        <li><strong>Telefone:</strong> (12) 93456-7890</li>
                        <li><strong>Email:</strong> contato@vidracariaxyz.com</li>
                        <li><strong>Endereço:</strong> Rua ABC, 123 - Cidade, Estado</li>
                    </ul>
                </div>
                <div class="contact-form">
                    <h2>Envie uma Mensagem</h2>
                    <form class="form" action="#" method="POST">
                        <input type="text" name="nome" placeholder="Seu Nome" required>
                        <input type="email" name="email" placeholder="Seu Email" required>
                        <textarea name="mensagem" placeholder="Sua Mensagem" rows="5" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>
            `;
            break;
        default:
        contentDiv.innerHTML = `
        <link rel="stylesheet" href="./arquivos/estilos/padrao/sessao1.css">
        <section class="content">
            <h2>Página não encontrada!</h2>
            <p onclick="loadPage('index')">Voltar a página principal</p>
        </section>
        `;
    }
}; 
loadPage('index');

// BTN Noturno
const btnNoturno = document.querySelector("#btnNoturno");
const btnNoturnoBefore = document.querySelector(".toggle-button-before");

btnNoturno.addEventListener("click", ()=>{
    const estiloGeral = getComputedStyle(document.documentElement);
    const corAtual = estiloGeral.getPropertyValue('--primary-color');
    if (corAtual === "#333") {
        document.documentElement.style.setProperty('--primary-color', '#f0f0f0');
        document.documentElement.style.setProperty('--primary-text', '#333');
        btnNoturnoBefore.style.setProperty('transform', 'translate(2rem, -50%)');
    } else {
        document.documentElement.style.setProperty('--primary-color', '#333');
        document.documentElement.style.setProperty('--primary-text', '#f0f0f0');
        btnNoturnoBefore.style.setProperty('transform', 'translate(0, -50%)');
    }
});