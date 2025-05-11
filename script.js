
// Quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Alterna a exibição da barra lateral no mobile
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Função para carregar o conteúdo com base no link clicado
    function loadContent(page) {
        let contentHTML = '';

        switch (page) {
            case 'dashboard':
                contentHTML = `
                    <h2>Visão Geral</h2>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h3>Produtos Vencendo (Próximos 3 dias)</h3>
                            <p>15</p>
                            <span class="trend negative">↑ 2% em relação à semana anterior</span>
                        </div>
                        <div class="stat-card">
                            <h3>Temperatura Média (Hortifruti)</h3>
                            <p>12°C</p>
                        </div>
                        <div class="stat-card">
                            <h3>Umidade Média (Hortifruti)</h3>
                            <p>85%</p>
                        </div>
                        <div class="stat-card">
                            <h3>Nível de Desperdício</h3>
                            <p>2%</p>
                            <span class="trend">↓ 1.5% em relação ao mês anterior</span>
                        </div>
                    </div>
                `;
                break;
            case 'validade':
                contentHTML = `
                    <h2>Validade de Produtos</h2>
                    <table class="product-table">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Lote</th>
                                <th>Validade</th>
                                <th>Quantidade</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Maçã Fuji</td>
                                <td>A123</td>
                                <td>10/03/2024</td>
                                <td>50 kg</td>
                                <td><span class="status-normal">Normal</span></td>
                            </tr>
                            <tr>
                                <td>Leite Integral</td>
                                <td>B456</td>
                                <td>08/03/2024</td>
                                <td>20 un</td>
                                <td><span class="status-warning">Atenção</span></td>
                            </tr>
                            <tr>
                                <td>Carne Moída</td>
                                <td>C789</td>
                                <td>05/03/2024</td>
                                <td>10 kg</td>
                                <td><span class="status-critical">Crítico</span></td>
                            </tr>
                            <tr>
                                <td>Pão Francês</td>
                                <td>D012</td>
                                <td>04/03/2024</td>
                                <td>30 un</td>
                                <td><span class="status-critical">Crítico</span></td>
                            </tr>
                            <tr>
                                <td>Iogurte Natural</td>
                                <td>E345</td>
                                <td>09/03/2024</td>
                                <td>15 un</td>
                                <td><span class="status-warning">Atenção</span></td>
                            </tr>
                        </tbody>
                    </table>
                `;
                break;
            case 'ambiente':
                contentHTML = `
                    <h2>Ambiente dos Setores</h2>
                    <div class="sector-section">
                        <h4>Hortifruti</h4>
                        <div class="data-item">Temperatura: <span>12°C</span></div>
                        <div class="data-item">Umidade: <span>85%</span></div>
                        <div class="alert">Alerta: Temperatura acima do ideal! (Recomendado: 8°C - 10°C)</div>
                    </div>
                    <div class="sector-section">
                        <h4>Carnes</h4>
                        <div class="data-item">Temperatura: <span>2°C</span></div>
                        <div class="data-item">Umidade: <span>70%</span></div>
                    </div>
                    <div class="sector-section">
                        <h4>Laticínios</h4>
                        <div class="data-item">Temperatura: <span>4°C</span></div>
                        <div class="data-item">Umidade: <span>75%</span></div>
                    </div>
                `;
                break;
            default:
                contentHTML = '<p>Selecione uma opção no menu.</p>';
        }

        if (content) {
            content.innerHTML = contentHTML;
        }
    }

    // Adiciona eventos de clique aos links do menu lateral
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove a classe 'active' de todos os links
            sidebarLinks.forEach(item => item.classList.remove('active'));
            
            // Adiciona a classe 'active' ao link clicado
            link.classList.add('active');
            
            // Carrega o conteúdo correspondente
            const page = link.getAttribute('data-page');
            loadContent(page);
            
            // Fecha o menu lateral em dispositivos móveis
            if (window.innerWidth < 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Carrega o dashboard por padrão
    loadContent('dashboard');
});
