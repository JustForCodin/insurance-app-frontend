import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceContract } from '../components/insurance-contracts/insurance-contract.model';

@Injectable({
    providedIn: 'root'
})
export class InsuranceContractService {
    private apiUrl = 'http://localhost:5000/api/insurance-contracts'; // URL бекенду

    constructor(private http: HttpClient) { }

    getAllInsuranceContracts(): Observable<InsuranceContract[]> {
        return this.http.get<InsuranceContract[]>(this.apiUrl);
    }

    getInsuranceContractById(id: string): Observable<InsuranceContract> {
        return this.http.get<InsuranceContract>(`${this.apiUrl}/${id}`);
    }

    createInsuranceContract(insuranceContract: InsuranceContract): Observable<InsuranceContract> {
        return this.http.post<InsuranceContract>(this.apiUrl, insuranceContract);
    }

    updateInsuranceContract(id: string, insuranceContract: InsuranceContract): Observable<InsuranceContract> {
        return this.http.put<InsuranceContract>(`${this.apiUrl}/${id}`, insuranceContract);
    }

    deleteInsuranceContract(id: string): Observable<InsuranceContract> {
        return this.http.delete<InsuranceContract>(`${this.apiUrl}/${id}`);
    }

    calculateAgentSalary(insuranceContractId: string): Observable<number> {
        return this.http.get<number>(`${this.apiUrl}/calculate-salary/${insuranceContractId}`);
    }
}