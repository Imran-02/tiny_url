import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const auth= NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
    }),

  ]
})

export { auth as GET, auth as POST }