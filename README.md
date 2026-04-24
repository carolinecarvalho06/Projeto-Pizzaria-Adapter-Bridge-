# 🍕 Projeto Pizzaria — Design Patterns (Adapter + Bridge)

<p align="center">
  Simulação de montagem de pizzas aplicando padrões de projeto em JavaScript
</p>

---

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de aplicar, na prática, conceitos de **Técnicas de Programação**, utilizando os padrões de projeto:

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

### 🔵 Bridge

Responsável por separar:

* **Abstração:** Tipo de Pizza (Brotinho, Tradicional, Grande)
* **Implementação:** Borda (Catupiry, Tradicional, Sem borda)

💡 Isso permite combinar qualquer tamanho com qualquer borda sem explosão de classes.

---

### 🟡 Adapter

Responsável por adaptar um sistema externo de sabores:

* Classe existente: `SistemaSabores`
* Adaptador: `SaboresAdapter`

💡 Permite integrar sistemas diferentes sem alterar seu funcionamento original.

---

## 🏗️ Estrutura do Projeto

```bash
📁 projeto-pizzaria
 ├── pizzaria.js
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

## 👩‍💻 Autora

**Caroline de Carvalho Mendes**

🎓 Estudante de Desenvolvimento de Software Multiplataforma

---

<p align="center">
  Feito com 💜 por Caroline
</p>
