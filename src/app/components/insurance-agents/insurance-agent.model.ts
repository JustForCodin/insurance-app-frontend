import { Branch } from '../branches/branch.model';

export interface InsuranceAgent {
    _id?: string;
    lastName: string;
    firstName: string;
    middleName?: string;
    address: string;
    phoneNumber: string;
    branch: Branch | undefined;
}