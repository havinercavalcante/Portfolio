import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal <IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Icone de conhecimento do python'
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Icone de conhecimento do docker'
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Icone de conhecimento do git'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento do html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento do css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento do javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento do angular'
    },
    {
      src: 'assets/icons/knowledge/django.svg',
      alt: 'Icone de conhecimento do django'
    },
    {
      src: 'assets/icons/knowledge/nestjs.svg',
      alt: 'Icone de conhecimento do nestjs'
    },
    {
      src: 'assets/icons/knowledge/azure.svg',
      alt: 'Icone de conhecimento do azure'
    },
  ])

}
