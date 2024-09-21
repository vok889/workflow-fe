import React, { createContext, useContext, useState, useEffect } from "react";
import { BudgetRequest } from "@/models/budget-request";
import { fetchBudgetItems } from "@/services/budget-item";

const ItemDataContext = createContext<BudgetRequest[]>([]);

export const ItemDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [itemData, setItemData] = useState<BudgetRequest[]>([]);

  useEffect(() => {
    fetchBudgetItems().then(setItemData).catch((error) => {
      console.error("Failed to fetch items", error);
    });
  }, []);

  return (
    <ItemDataContext.Provider value={itemData}>
      {children}
    </ItemDataContext.Provider>
  );
};

export const AllItemData = () => useContext(ItemDataContext);