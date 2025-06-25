# Catálogo do Sábio - Frontend Angular

Frontend Angular para consumir a API RESTful do **Catálogo do Sábio**, projeto desenvolvido em Java Spring Boot.

---

## 🚀 Tecnologias

- Angular 15+
- TypeScript
- Bootstrap 5 (para estilos rápidos e responsivos)
- HttpClientModule (para comunicação com API REST)
- Angular Router (para navegação entre páginas)

---

## 📋 Funcionalidades

- Listagem de livros com paginação
- Busca e filtragem por gênero e autor
- Visualização detalhada de cada livro
- Navegação amigável entre lista e detalhes

---

## 💻 Pré-requisitos

- Node.js 18+ e npm instalados
- Angular CLI instalado globalmente (opcional, mas recomendado)

---

## ⚙️ Instalação

1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/catalogo-do-sabio-frontend.git
cd catalogo-do-sabio-frontend
```
## Instale as dependências

```bash
npm install
```

## ▶️ Executar localmente
```bash
ng serve
```
## Acesse no navegador:

```bash
http://localhost:4200
```
## 🔗 Configuração da API
O frontend consome a API do backend rodando em:

```bash
http://localhost:8080
```
### Se precisar alterar a URL da API, modifique a variável API_BASE em:

```bash
src/app/services/book.service.ts
```
## 🛠️ Comandos úteis
ng serve — roda o servidor de desenvolvimento

ng build — gera build para produção

ng test — executa testes unitários

ng lint — checa estilo e padrões do código

📖 Documentação
A API backend tem documentação Swagger disponível em:

```bash
http://localhost:8080/swagger-ui.html
