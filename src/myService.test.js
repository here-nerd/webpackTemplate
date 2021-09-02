import { hello } from './myService'

it('shall be able to hello world', () => {
    // Arrange

    // Act
    const result = hello()

    // Assert
    expect(result).toEqual('world')
})