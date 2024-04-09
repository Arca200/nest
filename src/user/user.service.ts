import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser() {
        return {
            name: 'Arca',
            age: 24,
        };
    }
}
