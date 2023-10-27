import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './index'
import { login } from '../../api/auth';

// Mock the login function from api/auth
jest.mock('../api/auth', () => ({
    login: jest.fn(),
}));

describe('<Login />', () => {
    it('renders the login form', () => {
        render(<Login />);

        // expect(screen.getByRole('d', {name: "Email Address"})).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByText(/Remember me/i)).toBeInTheDocument();
        expect(screen.getByText(/Forgot password\?/i)).toBeInTheDocument();
        expect(screen.getByText(/Don't have an account\? Sign Up/i)).toBeInTheDocument();
    });

    it('submits the form with email and password', async () => {
        // Mock successful login response
        (login as jest.Mock).mockResolvedValueOnce({ data: 'mocked_token' });

        render(<Login />);

        // Fill out the form
        await userEvent.type(screen.getByLabelText(/Email Address/i), 'test@example.com');
        await userEvent.type(screen.getByLabelText(/Password/i), 'password123');

        // Submit the form
        await userEvent.click(screen.getByRole('button', {name: /Sign In/i}));

        // Wait for the mock function to be called
        await expect(login).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'password123',
        });

        // Check if token is set in localStorage
        expect(localStorage.getItem('token')).toBe('mocked_token');
    });
});
