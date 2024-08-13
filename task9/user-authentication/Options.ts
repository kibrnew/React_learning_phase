import Credentials from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google"
 const Options = 
    {
    
        providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET  ?? '',
          }),
          Credentials({
            name: "credentials",
            credentials: {
              email: {
                label: "email",
                type: "text",
              },
              password: {
                label: "password",
                type: "password",
              },
            },
            async authorize(credentials, req) {
                console.log(credentials, "data passed to this")
                const response = await fetch("https://akil-backend.onrender.com/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                  });
            
                  if (response.ok) {
                    const result = await response.json();
                    return result;
                  } else {
                    return null;
                  }
            }
          })
          
        ], 
        callbacks: {
          async session({ session, token }) {
            if(session.user){
                session.accessToken = token.accessToken
                session.user = token.user
            }
            console.log(session, "session from session");
            return session;
          },
          async jwt({ token, user }) {
            if(user){
                token.accessToken = user.data.accessToken
                token.user = {
                    name: user.data.name,
                    email: user.data.email,
                }
            }
            return token;
          },
        }
      }


export default Options