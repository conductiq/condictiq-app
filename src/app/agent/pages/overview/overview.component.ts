import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { Agent, AgentService } from '../../services/agent.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  agents: WritableSignal<Agent[]> = signal([]);

  constructor(
    private readonly agentService: AgentService
  ) {
    this.agentService.getAgents()
      .subscribe({
        next: (res) => {
          this.agents.set(res);
        }
      })
  }
}
