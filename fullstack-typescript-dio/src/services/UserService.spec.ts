import { UserService } from "./UserService";
import * as jwt from "jsonwebtoken"

jest.mock("../repositories/UserRepository")
jest.mock("../database", () => {
    initialize: jest.fn()
})
jest.mock("jsonwebtoken")

const mockUserRepository = require("../repositories/UserRepository")

describe('UserService', () => {
    const userService = new UserService(mockUserRepository)
    const mockUser = {
        id_user: "1",
        name: "Hugo",
        email: "hugo@hugo.com",
        password: "123"
    }

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('nath', 'nath@test.com', "123");
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject({
            id_user: '1',
            name: "Hugo",
            email: "hugo@hugo.com",
            password: "123"
        })
    })

    it("Deve retornar um token de usuário", async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser))
        jest.spyOn(jwt, 'sign').mockImplementation(() => 'token')
        const token = await userService.getToken("hugo@hugo.com", "123")
        expect(token).toBe("token")
    })

    it("Deve retornar um erro caso não encontre o usuário", async () => {
        jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null))
        await expect(userService.getToken("invalid@bank.com", "1234")).rejects.toThrow(new Error('Email/Password inválido'))
    })
})
