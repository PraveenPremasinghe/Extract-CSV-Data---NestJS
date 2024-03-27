export interface Employee {
    id: number;
    firstName: String;
    lastName: String;
    designation: String;
    nearestCity: String;
    tier: EmployeeTier;
    status: EmployeeStatus;
}

export enum EmployeeTier{
    TIER_ONE = 1 ,
    TIER_TWO = 2,
    TIER_THREE = 3,
    TIER_FOUR = 4,
    TIER_FIVE = 0
}

export enum EmployeeStatus{
    ACTIVE = 'Active',
    SUSPEND = 'Inactive',
    RESIGNED = 'Resigned'
}