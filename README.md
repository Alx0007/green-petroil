<div align="center">
  <img src="public/imagens/logo.png" alt="Logotipo Green Petroil" width="170" />
  <h1>Green Petroil</h1>
  <p><strong>Energia em movimento. Tecnologia com responsabilidade.</strong></p>
  <p>Plataforma institucional conceitual para uma empresa fictícia do setor energético.</p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-22.2.3-DD0031?logo=angular&logoColor=white" alt="Angular 22.2.3" />
  <img src="https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6.0.2" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JSON_Server-1.0.0--beta.15-6A5ACD" alt="JSON Server" />
</p>

---

## 🧭 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Estrutura de Navegação](#-estrutura-de-navegação)
- [Dados e Integração com a API](#-dados-e-integração-com-a-api)
- [Autores](#-autores)
- [Contexto Acadêmico](#-contexto-acadêmico)

---

## 💡 Sobre o Projeto

A **Green Petroil** é uma aplicação web desenvolvida para apresentar a identidade, as atividades e as iniciativas de uma empresa fictícia do segmento de energia e petróleo. A proposta combina uma experiência institucional rica com conteúdo editorial, apresentação de soluções tecnológicas e divulgação de projetos de impacto socioambiental.

A plataforma foi construída com forte foco no desenvolvimento front-end moderno, componentização avançada e integração fluida com uma API REST simulada. Sua identidade visual adota uma linguagem arrojada ligada ao setor energético, destacando tons verdes e elementos visuais imersivos.

> **Nota:** A Green Petroil, sua história, seus projetos, seus indicadores e seus dados institucionais são puramente fictícios, criados exclusivamente para fins acadêmicos.

---

## ⚡ Funcionalidades

- **🏠 Página Inicial:** Apresentação da marca, proposta institucional de valor e principais áreas de atuação.
- **⚙️ Soluções:** Seção dedicada a operações industriais, inovação tecnológica e eficiência energética.
- **🏢 Sobre a Empresa:** Apresentação conceitual da organização, linha do tempo histórica, missão, visão e valores.
- **🌱 Projetos Sociais:** Listagem de iniciativas focadas em sustentabilidade, meio ambiente, educação e comunidade.
- **📰 Notícias & Editorial:** Exibição de conteúdos com categoria, data, imagem ilustrativa, resumo e página de leitura individual (`/post/:id`).
- **🔗 Conteúdo Relacionado:** Navegação inteligente entre notícias correlacionadas a partir da página de leitura.
- **🧭 Navegação Dinâmica:** Cabeçalho responsivo com links para as principais áreas e menu interativo.
- **📌 Rodapé Institucional:** Informações de contato demonstrativas e links rápidos de navegação.

---

## 🛠️ Tecnologias Utilizadas

### Linguagens
| Tecnologia | Aplicação no projeto |
| :--- | :--- |
| **TypeScript** | Lógica da aplicação, componentes, serviços, modelos e tipagem estática. |
| **HTML5** | Estrutura semântica das páginas e componentes standalone. |
| **CSS3** | Estilização avançada, identidade visual, layout responsivo e micro-interações. |
| **JSON** | Estruturação dos dados de exemplo e arquivos de configuração. |

### Frameworks, Bibliotecas e Ferramentas
| Tecnologia | Finalidade |
| :--- | :--- |
| **Angular 22** | Framework principal baseado em componentes standalone. |
| **Angular Router** | Gerenciamento de rotas e navegação com parâmetros dinâmicos. |
| **Angular HttpClient** | Comunicação HTTP assíncrona com a API REST simulada. |
| **RxJS** | Composição reativa e tratamento de fluxos de dados (`toSignal`, etc). |
| **JSON Server** | Provedor de API REST local baseada no arquivo `db.json`. |
| **Angular SSR & Express** | Estrutura de renderização no servidor configurada no projeto. |
| **Vitest** | Ambiente de execução para testes unitários. |
| **Prettier** | Padronização e formatação automática de código. |

> *Versões declaradas no projeto: Angular 22.2.x, TypeScript 6.0.x, RxJS 7.8.x e JSON Server 1.0.0-beta.15.*

---

## 🗺️ Estrutura de Navegação

| Rota | Descrição |
| :--- | :--- |
| `📁 /` | Página inicial institucional |
| `🏢 /sobre` | Apresentação detalhada da empresa |
| `🌱 /projetos` | Iniciativas e projetos sociais |
| `📰 /post/:id` | Visualização detalhada de uma notícia específica |

---

## 🔌 Dados e Integração com a API

Os dados de demonstração estão centralizados no arquivo `db.json`. Ele fornece registros simulados de notícias e projetos que são servidos localmente por meio do `JSON Server`.

O serviço localizado em `src/app/servicos/api.ts` utiliza o `Angular HttpClient` para consumir os seguintes endpoints:

| Método | Endpoint | Descrição |
| :---: | :--- | :--- |
| **GET** | `/posts` | Retorna a listagem completa de notícias editoriais. |
| **GET** | `/posts/:id` | Retorna os detalhes de uma notícia específica por ID. |
| **GET** | `/projetos` | Retorna a lista de projetos sociais e ambientais. |

> ⚠️ **Aviso de Configuração:** O JSON Server atua como camada de apoio para desenvolvimento local. Atualmente, o projeto não está integrado a um banco de dados de produção. O endpoint padrão está configurado como `http://localhost:3000` no serviço; para deploys em produção, certifique-se de apontar para a URL correspondente da API hospedada.

---

## 👥 Autores

Projeto desenvolvido colaborativamente em dupla:

<div align="center">

### 💻 Kauê Nunes Roque
**RA:** 28329152  
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/ratzz_kaue/)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kau%C3%AA-nunes-roque-b5146b349/)

&nbsp;&nbsp;&nbsp;&nbsp;

### 💻 Alexandre Silva Lacerda
**RA:** 28327709  
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/a.lxandre/)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alexandre-lacerda-8278702a8/)

</div>

---

## 🎓 Contexto Acadêmico

Este projeto foi desenvolvido para fins exclusivamente educacionais, como atividade avaliativa da disciplina de **Front-end e Frameworks** do curso superior de **Análise e Desenvolvimento de Sistemas (ADS)** da **Universidade Guarulhos (UNG)**.

O objetivo central foi aplicar na prática conceitos fundamentais de arquitetura front-end moderna, componentização baseada em componentes standalone, roteamento avançado, organização estruturada de código e consumo de dados reativos via API REST simulada.
