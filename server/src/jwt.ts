import * as jwt from 'jsonwebtoken'

const secret = 'HelloWorld'
const ttl = 3600 * 4 // our JWT tokens are valid for 4 hours

interface JwtPayload {
  id: number
}

// export const sign = (data: JwtPayload) =>
// 	jwt.sign(data, secret, { 
// 		algorithm: 'HS256', 
// 		expiresIn: ttl 
// 	})

export const sign = (data: JwtPayload) => 
	jwt.sign(data, secret, {
	algorithm: 'HS256',
	expiresIn: ttl // if ommited, the token will not expire
});

// export const verify = (token: string): JwtPayload =>
// 	jwt.verify(token, secret, {
// 		algorithms: ['HS256']
//   	}) as JwtPayload

export const verify = (token: string): JwtPayload =>
	jwt.verify(token, secret, {
	// Never forget to make this explicit to prevent // signature stripping attacks
	algorithms: ['HS256'],
}) as JwtPayload