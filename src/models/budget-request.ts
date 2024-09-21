export interface BudgetRequest {
  id: number;
  title: string;
  price: number;
  quantity: number;
  status: "PENDING" | "APPROVED" | "REJECTED";
  owner : string;
}

export interface AddBudget {
  title: string;
  price: number;
  quantity: number;
}