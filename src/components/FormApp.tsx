interface FormAddRequestProps {
    addRequest(request: BudgetRequest): void;
  }
  // FormAddRequest.tsx
  function FormAddRequest(props: FormAddRequestProps) {
    const [newRequest, setNewRequest] = useState<BudgetRequest>({
      id: 0,
      title: "",
      amount: 0,
      quantity: 1,
      status: "APPROVED",
    });
  
    const updateField = (event: ChangeEvent<HTMLInputElement>) => {
      const value =
        event.target.type === "number"
          ? Number(event.target.value)
          : event.target.value;
      setNewRequest({
        ...newRequest,
        [event.target.name]: value,
      });
    };
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      props.addRequest({
        id: nextId++,
        title: newRequest.title,
        amount: newRequest.amount,
        quantity: 1,
        status: "APPROVED",
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          Title:
          <input name="title" value={newRequest.title} onChange={updateField} />
        </div>
        <div>
          Amount:
          <input
            name="amount"
            type="number"
            value={newRequest.amount}
            onChange={updateField}
          />
        </div>
        <button>Add</button>
      </form>
    );
  }