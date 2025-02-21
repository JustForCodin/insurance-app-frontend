import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from '../components/branches/branch.model';

@Injectable({
    providedIn: 'root'
})
export class BranchService {
    private apiUrl = 'http://localhost:5000/api/branches';

    constructor(private http: HttpClient) { }

    getAllBranches(): Observable<Branch[]> {
        return this.http.get<Branch[]>(this.apiUrl);
    }

    getBranchById(id: string): Observable<Branch> {
        return this.http.get<Branch>(`${this.apiUrl}/${id}`);
    }

    createBranch(branch: Branch): Observable<Branch> {
        return this.http.post<Branch>(this.apiUrl, branch);
    }

    updateBranch(id: string, branch: Branch): Observable<Branch> {
        return this.http.put<Branch>(`${this.apiUrl}/${id}`, branch);
    }

    deleteBranch(id: string): Observable<Branch> {
        return this.http.delete<Branch>(`${this.apiUrl}/${id}`);
    }
}