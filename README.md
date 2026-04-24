# 🍕 Projeto Pizzaria — Design Patterns (Adapter + Bridge)

<p align="center">
  Simulação de montagem de pizzas aplicando padrões de projeto em JavaScript
</p>

---

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de aplicar, na prática, conceitos de **Engenharia de Software**, utilizando os padrões de projeto:

* 🔵 **Bridge**
* 🟡 **Adapter**

A aplicação simula a criação de uma pizza personalizada, permitindo combinar:

✔ Tamanhos
✔ Tipos de borda
✔ Sabores (até 3)

---

## 🎯 Objetivo

Demonstrar como padrões de projeto ajudam a:

* Reduzir acoplamento
* Aumentar reutilização de código
* Melhorar a organização e escalabilidade

---

## 🧠 Arquitetura do Projeto

### 🔵 Bridge Pattern

Responsável por separar:

* **Abstração:** Tipo de Pizza (Brotinho, Tradicional, Grande)
* **Implementação:** Borda (Catupiry, Tradicional, Sem borda)

💡 Isso permite combinar qualquer tamanho com qualquer borda sem explosão de classes.

---

### 🟡 Adapter Pattern

Responsável por adaptar um sistema externo de sabores:

* Classe existente: `SistemaSabores`
* Adaptador: `SaboresAdapter`

💡 Permite integrar sistemas diferentes sem alterar seu funcionamento original.

---

## 🏗️ Estrutura do Projeto

```bash
📁 projeto-pizzaria
 ├── pizzaria.js
 ├── Adapter.js
 ├── Bridge.js
 └── README.md
```

---

## ⚙️ Tecnologias

* JavaScript (ES6+)
* Node.js

---

## ▶️ Como Executar

### 📌 Pré-requisito

Instale o Node.js:
👉 https://nodejs.org/

---

### 💻 Passos

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Entrar na pasta
cd seu-repositorio

# Executar
node pizzaria.js
```

---

## 📸 Exemplo de Saída

```bash
Pizza Grande com Borda de Catupiry e sabores: Calabresa, Frango, Portuguesa
```

---

## 💡 Diferenciais do Projeto

✨ Aplicação prática de padrões de projeto
✨ Código modular e escalável
✨ Separação clara de responsabilidades
✨ Fácil manutenção e extensão

---

## 🔮 Possíveis Melhorias

* Interface gráfica (HTML/CSS)
* API de pedidos
* Persistência com banco de dados
* Escolha dinâmica de sabores pelo usuário

---

## 👩‍💻 Autora

**Caroline de Carvalho**

🎓 Estudante de Desenvolvimento de Software
🎯 Foco em Design e Tecnologia
💡 Interessada em UI/UX e Front-end

---

## 📌 Status do Projeto

🚧 Concluído (versão acadêmica)
🚀 Em evolução para portfólio

---

## ⭐ Inspiração

Este projeto foi desenvolvido como exercício acadêmico para reforçar o uso de **Design Patterns** na prática.

---

<p align="center">
  Feito com 💜 por Caroline
</p>
