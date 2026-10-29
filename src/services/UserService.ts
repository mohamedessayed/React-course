import api from "../lib/axios";
import type { UserInterface } from "../types/api.interface";


export const getUsers = async (): Promise<UserInterface[]> =>{
    const response = await api.get<UserInterface[]>('/users');
    return response.data;
} 


export const getUser = async (id:number): Promise<UserInterface> =>{
    const response = await api.get<UserInterface>(`/users/${id}`);
    return response.data;
} 