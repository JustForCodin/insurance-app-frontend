import { Routes } from '@angular/router';
import { BranchCreateComponent } from './components/branches/branch-create/branch-create.component';
import { BranchEditComponent } from './components/branches/branch-edit/branch-edit.component';
import { BranchListComponent } from './components/branches/branch-list/branch-list.component';
import { InsuranceAgentCreateComponent } from './components/insurance-agents/insurance-agent-create/insurance-agent-create.component';
import { InsuranceAgentEditComponent } from './components/insurance-agents/insurance-agent-edit/insurance-agent-edit.component';
import { InsuranceAgentListComponent } from './components/insurance-agents/insurance-agent-list/insurance-agent-list.component';
import { InsuranceContractCreateComponent } from './components/insurance-contracts/insurance-contract-create/insurance-contract-create.component';
import { InsuranceContractEditComponent } from './components/insurance-contracts/insurance-contract-edit/insurance-contract-edit.component';
import { InsuranceContractListComponent } from './components/insurance-contracts/insurance-contract-list/insurance-contract-list.component';
import { InsuranceTypeCreateComponent } from './components/insurance-types/insurance-type-create/insurance-type-create.component';
import { InsuranceTypeEditComponent } from './components/insurance-types/insurance-type-edit/insurance-type-edit.component';
import { InsuranceTypeListComponent } from './components/insurance-types/insurance-type-list/insurance-type-list.component';
import { AuthGuard } from './auth.guard';
import { ProtectedPageComponent } from './components/protected-page/protected-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes =  [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'protected', component: ProtectedPageComponent, canActivate: [AuthGuard] },

    { path: 'branches', component: BranchListComponent, canActivate: [AuthGuard] },
    { path: 'branches/create', component: BranchCreateComponent, canActivate: [AuthGuard] },
    { path: 'branches/edit/:id', component: BranchEditComponent, canActivate: [AuthGuard] },

    { path: 'insurance-types', component: InsuranceTypeListComponent, canActivate: [AuthGuard] },
    { path: 'insurance-types/create', component: InsuranceTypeCreateComponent, canActivate: [AuthGuard] },
    { path: 'insurance-types/edit/:id', component: InsuranceTypeEditComponent, canActivate: [AuthGuard] },

    { path: 'insurance-agents', component: InsuranceAgentListComponent, canActivate: [AuthGuard] },
    { path: 'insurance-agents/create', component: InsuranceAgentCreateComponent, canActivate: [AuthGuard] },
    { path: 'insurance-agents/edit/:id', component: InsuranceAgentEditComponent, canActivate: [AuthGuard] },

    { path: 'insurance-contracts', component: InsuranceContractListComponent, canActivate: [AuthGuard] },
    { path: 'insurance-contracts/create', component: InsuranceContractCreateComponent, canActivate: [AuthGuard] },
    { path: 'insurance-contracts/edit/:id', component: InsuranceContractEditComponent, canActivate: [AuthGuard] },

    { path: '', redirectTo: '/branches', pathMatch: 'full' },
];
