import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Back-End | Labor Engenharia e Tecnologia LTDA',
        p: 'Teresina, PI | Desde 06/2023 até o presente',
      },
      text: '<p>Automação para Triagem de Imagens: Desenvolvimento de automações especializadas para melhorar a eficiência na triagem de imagens de veículos, contribuindo significativamente para a redução de tempo e recursos no processo.</p> <p>Otimização de Desempenho: Engajamento na otimização contínua do desempenho do back-end, assegurando eficiência superior no processamento de dados.</p> <p>Criação e Manutenção de APIs: Implementação de APIs robustas para facilitar a comunicação eficiente entre diferentes módulos do sistema.</p> <p>Desenvolvimento de Funcionalidades: Liderança no desenvolvimento back-end do início ao fim para o sistema de gerenciamento e estoque.</p>'
    },
    {
      summary: {
        strong: 'Auxiliar de Escritório | Labor Engenharia e Tecnologia LTDA',
        p: 'Teresina, PI | 09/2021 – 06/2023 ',
      },
      text: '<p>Realização de triagem de imagens de veículos, com foco em carros e caminhões</p> <p>Colaboração com equipes para garantir a precisão e eficiência na triagem de imagens.</p>'
    },

  ]);
}
