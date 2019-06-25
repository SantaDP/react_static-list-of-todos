export const loadTodos = async () => {
  const url_todos = 'https://jsonplaceholder.typicode.com/todos';
  const response  = await fetch(url_todos);
  const data = await response.json();

  return data;
 
}
export const loadUsers = async () => {
  const url_users = 'https://jsonplaceholder.typicode.com/users';
  const response  = await fetch(url_users);
  const data = await response.json();

  return data;
 
}

// loadTodos()
//   .then(data => console.log(data))

// loadUsers()
//   .then(data => console.log(data))