import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAgent } from '../components/insurance-agents/insurance-agent.model';

@Injectable({
    providedIn: 'root'
})
export class InsuranceAgentService {
    private apiUrl = 'http://localhost:5000/api/insurance-agents';

    constructor(private http: HttpClient) { }

    getAllInsuranceAgents(): Observable<InsuranceAgent[]> {
        return this.http.get<InsuranceAgent[]>(this.apiUrl);
    }

    getInsuranceAgentById(id: string): Observable<InsuranceAgent> {
        return this.http.get<InsuranceAgent>(`${this.apiUrl}/${id}`);
    }

    createInsuranceAgent(insuranceAgent: InsuranceAgent): Observable<InsuranceAgent> {
        return this.http.post<InsuranceAgent>(this.apiUrl, insuranceAgent);
    }

    updateInsuranceAgent(id: string, insuranceAgent: InsuranceAgent): Observable<InsuranceAgent> {
        return this.http.put<InsuranceAgent>(`${this.apiUrl}/${id}`, insuranceAgent);
    }

    deleteInsuranceAgent(id: string): Observable<InsuranceAgent> {
        return this.http.delete<InsuranceAgent>(`${this.apiUrl}/${id}`);
    }
}