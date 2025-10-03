# Projeto_API_SP_PWA

# 🔎 Buscador de Serviços Públicos (PWA)

Este é um **Progressive Web App (PWA)** desenvolvido para demonstrar a integração de tecnologias web modernas. O objetivo é utilizar a **Geolocation API** do dispositivo em conjunto com a **API de Dados Abertos OpenStreetMap (via Overpass API)** para encontrar serviços essenciais próximos no Brasil.

[cite_start]O projeto foi estruturado seguindo as melhores práticas e requisitos para PWAs, conforme as diretrizes do curso "Desenvolvimento e Integração de Sistemas Móveis - Prática PWA"[cite: 3, 12, 38].

---

## 🌟 Funcionalidades Implementadas

[cite_start]O aplicativo permite localizar em um raio de 5 km[cite: 175]:

* **Infraestrutura e Serviços Essenciais:** O filtro da Overpass API está configurado para buscar:
    * **Hospitais** e **Clínicas** (`amenity=hospital`, `amenity=clinic`)
    * **Postos de Gasolina** (`amenity=fuel`)
    * **Caixas Eletrônicos (ATM)** (`amenity=atm`)
    * **Delegacias/Polícia** (`amenity=police`)
* [cite_start]**Geolocalização:** Utiliza a API nativa do navegador (`navigator.geolocation`) para obter as coordenadas do usuário[cite: 705].
* [cite_start]**PWA Instalável:** Graças ao **Manifest** e ao **Service Worker**, o aplicativo pode ser instalado na tela inicial (mobile) ou área de trabalho (desktop) e roda em modo *standalone* (tela cheia)[cite: 249, 456].
* [cite_start]**Offline First:** O Service Worker gerencia o *caching* do *App Shell*, garantindo que a interface carregue mesmo sem conexão à internet[cite: 246, 332].

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5, CSS3 & JavaScript** | [cite_start]Base de desenvolvimento da aplicação[cite: 140, 141, 142]. |
| **Bootstrap 5** | [cite_start]Framework para garantir o design responsivo[cite: 165]. |
| **Overpass API** | Serviço para realizar buscas geográficas avançadas nos dados do OpenStreetMap. |
| **Web App Manifest** | [cite_start]Arquivo de configuração que habilita a instalação do PWA[cite: 226, 329]. |
| **Service Worker** | [cite_start]Camada de controle de rede para caching e funcionalidade offline[cite: 227, 328, 338]. |

---

## 🚀 Como Acessar e Instalar

[cite_start]O projeto está configurado para ser publicado através do **GitHub Pages** (pasta `/docs`) e deve ser auditado no **Netlify** para fins de entrega[cite: 770].

### URL do Projeto

https://gabresantts.github.io/Projeto_API_SP_PWA/

### Instalação

Após acessar a URL, o navegador detectará o PWA:

1.  **Desktop (Chrome/Edge):** Clique no ícone de **instalação** na barra de endereço.
2.  **Android:** O navegador exibirá um *prompt* para **"Adicionar à tela inicial"**.
3.  **iOS (Safari):** Use o **ícone Compartilhar** e selecione **"Adicionar à Tela de Início"**.

---

## 👤 Autor

LinkedIn: [linkedin.com/in/gabresants]

Contato: [gabresantts@gmail.com]
