import { api } from "@/lib/api";
import { AddBudget, BudgetRequest } from "@/models/budget-request";
import axios from "axios";


interface LoginInput {
  username: string;
  password: string;
}
interface LoginResponseData {
  message: string;  // ข้อความที่ได้จาก API เช่น "login succeeded"
}
//รูปแบบของ axios ออกมาหลายอย่างแต่จะมี data ที่เป็น response apiเรา
// {
//   "data": {
//     "message": "login succeeded"
//   },
//   "status": 200,
//   "statusText": "OK",
//   "headers": {},
//   "config": {},
//   "request": {}
// }
interface LoginResponse {//เลือกว่าจะสนใจอะไร
  data: LoginResponseData;
  status :number
      
}

//ไม่รู้จะกำหนด any ยังไงมันเป็น object
export const Login = async (body: LoginInput): Promise<LoginResponse> => {
  const response = await api.post<LoginResponseData>("/login", body, { withCredentials: true });
  return {
    data: response.data,
    status: response.status,
  };
};
// -------------------------------------signup
export const Signup = async (body: LoginInput): Promise<LoginResponse> => {
  const response = await api.post<LoginResponseData>("http://localhost:2024/signup", body);
  return {
    data: response.data,
    status: response.status,
  };
};

//



interface CreateResult {
  data: BudgetRequest;
  error:[]
}
