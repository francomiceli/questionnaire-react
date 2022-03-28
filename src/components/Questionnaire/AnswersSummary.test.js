import { render, screen } from '@testing-library/react';
import AnswersSummary from './AnswersSummary';

describe('Answers component', () => {   
   test('Renders error if request fails', async () => {      
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce(
         {
            "-MzFUqFPI7DbA1Y7xh2u": {
                "description": "qw",
                "email": "francomiceli.94@gmail.com",
                "genre": "Rock",
                "name": "Franco Javier Miceli"
            }
        }
      );
      render(<AnswersSummary />);
      const errorElement = await screen.findByText('Something went wrong with your request');
      expect(errorElement).toBeInTheDocument();
    });   
    
})