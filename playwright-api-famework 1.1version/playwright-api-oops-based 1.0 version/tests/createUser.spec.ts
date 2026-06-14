import { test } from '../fixtures/apiFixture';
import { ResponseValidator } from '../utils/ResponseValidator';
test('create user', async ({ userService }) => {
 const response = await userService.createUser({name:'John'});
 await ResponseValidator.validateCreated(response);
});