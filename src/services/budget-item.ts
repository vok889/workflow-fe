import { api } from "@/lib/api";
import { BudgetRequest } from "@/models/budget-request";

interface FetchBudgetItemsResponse {
  data: BudgetRequest[];
}

export const fetchBudgetItems = async (): Promise<BudgetRequest[]> => {
  const response = await api.get<FetchBudgetItemsResponse>("/items");
  const { data } = response.data;
  console.log("Hello");
  return data;
};

interface CreateBudgetItemRequest {
  title: string;
  quantity: number;
  price: number;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

// for View data
export const LookAtItem = async (id: number): Promise<BudgetRequest[]> => {
  const response = await api.get<FetchBudgetItemsResponse>(`/items/${id}`);
  const { data } = response.data;
  console.log(data);

  // convert to array
  const dataArray = Array.isArray(data) ? data : [data];

  return dataArray;
};

//for Update Data
interface UpdateItemRequest {
  title: string;
  quantity: number;
  price: number;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const UpdateItem = async (body: UpdateItemRequest,id:number): Promise<BudgetRequest> => {
  const response = await api.put<CreateBudgetItemResponse>(`/items/${id}`, body);
  const { data } = response.data;
  return data;
};

// For Create Data

interface CreateBudgetItemRequest {
  title: string;
  quantity: number;
  price: number;
}

interface CreateBudgetItemResponse {
  data: BudgetRequest;
}

export const createBudgetItem = async (body: CreateBudgetItemRequest): Promise<BudgetRequest> => {
  const response = await api.post<CreateBudgetItemResponse>("/items/", body);
  const { data } = response.data;
  return data;
};

// For Change Status

interface changestatus {
  status: "APPROVED" | "REJECTED" 
}


export const ChangeItemStatus = async (id :number, body: changestatus): Promise<BudgetRequest> => {
  const response = await api.patch(`/items/${id}`, body);
  const { data } = response.data;
  return data;
};

// For Delete Data
export const DeleteItem = async (id :number): Promise<BudgetRequest> => {
  const response = await api.delete(`/items/${id}`);
  const { data } = response.data;
  return data;
};

