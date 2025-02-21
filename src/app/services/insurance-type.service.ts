import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceType } from '../components/insurance-types/insurance-type.model';

@Injectable({
    providedIn: 'root'
})
export class InsuranceTypeService {
    private apiUrl = 'http://localhost:5000/api/insurance-types';

    constructor(private http: HttpClient) { }

    getAllInsuranceTypes(): Observable<InsuranceType[]> {
        return this.http.get<InsuranceType[]>(this.apiUrl);
    }

    getInsuranceTypeById(id: string): Observable<InsuranceType> {
        return this.http.get<InsuranceType>(`${this.apiUrl}/${id}`);
    }

    createInsuranceType(insuranceType: InsuranceType): Observable<InsuranceType> {
        return this.http.post<InsuranceType>(this.apiUrl, insuranceType);
    }

    updateInsuranceType(id: string, insuranceType: InsuranceType): Observable<InsuranceType> {
        return this.http.put<InsuranceType>(`${this.apiUrl}/${id}`, insuranceType);
    }

    deleteInsuranceType(id: string): Observable<InsuranceType> {
        return this.http.delete<InsuranceType>(`${this.apiUrl}/${id}`);
    }
}