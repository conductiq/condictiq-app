import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export type AgentType = 'OLLAMA';

interface BaseAgent {
  id?: number;
  name: string;
  description: string;
  type: AgentType
  role: string;
  goal: string;
  background: string;
  tools: any[]
}

interface OllamaAgent extends BaseAgent {
  type: 'OLLAMA'
  options: {
    url: string;
    model: string;
  }
}

export type Agent = OllamaAgent

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAgents(): Observable<Agent[]> {
      return this.http.get<Agent[]>(`${environment.baseUrl}/agents`)
  }
}

