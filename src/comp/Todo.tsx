import { useState } from "react";
import styled from "styled-components";

interface Todo {
  title: string;
  description: string;
}

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>(
    new Array(0).fill({ title: "Todo Title", description: "" })
  );

  return (
    <Wrapper>
      Todo
      <div>
        {todos.map((todo: Todo) => (
          <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
