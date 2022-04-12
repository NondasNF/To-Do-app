import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App.js';

describe('App component', () => {
  it('should the page', () => {
    render(<App />);
    const linkElement = screen.getByText(/To-Do List/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should add a task', () => {
    render(<App />);
    const inputTask = screen.getByPlaceholderText(/Task name/i);
    const button = screen.getByText(/Add/i);
    fireEvent.change(inputTask, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    const task = screen.getByText(/Task 1/i);
    expect(task).toBeInTheDocument();
  });

  it('should delete a task', () => {
    render(<App />);
    const inputTask = screen.getByPlaceholderText(/Task name/i);
    const button = screen.getByText(/Add/i);
    fireEvent.change(inputTask, { target: { value: 'Task 1' } });
    fireEvent.click(button);
    const buttonDelete = screen.getByText(/trash.svg/i);
    fireEvent.click(buttonDelete);
    const task = screen.queryByText(/Task 1/i);
    expect(task).not.toBeInTheDocument();
  })

})

