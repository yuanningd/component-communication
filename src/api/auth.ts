import crudDemoService from "./index";

export interface LoginDto {
    email: string
    password: string
}

export const login = (loginDto: LoginDto) => crudDemoService.post<string>('/auth/login', loginDto)