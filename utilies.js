import * as jose from 'jose'


export async function generateToken(payload){

              const secret = new TextEncoder().encode(
                process.env.JWT_SECRET,
                )
    
                const alg = 'HS256'
    
                const jwt = await new jose.SignJWT(payload)
                .setProtectedHeader({ alg })            
                .setExpirationTime('2d')
                .sign(secret)
    
                return jwt;

}