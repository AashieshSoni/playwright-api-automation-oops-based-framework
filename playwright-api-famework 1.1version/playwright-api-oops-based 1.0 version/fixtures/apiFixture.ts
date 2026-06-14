import { test as base } from '@playwright/test';
import { UserService } from '../services/UserService';
export const test = base.extend({
 userService: async ({request}, use) => { await use(new UserService(request, process.env.BASE_URL || '')); }
});