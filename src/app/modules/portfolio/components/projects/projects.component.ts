import { Component, inject, signal } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/pokedex.png',
      alt: 'Pokedex',
      title: 'Pokedex',
      with: '100px',
      height: '80px',
      description:
        '<p>O Pokédex é uma aplicação web desenvolvida utilizando o framework Angular, que permite aos usuários explorar e descobrir informações detalhadas sobre Pokémon. Com uma interface intuitiva e amigável, os treinadores Pokémon podem navegar por uma extensa base de dados que inclui todos os Pokémon conhecidos até o momento.</p>',
      links: [
        {
          name: 'Conheça o pokedex',
          href: 'https://pokedex-seven-wheat.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'Lista de afazeres',
      title: 'Lista de Afazeres',
      with: '100px',
      height: '80px',
      description:
        '<p>O Lista de Afazeres é uma aplicação web moderna e intuitiva que permite aos usuários gerenciar suas tarefas diárias de forma eficiente e organizada. Desenvolvida com o poderoso framework Angular, esta aplicação oferece uma experiência de usuário otimizada e responsiva, tornando o gerenciamento de tarefas uma tarefa simples e agradável.</p>',
      links: [
        {
          name: 'Conheça o lista de afazeres',
          href: 'https://minha-lista-de-tarefas.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/darktheme.png',
      alt: 'Dark theme',
      title: 'Dark Theme',
      with: '100px',
      height: '40px',
      description:
        '<p>O Dark Theme esta aplicação apresenta um design moderno e estiloso, com cores escuras que proporcionam conforto visual e reduzem a fadiga ocular durante o uso prolongado.</p>',
      links: [
        {
          name: 'Conheça o dark theme',
          href: 'https://dark-theme-pi.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/biblioteca.png',
      alt: 'API de Cadastro de Livros para Biblioteca',
      title: 'API de Cadastro de Livros para Biblioteca',
      with: '100px',
      height: '70px',
      description:
        '<p>Esta API RESTful foi criada para gerenciar o cadastro de livros em uma biblioteca. Ela permite operações de criar, ler, atualizar e excluir informações sobre livros, facilitando o gerenciamento do acervo de uma biblioteca.</p>',
      links: [
        {
          name: 'Conheça a api de cadastro de livros para biblioteca',
          href: 'https://github.com/havinercavalcante/projeto_biblioteca',
        },
      ],
    },
    {
      src: 'assets/img/projects/clinica.png',
      alt: 'API de Gerenciamento de Pacientes e Agenda de Clínica',
      title: 'API de Gerenciamento de Pacientes e Agenda de Clínica',
      with: '100px',
      height: '80px',
      description:
        '<p>Esta API RESTful foi desenvolvida para ser consumida por um software de gerenciamento de pacientes e agenda de uma clínica. Ela oferece funcionalidades para gerenciar informações dos pacientes, agendar consultas e manter registros atualizados das atividades da clínica. O projeto utiliza Django e Django Rest Framework para uma implementação eficaz e segura.</p>',
      links: [
        {
          name: 'Conheça a api de gerenciamento de pacientes e agenda de clínica',
          href: 'https://github.com/havinercavalcante/projeto_clinica',
        },
      ],
    },
    {
      src: 'assets/img/projects/login.png',
      alt: 'Tela de Login',
      title: 'Tela de Login',
      with: '100px',
      height: '70px',
      description:
        '<p>A tela de login é a porta de entrada para o sistema, onde os usuários podem acessar suas contas fornecendo credenciais válidas. Esta tela é desenvolvida utilizando Angular, aproveitando os recursos modernos do framework para criar uma experiência de usuário fluida e responsiva.</p>',
      links: [
        {
          name: 'Conheça a tela de login',
          href: 'https://login-iota-ashy.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/tarefas.png',
      alt: 'Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '100px',
      description:
        '<p>O aplicativo "Lista de Tarefas" é uma ferramenta básica para gerenciar suas tarefas diárias. Ele permite que os usuários criem, visualizem, editem e excluam tarefas de uma maneira fácil e intuitiva, proporcionando um controle eficiente sobre suas atividades cotidianas.</p>',
      links: [
        {
          name: 'Conheça a lista de tarefas',
          href: 'https://havinercavalcante.github.io/lista-de-tarefas/browser/',
        },
      ],
    },
    {
      src: 'assets/img/projects/ecommerce1.png',
      alt: 'E-commerce',
      title: 'E-commerce',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto é uma plataforma de e-commerce extremamente simples, atualmente em desenvolvimento. Ele foi desenvolvido usando Django 2.2.4 e Python 3.7.3 e inclui funcionalidades básicas, como combinações de variações de produto, cupons de desconto, cálculo de frete e integração com diversos métodos de pagamento.</p>',
      links: [
        {
          name: 'Conheça o e-commerce',
          href: 'https://github.com/havinercavalcante/e-commerce2',
        },
      ],
    },
    {
      src: 'assets/img/projects/agenda.png',
      alt: 'Agenda',
      title: 'Agenda',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto consiste em uma aplicação web para gerenciar uma agenda de contatos. Usuários podem adicionar, editar e excluir contatos, além de visualizá-los em uma lista organizada. O projeto é desenvolvido utilizando Django para o backend, com interfaces de usuário criadas em HTML e estilizadas com CSS.</p>',
      links: [
        {
          name: 'Conheça a agenda',
          href: 'https://github.com/havinercavalcante/agenda',
        },
      ],
    },
    {
      src: 'assets/img/projects/blog.png',
      alt: 'Blog',
      title: 'Blog',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto é um blog dinâmico desenvolvido com Django, HTML e CSS. Permite que usuários criem, editem e excluam posts. Além disso, os visitantes podem ler os artigos e interagir através de comentários. Este blog é projetado para ser simples, mas funcional, fornecendo todas as funcionalidades essenciais de um blog moderno.</p>',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://github.com/havinercavalcante/blog',
        },
      ],
    },
    {
      src: 'assets/img/projects/ecommerce2.png',
      alt: 'E-commerce',
      title: 'E-commerce',
      with: '100px',
      height: '80px',
      description:
        '<p>Este projeto é uma plataforma de e-commerce desenvolvida com Django, HTML e CSS. Ela permite que usuários naveguem por produtos, adicionem itens ao carrinho de compras e realizem pedidos. Este sistema também inclui gerenciamento de usuários</p>',
      links: [
        {
          name: 'Conheça o e-commerce',
          href: 'https://github.com/havinercavalcante/e-commerce1',
        },
      ],
    },

    {
      src: 'assets/img/projects/energia.png',
      alt: 'Sistema de Energia Solar',
      title: 'Sistema de Energia Solar',
      with: '100px',
      height: '100px',
      description:
        '<p>Este projeto consiste em uma aplicação web desenvolvida com Django, HTML, e CSS para uma empresa de assinatura de energia. A aplicação inclui uma calculadora de economia que estima a economia anual e mensal para diferentes tipos de tarifas energéticas, baseando-se em diversos parâmetros de consumo.</p>',
      links: [
        {
          name: 'Conheça o sistema de energia solar',
          href: 'https://github.com/havinercavalcante/energia-solar',
        },
      ],
    },
    {
      src: 'assets/img/projects/exercicios.png',
      alt: 'Lista de Tarefas',
      title: 'Lista de Exercícios',
      with: '100px',
      height: '100px',
      description:
        '<p>Este repositório contém uma série de exercícios programados em Python, organizados por temas específicos para facilitar o aprendizado e a prática da linguagem.</p>',
      links: [
        {
          name: 'Conheça a lista de exercícios',
          href: 'https://github.com/havinercavalcante/lista-de-exercicios',
        },
      ],
    },

  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
