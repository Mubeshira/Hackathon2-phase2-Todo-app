// frontend/lib/api.ts
// API helper functions for making requests to the backend

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface ApiOptions extends RequestInit {
  token?: string;
}

// Generic API request function
export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { token, headers, ...restOptions } = options;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...restOptions,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `API request failed: ${response.status}`);
  }

  // For DELETE requests, there's typically no response body
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

// Auth API functions
export const authApi = {
  async login(email: string, password: string) {
    return apiRequest<{ token: string; user: any }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  async register(
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
  ) {
    return apiRequest<{ token: string; user: any }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, firstName, lastName }),
    });
  },

  async logout(token: string) {
    return apiRequest('/api/auth/logout', {
      method: 'POST',
      token,
    });
  },

  async getProfile(token: string) {
    return apiRequest('/api/auth/me', {
      method: 'GET',
      token,
    });
  },
};

// Todo API functions
export const todoApi = {
  async getTodos(token: string) {
    return apiRequest('/api/todos', {
      method: 'GET',
      token,
    });
  },

  async getTodoById(id: string, token: string) {
    return apiRequest(`/api/todos/${id}`, {
      method: 'GET',
      token,
    });
  },

  async createTodo(todoData: any, token: string) {
    return apiRequest('/api/todos', {
      method: 'POST',
      body: JSON.stringify(todoData),
      token,
    });
  },

  async updateTodo(id: string, todoData: any, token: string) {
    return apiRequest(`/api/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todoData),
      token,
    });
  },

  async patchTodo(id: string, todoData: any, token: string) {
    return apiRequest(`/api/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(todoData),
      token,
    });
  },

  async deleteTodo(id: string, token: string) {
    return apiRequest(`/api/todos/${id}`, {
      method: 'DELETE',
      token,
    });
  },
};