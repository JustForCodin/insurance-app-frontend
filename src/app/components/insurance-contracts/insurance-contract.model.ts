import { Branch } from '../branches/branch.model';
import { InsuranceType } from '../insurance-types/insurance-type.model';
import { InsuranceAgent } from '../insurance-agents/insurance-agent.model';

export interface InsuranceContract {
    _id?: string;
    contractNumber: string;
    contractDate: Date;
    insuranceAmount: number;
    tariffRate: number;
    branch: Branch | undefined; 
    insuranceType: InsuranceType | undefined;
    agent: InsuranceAgent | undefined; 
}