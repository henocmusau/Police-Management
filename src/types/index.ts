export interface policeOfficer {
    id: number;
    firstname: string;
    middlename?: string;
    lastname: string;
    age?: number;
    gender: string;
    rank?: string;
    function?: string;
    position?: string;
}

export interface policeOfficers {
    officers: Partial<policeOfficer>[]
}