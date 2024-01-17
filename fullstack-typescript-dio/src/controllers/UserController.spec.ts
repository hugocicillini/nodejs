import { UserController } from "./UserController";
import { Request } from 'express'
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn()
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', () => {

    const userController = new UserController();
    const mockResponse = makeMockResponse()

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'hugo',
                email: 'hugo@test.com',
                password: "123"
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado' })
    });

    it('Deve retornar erro caso o usuário não informe o name', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'hugo@test.com',
                password: "123"
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request: Name/Email/Password Obrigatórios!' })
    });

    it('Deve retornar erro caso o usuário não informe o email', () => {
        const mockRequest = {
            body: {
                name: 'Hugo',
                email: '',
                password: "123"
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request: Name/Email/Password Obrigatórios!' })
    });

    it('Deve retornar erro caso o usuário não informe a senha', () => {
        const mockRequest = {
            body: {
                name: 'Hugo',
                email: 'hugo@test.com',
                password: ''
            }
        } as Request

        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad Request: Name/Email/Password Obrigatórios!' })
    });

    it("Deve retornar o usuário com o userId informado", () => {
        const mockRequest = makeMockRequest({
            params: {
                userId: "123"
            }
        })

        userController.getUser(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith("123")
        expect(mockResponse.state.status).toBe(200)
    })
})
