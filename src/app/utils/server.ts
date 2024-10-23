import dotenv from 'dotenv'
import { CredentialInput } from 'next-auth/providers/credentials';

dotenv.config()

export const auth = async (endpoint: string, body: object) => {
    try {
        // replace localhost with .env variable
        

        console.info('body is`', body)
        const response = await fetch(`http://localhost:8080${endpoint}`, 
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {"Content-Type": "application/json"}
            }
        );
        
        if (!response.ok) {
            switch(response.status) {
                case 401:
                    throw new Error('Unauthorized')
                case 404:
                    throw new Error('Not found')
                case 500:
                    throw new Error('Internal server error')
                case 502:
                    throw new Error('Bad gateway')
                case 503:
                    throw new Error('Service unavailable')
                case 504:
                    throw new Error('Gateway timeout')
                case 400:
                    throw new Error('Bad request')
                case 403:
                    throw new Error('Forbidden')
                case 409:
                    throw new Error('User already exist')
                default:
                    throw new Error('Network response was not ok')

            }
        }
        if (response.ok && response.headers.get('Content-Type')?.includes('application/json'))
            return response.json();
        else {
            return response.text().then(
                t => {console.info(t)}
            )
        }
    } catch (error: any) {
        const errorMessage = {
            message:error.message
        }
        console.error(error.message)
        return (errorMessage)
    }
};
