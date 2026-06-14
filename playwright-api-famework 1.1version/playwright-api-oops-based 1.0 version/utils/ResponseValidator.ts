import { expect, APIResponse } from '@playwright/test';
export class ResponseValidator {
 static async validateCreated(r:APIResponse){expect(r.status()).toBe(201);}
 static async validateNoContent(r:APIResponse){expect(r.status()).toBe(204);}
 static async validateBadRequest(r:APIResponse){expect(r.status()).toBe(400);}
 static async validateUnauthorized(r:APIResponse){expect(r.status()).toBe(401);}
 static async validateForbidden(r:APIResponse){expect(r.status()).toBe(403);}
 static async validateNotFound(r:APIResponse){expect(r.status()).toBe(404);}
 static async validateNotImplemented(r:APIResponse){expect(r.status()).toBe(501);}
 static async validateServiceUnavailable(r:APIResponse){expect(r.status()).toBe(503);}
}